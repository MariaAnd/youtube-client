
import {VideosReceived, VIDEOS_RECEIVED} from '../actions/videos.action';

export function videosReducer(state, action: VideosReceived) {
  switch (action.type) {
    case VIDEOS_RECEIVED: {
      return action.payload;
    }

    default:
      return state;
  }
}
