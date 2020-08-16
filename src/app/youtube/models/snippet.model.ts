import {Image} from './image.model';

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Image;
    medium: Image;
    high: Image;
    standard: Image;
    maxres: Image;
  };
  channelTitle: string;
  tags: Array<string>;
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}
