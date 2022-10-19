import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class RestYoutubeClient {
  private readonly fetcher: AxiosInstance;
  private readonly defaultParams: { [key: string]: string } = {};

  constructor(apiUrl = 'https://www.googleapis.com/youtube/v3') {
    this.fetcher = axios.create({
      baseURL: apiUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    try {
      if (!process.env.REACT_APP_YOUTUBE_API_KEY)
        throw new Error(
          'No Youtube API key provided in environmental variable'
        );
      this.defaultParams = {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      };
    } catch (err) {
      console.error(err);
    }
  }

  async request(url: string, config: AxiosRequestConfig = {}) {
    const conf = {
      ...config,
      params: { ...this.defaultParams, ...config.params },
    };
    return this.fetcher(url, conf);
  }
}
