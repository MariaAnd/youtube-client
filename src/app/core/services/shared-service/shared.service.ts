import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
              providedIn: 'root'
            })
export class SharedService {

  public sortParameter: BehaviorSubject<string> = new BehaviorSubject('');
  public currentSortParameter: Observable<string> = this.sortParameter.asObservable();

  constructor() {
  }

  public applySort(parameter: string): void {
    this.sortParameter.next(parameter);
  }
}
