import {Injectable} from '@angular/core';
import {SearchResponse} from '../../../youtube/models/search-response.model';
import data from './data.js';
import {SearchItem} from '../../../youtube/models/search-item.model';

@Injectable({
              providedIn: 'root'
            })
export class YoutubeService {

  constructor() {
  }

  public getSearchResults( searchTerm: string): SearchResponse {
    return data;
  }

  public getVideoData(id: string): SearchItem {
    return data.items.find(item => item.id === id);
  }
}
