import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
             selector: 'app-search-bar',
             templateUrl: './search-bar.component.html',
             styleUrls: ['./search-bar.component.scss']
           })
export class SearchBarComponent implements OnInit {
  @Output() public searchSubmitted: EventEmitter<undefined> = new EventEmitter<undefined>();

  constructor() {
  }

  public ngOnInit(): void {
  }

  public getSearchResults(): void {
    this.searchSubmitted.emit();
  }

}
