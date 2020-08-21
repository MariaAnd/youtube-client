import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SharedService} from '../../services/shared-service/shared.service';

@Component({
             selector: 'app-header',
             templateUrl: './header.component.html',
             styleUrls: ['./header.component.scss']
           })
export class HeaderComponent implements OnInit {
  public isSortBarVisible: boolean = false;

  constructor(private _sharedService: SharedService) {
  }

  public toggleSortBarVisibility(): void {
    this.isSortBarVisible = !this.isSortBarVisible;
  }

  public onSearchSubmit(): void {
    this._sharedService.getResponse();
  }

  public onSortSubmit(sortParam: string): void {
    this._sharedService.applySort(sortParam);
  }

  public ngOnInit(): void {
  }

}
