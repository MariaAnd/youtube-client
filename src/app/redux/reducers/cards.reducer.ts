import {ADD_CARD, AddCard} from '../actions/cards.action';
import {SearchItem} from '../../youtube/models/search-item.model';

export function cardsReducer(state: Array<SearchItem> = [], action: AddCard): Array<SearchItem> {
  switch (action.type) {
    case ADD_CARD: {
      return [...state, action.payload];
    }

    default:
      return state;
  }
}
