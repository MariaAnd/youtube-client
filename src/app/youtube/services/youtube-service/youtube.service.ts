import {Injectable} from '@angular/core';
import {SearchResponse} from '../../models/search-response.model';
import {SearchItem} from '../../models/search-item.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {SearchIdResponse} from '../../models/search-id-response.model';
import {StoreI} from '../../../redux/state.model';

class Store<T> {
}

@Injectable({
              providedIn: 'root'
            })
export class YoutubeService {
  private searchResponse!: Observable<SearchResponse>;

  constructor(private http: HttpClient, private store: Store<StoreI>) {
  }

  public getSearchResults(searchTerm: string): Observable<SearchResponse> {
    const params: HttpParams = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', '15')
      .set('q', searchTerm);
    return this.http.get<SearchIdResponse>('/search', {params: params})
      .pipe(mergeMap((response: SearchIdResponse) => {
        const ids: string = response.items.map(item => item.id.videoId).join(',');
        const paramsVideo: HttpParams = new HttpParams()
          .set('id', ids)
          .set('part', 'snippet, statistics');
        return this.http.get<SearchResponse>(
          '/videos', {params: paramsVideo}
        );
      }));
  }

  public getVideoData(id: string): Observable<SearchItem> {
    const paramsVideo: HttpParams = new HttpParams()
      .set('id', id)
      .set('part', 'snippet, statistics');
    return this.http.get<SearchResponse>(
      '/videos', {params: paramsVideo}
    ).pipe(map((response) => {
      return response.items[0];
    }));
  }
}
