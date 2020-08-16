import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SharedService} from '../../services/shared-service/shared.service';

@Component({
             selector: 'app-header',
             templateUrl: './header.component.html',
             styleUrls: ['./header.component.scss']
           })
export class HeaderComponent implements OnInit {
  public isSortBarVisible: boolean = false;

  constructor(private _searchService: SearchService) {
  }

  public toggleSortBarVisibility(): void {
    this.isSortBarVisible = !this.isSortBarVisible;
  }

  public onSearchSubmit(): void {
    this._searchService.getResponse();
  }

  public ngOnInit(): void {
  }

}
