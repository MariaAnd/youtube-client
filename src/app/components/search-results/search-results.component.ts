import {Component} from '@angular/core';
import data from '../../../../example.js';

@Component({
             selector: 'app-search-results',
             templateUrl: './search-results.component.html',
             styleUrls: ['./search-results.component.scss']
           })
export class SearchResultsComponent {
  searchResults = data;

  constructor() {
  }

}
