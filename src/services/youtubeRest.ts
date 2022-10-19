import {
  VideosListParams,
  VideosSearchParams,
  YoutubeSearchListResponse,
  YoutubeVideoListResponse,
} from '../types/youtubeTypes';
import { RestYoutubeClient } from './restYoutubeClient';

class YoutubeRest {
  private readonly http: RestYoutubeClient;

  constructor() {
    this.http = new RestYoutubeClient();
  }

  getSearchList = async (
    params?: VideosSearchParams
  ): Promise<YoutubeSearchListResponse> => {
    const { data } = await this.http.request('search', {
      params: {
        ...params,
        part: 'snippet',
        type: 'video',
      },
    });
    return data;
  };

  getVideoList = async (
    params: VideosListParams
  ): Promise<YoutubeVideoListResponse> => {
    const { data } = await this.http.request('videos', {
      params: {
        ...params,
        part: 'player',
      },
    });
    return data;
  };
}

export const youtubeRest = new YoutubeRest();
