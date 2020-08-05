import {Component, OnInit} from '@angular/core';
import {SearchResponse} from '../../models/search-response.model';
import {SearchService} from '../../services/search.service';

@Component({
             selector: 'app-search-results',
             templateUrl: './search-results.component.html',
             styleUrls: ['./search-results.component.scss']
           })
export class SearchResultsComponent implements OnInit {
  private searchResults?: SearchResponse;

  constructor(private _searchService: SearchService) {
  }

  public ngOnInit(): void {
    this._searchService.currentResponse.subscribe(response => this.searchResults = response)
  }

}
