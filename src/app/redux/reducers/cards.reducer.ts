import {ADD_CARD, AddCard} from '../actions/cards.action';

export function cardsReducer(state = [], action: AddCard) {
  switch (action.type) {
    case ADD_CARD: {
      const card = action.payload;
      return state.push(card);
    }

    default:
      return state;
  }
}
