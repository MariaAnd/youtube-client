import {Component, OnInit} from '@angular/core';
import {SearchResponse} from '../../models/search-response.model';
import {SharedService} from '../../../shared/services/shared-service/shared.service';

@Component({
             selector: 'app-search-results',
             templateUrl: './search-results.component.html',
             styleUrls: ['./search-results.component.scss']
           })
export class SearchResultsComponent implements OnInit {
  public searchResults?: SearchResponse;
  public filterParam?: string;

  constructor(private _sharedService: SharedService) {
  }

  public ngOnInit(): void {
    this._sharedService.currentResponse.subscribe(response => {
      this.searchResults = response;
    });
    this._sharedService.currentSortParameter.subscribe(param => {
      this.filterParam = param;
    });
  }

}
