import {Pipe, PipeTransform} from '@angular/core';
import {SearchItem} from '../../models/search-item.model';

@Pipe({
        name: 'sortByParam'
      })
export class SortByParamPipe implements PipeTransform {
  public transform(array: SearchItem[], filterType: string): SearchItem[] {
    if (!filterType) {
      return array;
    }
    if (array && (filterType === '+date' || filterType === '-date')) {
      return array.sort((a: SearchItem, b: SearchItem) => {
        let date: Date, dateToCompare: Date;
        if (filterType === '+date') {
          date = new Date(a.snippet.publishedAt);
          dateToCompare = new Date(b.snippet.publishedAt);
        } else {
          date = new Date(b.snippet.publishedAt);
          dateToCompare = new Date(a.snippet.publishedAt);
        }

        if (date > dateToCompare) {
          return 1;
        } else if (date < dateToCompare) {
          return -1;
        } else {
          return 0;
        }
      });
    } else if (array && (filterType === '+views') || filterType === '-views') {
      let comparisonFunction: Function;

      comparisonFunction = filterType === '+views'
        ? (a, b) => parseInt(a.statistics.viewCount, 10) - parseInt(b.statistics.viewCount, 10)
        : (a, b) => parseInt(b.statistics.viewCount, 10) - parseInt(a.statistics.viewCount, 10);

      return array.sort((a, b) => comparisonFunction(a, b));
    } else {
      return array.filter(item => item.snippet.title.toLowerCase().includes(filterType.toLowerCase()));
    }
  }
}
