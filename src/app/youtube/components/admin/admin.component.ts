import {Component, OnInit} from '@angular/core';
import {State} from '../../../redux/state.model';
import {Store} from '@ngrx/store';
import {ADD_CARD} from '../../../redux/actions/cards.action';

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

  constructor(private store: Store<State>) {
  }

  public ngOnInit(): void {
  }

  public createCard(): void {
    const card = {
      snippet: {
        title: this.title,
        description: this.description,
        publishedAt: new Date().getTime(),
        thumbnails: {
          default: {
            url : this.image
          }
        },
        linkVideo: this.linkVideo
      }

    };
    this.store.dispatch({
                          type: ADD_CARD,
                          payload: card
                        });
  }

}
