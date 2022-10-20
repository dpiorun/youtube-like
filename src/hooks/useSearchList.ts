import { youtubeRest } from '../services/youtubeRest';
import { useRequest } from './useRequest';

export const useSearchList = (q?: string) => {
  return useRequest(() =>
    youtubeRest.getSearchList({
      q,
    })
  );
};
