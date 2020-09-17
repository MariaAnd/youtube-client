import {Component, OnInit} from '@angular/core';
import {SearchResponse} from '../../models/search-response.model';
import {SharedService} from '../../../core/services/shared-service/shared.service';
import {YoutubeService} from '../../services/youtube-service/youtube.service';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {State} from '../../../redux/state.model';
import {SearchItem} from '../../models/search-item.model';

@Component({
             selector: 'app-search-results',
             templateUrl: './search-results.component.html',
             styleUrls: ['./search-results.component.scss']
           })
export class SearchResultsComponent implements OnInit {
  public searchResults?: Observable<SearchResponse>;
  public customCards?: Observable<Array<SearchItem>>;
  public filterParam?: string;

  constructor(private _sharedService: SharedService,
              private _youtubeService: YoutubeService,
              private store: Store<State>) {
  }

  public ngOnInit(): void {
    this._sharedService.currentSortParameter.subscribe(param => {
      this.filterParam = param;
    });
    this.searchResults = this.store.select('videos');
    this.customCards = this.store.select('cards');
  }
}
