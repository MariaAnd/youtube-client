import {Directive, ElementRef, Input, OnInit} from '@angular/core';

import {SearchItem} from '../../models/search-item.model';

@Directive({
             selector: '[appHighlightPublicationDate]'
           })
export class HighlightPublicationDateDirective implements OnInit {
  @Input('appHighlightPublicationDate') public date: Date;
  public element: ElementRef;

  constructor(el: ElementRef) {
    this.element = el;
  }

  public ngOnInit(): void {
    this.getColorByDate(this.date);
  }

  public getColorByDate(date: Date): void {
    const currentDate: Date = new Date();
    const publishedDate: Date = new Date(date);

    function getOneMonthBeforeNow(): Date {
      let dateNow: Date = new Date();
      return new Date(dateNow.setMonth(dateNow.getMonth() - 1));
    }

    function getOneWeekBeforeNow(): Date {
      let dateNow: Date = new Date();
      return new Date(dateNow.getTime() - 7 * 24 * 60 * 60 * 1000);
    }

    function getSixMonthsBeforeNow(): Date {
      let dateNow: Date = new Date();
      return new Date(dateNow.setMonth(dateNow.getMonth() - 6));
    }

    switch (true) {
      case publishedDate > getOneWeekBeforeNow():
        this.element.nativeElement.style.borderBottom = '5px solid blue';
        break;
      case publishedDate > getOneMonthBeforeNow():
        this.element.nativeElement.style.borderBottom = '5px solid green';
        break;
      case publishedDate > getSixMonthsBeforeNow():
        this.element.nativeElement.style.borderBottom = '5px solid red';
        break;
      case publishedDate <= getSixMonthsBeforeNow():
        this.element.nativeElement.style.borderBottom = '5px solid yellow';
        break;
    }

  }
}
