import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {Colors} from './enum';

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
    this.element.nativeElement.style.borderBottomColor = this.getColorByDate(this.date);
  }

  public getColorByDate(date: Date): string {
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
        return Colors.blue;
      case publishedDate > getOneMonthBeforeNow():
        return Colors.green;
      case publishedDate > getSixMonthsBeforeNow():
        return Colors.red;
      default:
        return Colors.yellow;
    }

  }
}
