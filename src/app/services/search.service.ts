import { Injectable } from '@angular/core';
import {SearchResponse} from '../models/search-response.model';
import data from './data.js';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public response: BehaviorSubject<SearchResponse> = new BehaviorSubject(undefined);
  public currentResponse: Observable<SearchResponse> = this.response.asObservable();

  constructor() { }

  public getResponse(): void {
    this.response.next(data);
  }
}
