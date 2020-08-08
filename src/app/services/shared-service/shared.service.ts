import {Injectable} from '@angular/core';
import {SearchResponse} from '../../models/search-response.model';
import data from './data.js';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
              providedIn: 'root'
            })
export class SharedService {

  public response: BehaviorSubject<SearchResponse> = new BehaviorSubject(undefined);
  public currentResponse: Observable<SearchResponse> = this.response.asObservable();

  public sortParameter: BehaviorSubject<string> = new BehaviorSubject('');
  public currentSortParameter: Observable<string> = this.sortParameter.asObservable();

  constructor() {
  }

  public getResponse(): void {
    this.response.next(data);
  }

  public applySort(parameter: string): void {
    this.sortParameter.next(parameter);
  }
}
