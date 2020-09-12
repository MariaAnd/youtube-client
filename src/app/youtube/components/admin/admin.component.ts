import {Component, OnInit} from '@angular/core';

@Component({
             selector: 'app-admin',
             templateUrl: './admin.component.html',
             styleUrls: ['./admin.component.scss']
           })
export class AdminComponent implements OnInit {
  public title: string;
  public description: string;
  public image: string;
  public linkVideo: string;

  constructor() {
  }

  public ngOnInit(): void {
  }

  public createCard(): void {
    console.log({
                  title: this.title,
                  description: this.description,
                  image: this.image,
                  linkVideo: this.linkVideo
                });
  }

}
