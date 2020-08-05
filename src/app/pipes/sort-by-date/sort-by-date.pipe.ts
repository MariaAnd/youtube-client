import {Pipe, PipeTransform} from '@angular/core';
import {SearchResponse} from '../../models/search-response.model';
import {SearchItem} from '../../models/search-item.model';

@Pipe({
        name: 'sortByDate'
      })
export class SortByDatePipe implements PipeTransform {
  public transform(array: SearchItem[], filterType: string): SearchItem[] {
    // if (array && filterType === 'date') {
    //   function bubbleSort(inputArr: SearchItem[]): SearchItem[] {
    //     let len: number = inputArr.length - 1;
    //     let swapped: boolean;
    //     do {
    //       swapped = false;
    //       for (let i = 0; i < len; i++) {
    //         if (inputArr[i].snippet.publishedAt > inputArr[i + 1].snippet.publishedAt) {
    //           let tmp: SearchItem = inputArr[i];
    //           inputArr[i] = inputArr[i + 1];
    //           inputArr[i + 1] = tmp;
    //           swapped = true;
    //         }
    //       }
    //     } while (swapped);
    //     return inputArr;
    //   };
    //   bubbleSort(array);
    // }
    if (array && filterType === 'views') {
      let len: number = array.length - 1;
      let swapped: boolean;
      do {
        swapped = false;
        for (let i = 0; i < len; i++) {
          if (Number(array[i].statistics.viewCount) > Number(array[i + 1].statistics.viewCount)) {
            let tmp: SearchItem = array[i];
            array[i] = array[i + 1];
            array[i + 1] = tmp;
            swapped = true;
          }
        }
      } while (swapped);
    }
    return array;
  }

}
