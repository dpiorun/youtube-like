export interface Video {
  kind: 'youtube#video';
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  player: {
    embedHtml: string;
    embedHeight: number;
    embedWidth: number;
  };
}
