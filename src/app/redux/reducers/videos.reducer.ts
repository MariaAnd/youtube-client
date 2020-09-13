import {VideosReceived, VIDEOS_RECEIVED} from '../actions/videos.action';
import {SearchResponse} from '../../youtube/models/search-response.model';

export function videosReducer(state: SearchResponse, action: VideosReceived): SearchResponse {
  switch (action.type) {
    case VIDEOS_RECEIVED: {
      return action.payload;
    }

    default:
      return state;
  }
}
