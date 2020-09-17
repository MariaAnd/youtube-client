import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SearchResponse} from '../../youtube/models/search-response.model';

export const videosSelector = createFeatureSelector('videos');

export const getVideoById = (id) => createSelector(
  videosSelector,
  (videos: SearchResponse) => {
    if (videos && videos.items) {
      return videos.items.find(video => video.id === id);
    }
  }
);
