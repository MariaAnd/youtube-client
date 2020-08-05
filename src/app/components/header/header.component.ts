import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchService} from '../../services/search.service';

@Component({
             selector: 'app-header',
             templateUrl: './header.component.html',
             styleUrls: ['./header.component.scss']
           })
export class HeaderComponent implements OnInit {
  private isSortBarVisible: boolean = false;

  constructor(private _searchService: SearchService) {
  }

  private toggleSortBarVisibility(): void {
    this.isSortBarVisible = !this.isSortBarVisible;
  }

  public onSearchSubmit(): void {
    this._searchService.getResponse();
  }

  public ngOnInit(): void {
  }

}
