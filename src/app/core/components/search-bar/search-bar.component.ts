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

@Component({
             selector: 'app-search-bar',
             templateUrl: './search-bar.component.html',
             styleUrls: ['./search-bar.component.scss']
           })
export class SearchBarComponent implements AfterViewInit, OnDestroy {
  private subscription: Subscription;
  @Output() public searchSubmitted: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput', {static: false}) public input: ElementRef;

  constructor() {
  }

  public ngAfterViewInit(): void {
    const searchTerm$: Observable<string> = fromEvent<KeyboardEvent>(this.input.nativeElement, 'keyup')
      .pipe(
        map(event => (<HTMLInputElement>event.target).value),
        filter(term => term.length > MIN_SYMBOLS),
        startWith(''),
        debounceTime(DEBOUNCE_TIME),
        distinctUntilChanged()
      );
    this.subscription = searchTerm$
      .subscribe(
        searchTerm => {
          this.searchSubmitted.emit(searchTerm);
        }
      );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
