import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
              providedIn: 'root'
            })
export class SharedService {

  public searchTerm: BehaviorSubject<string | undefined> = new BehaviorSubject(undefined);
  public currentSearchTerm: Observable<string | undefined> = this.searchTerm.asObservable();

  public sortParameter: BehaviorSubject<string> = new BehaviorSubject('');
  public currentSortParameter: Observable<string> = this.sortParameter.asObservable();

  constructor() {
  }

  public setSearchTerm(term: string): void {
    this.searchTerm.next(term);
  }

  public applySort(parameter: string): void {
    this.sortParameter.next(parameter);
  }
}
