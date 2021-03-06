import {Action} from '@ngrx/store';
import {SearchResponse} from '../../youtube/models/search-response.model';

export const VIDEOS_RECEIVED: string = 'VIDEOS_RECEIVED';

export class VideosReceived implements Action {
  public type: string = VIDEOS_RECEIVED;
  public payload: SearchResponse;
}
