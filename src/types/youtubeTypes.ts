interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

interface SnippetBase {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
  };
}

interface SnippetVideo extends SnippetBase {
  categoryId: string;
  channelTitle: string;
  liveBroadcastContent: string;
  localized: {
    description: string;
    title: string;
  };
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface YoutubeSearchListResponse {
  kind: 'youtube#searchListResponse';
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: PageInfo;
  items: YoutubeSearchResult[];
}

export interface YoutubeSearchResult {
  kind: 'youtube#searchResult';
  etag: string;
  id: {
    kind: 'youtube#video';
    videoId: string;
  };
  snippet: SnippetBase;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface YoutubeVideo {
  kind: 'youtube#video';
  etag: string;
  id: string;
  player: {
    embedHtml: string;
    embedHeight: string;
    embedWidth: string;
  };
  snippet: SnippetVideo;
}

export interface YoutubeVideoListResponse {
  kind: 'youtube#videoListResponse';
  etag: string;
  items: YoutubeVideo[];
  pageInfo: PageInfo;
}

export interface VideosSearchParams {
  q?: string;
}

export interface VideosListParams {
  id: string;
  maxWidth?: number;
}
