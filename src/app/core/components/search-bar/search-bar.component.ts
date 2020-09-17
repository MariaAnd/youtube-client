import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';
import {fromEvent, Observable, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, startWith, tap} from 'rxjs/operators';
import {MIN_SYMBOLS, DEBOUNCE_TIME} from './const.component';
import {YoutubeService} from '../../../youtube/services/youtube-service/youtube.service';
import {State} from '../../../redux/state.model';
import {Store} from '@ngrx/store';
import {VIDEOS_RECEIVED} from '../../../redux/actions/videos.action';

@Component({
             selector: 'app-search-bar',
             templateUrl: './search-bar.component.html',
             styleUrls: ['./search-bar.component.scss']
           })
export class SearchBarComponent implements AfterViewInit, OnDestroy {
  private subscription: Subscription;
  @Output() public searchSubmitted: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput', {static: false}) public input: ElementRef;

  constructor(private _youtubeService: YoutubeService, private store: Store<State>) {
  }

  public ngAfterViewInit(): void {
    const searchTerm$: Observable<string> = fromEvent<KeyboardEvent>(this.input.nativeElement, 'keyup')
      .pipe(
        map(event => (<HTMLInputElement>event.target).value),
        filter(term => term.length > MIN_SYMBOLS),
        debounceTime(DEBOUNCE_TIME),
        distinctUntilChanged()
      );
    this.subscription = searchTerm$
      .subscribe(
        searchTerm => {
          this._youtubeService.getSearchResults(searchTerm).subscribe(result => {
            this.store.dispatch({
                                  type: VIDEOS_RECEIVED,
                                  payload: result
                                });
          });
        }
      );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
