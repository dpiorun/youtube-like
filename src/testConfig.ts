import {
  PageInfo,
  SnippetBase,
  Thumbnail,
  YoutubeSearchListResponse,
  YoutubeSearchResult,
  YoutubeVideo,
  YoutubeVideoListResponse,
} from './types/youtubeTypes';

const thumbnail: Thumbnail = {
  url: '',
  width: 1,
  height: 1,
};

const baseSnippet = (id: string): SnippetBase => ({
  publishedAt: '',
  channelId: '',
  title: `Test video title ${id}`,
  description: `Test video description ${id}`,
  thumbnails: {
    default: thumbnail,
    medium: thumbnail,
    high: thumbnail,
  },
});

export const youtubeVideo = (id: string): YoutubeVideo => ({
  kind: 'youtube#video',
  etag: '',
  id,
  player: {
    embedHtml: '',
    embedHeight: '',
    embedWidth: '',
  },
  snippet: {
    ...baseSnippet(id),
    categoryId: '',
    channelTitle: '',
    liveBroadcastContent: '',
    localized: {
      description: '',
      title: '',
    },
  },
});

export const youtubeVideoListResponse = (
  id: string
): YoutubeVideoListResponse => ({
  kind: 'youtube#videoListResponse',
  etag: '',
  items: [youtubeVideo(id)],
  pageInfo: pageInfo(1),
});

export const searchResult = (videoId: string): YoutubeSearchResult => ({
  kind: 'youtube#searchResult',
  etag: '',
  id: {
    kind: 'youtube#video',
    videoId,
  },
  snippet: baseSnippet(videoId),
  channelTitle: '',
  liveBroadcastContent: '',
  publishTime: '',
});

const createSearchResults = (
  quantity: number,
  q?: string
): YoutubeSearchResult[] => {
  const retval = [];
  for (let i = 1; i < quantity + 1; i++) {
    const videoId = q ? `q ${i.toString()}` : i.toString();
    retval.push(searchResult(videoId));
  }
  return retval;
};

const pageInfo = (total: number): PageInfo => ({
  totalResults: total,
  resultsPerPage: 5,
});

export const searchResponse = (
  quantity: number
): YoutubeSearchListResponse => ({
  kind: 'youtube#searchListResponse',
  etag: '',
  nextPageToken: '',
  prevPageToken: '',
  pageInfo: pageInfo(quantity),
  items: createSearchResults(quantity),
});
