import {Component, Input, OnInit} from '@angular/core';
import {SearchItem} from '../../models/search-item.model';
import {Router} from '@angular/router';

@Component({
             selector: 'app-search-item',
             templateUrl: './search-item.component.html',
             styleUrls: ['./search-item.component.scss']
           })
export class SearchItemComponent implements OnInit {
  @Input() public searchItem: SearchItem;

  constructor(private router: Router) {
  }

  public ngOnInit(): void {
  }

  public goToDetailedPage(): void {
    this.router.navigate(['youtube', this.searchItem.id]);
  }

}
