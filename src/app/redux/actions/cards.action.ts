import {Action} from '@ngrx/store';
import {SearchItem} from '../../youtube/models/search-item.model';

export const ADD_CARD: string = 'ADD_CARD';

export class AddCard implements Action {
  public type: string = ADD_CARD;
  public payload: SearchItem;
}
