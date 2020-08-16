import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SharedService} from '../../services/shared-service/shared.service';

@Component({
             selector: 'app-sort-bar',
             templateUrl: './sort-bar.component.html',
             styleUrls: ['./sort-bar.component.scss']
           })
export class SortBarComponent implements OnInit {
  private dateSort: string = '';
  private countSort: string = '';
  public  searchQuery: string = '';
  @Output() public sortSubmitted: EventEmitter<string>
    = new EventEmitter<string>();

  constructor(private _sharedService: SharedService) {
  }

  private getDateSort(): string {
    this.dateSort = (this.dateSort === '-date') ? '+date' : '-date';
    return this.dateSort;
  }

  private getCountSort(): string {
    this.countSort = (this.countSort === '-views') ? '+views' : '-views';
    return this.countSort;
  }

  public ngOnInit(): void {
  }

  public onDateClick(): void {
    this.sortSubmitted.emit(this.getDateSort());
  }

  public onCountClick(): void {
    this.sortSubmitted.emit(this.getCountSort());
  }

  public onFilterChange(): void {
    this.sortSubmitted.emit(this.searchQuery);
  }
}
