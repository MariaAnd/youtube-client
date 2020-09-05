import {SearchIdItem} from './search-id-item.model';

export interface SearchIdResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: SearchIdItem[];
}
