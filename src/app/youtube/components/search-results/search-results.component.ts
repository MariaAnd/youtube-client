import {Component, OnInit} from '@angular/core';
import {SearchResponse} from '../../models/search-response.model';
import {SharedService} from '../../../core/services/shared-service/shared.service';
import {YoutubeService} from '../../services/youtube-service/youtube.service';
import {Observable} from 'rxjs';

@Component({
             selector: 'app-search-results',
             templateUrl: './search-results.component.html',
             styleUrls: ['./search-results.component.scss']
           })
export class SearchResultsComponent implements OnInit {
  public searchResults?: Observable<SearchResponse>;
  public filterParam?: string;

  constructor(private _sharedService: SharedService,
              private _youtubeService: YoutubeService) {
  }

  public ngOnInit(): void {
    this._sharedService.currentSearchTerm.subscribe(searchTerm => {
      if (searchTerm) {
        this.searchResults = this._youtubeService.getSearchResults(searchTerm);
      }
    });
    this._sharedService.currentSortParameter.subscribe(param => {
      this.filterParam = param;
    });
  }

}
