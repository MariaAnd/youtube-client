import {Injectable} from '@angular/core';
import {SearchResponse} from '../../models/search-response.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {SearchIdResponse} from '../../models/search-id-response.model';

@Injectable({
              providedIn: 'root'
            })
export class YoutubeService {

  constructor(private http: HttpClient) {
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
}
