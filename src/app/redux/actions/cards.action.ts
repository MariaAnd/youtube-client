import {Action} from 'rxjs/internal/scheduler/Action';
import {SearchItem} from '../../youtube/models/search-item.model';

export const ADD_CARD: string = 'ADD_CARD';

export class AddCard implements Action {
  public type: string = ADD_CARD;
  public payload: SearchItem;
}
