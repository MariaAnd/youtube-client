import {Component} from '@angular/core';
import data from '../../../../example.js';
import {SearchResponse} from '../../models/search-response.model';

@Component({
             selector: 'app-search-results',
             templateUrl: './search-results.component.html',
             styleUrls: ['./search-results.component.scss']
           })
export class SearchResultsComponent {
  searchResults?: SearchResponse;

  constructor() {
  }

}
