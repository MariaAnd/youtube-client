import {SearchItem} from '../youtube/models/search-item.model';
import {SearchResponse} from '../youtube/models/search-response.model';

export interface State {
  cards: Array<SearchItem>;
  videos?: SearchResponse;
}
