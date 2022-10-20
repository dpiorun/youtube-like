import { BREAKPOINTS, VIDEO_SIZE } from '../constants';
import { youtubeRest } from '../services/youtubeRest';
import { useRequest } from './useRequest';

export const useVideo = (id: string) => {
  const maxWidth = matchMedia(`(max-width: ${BREAKPOINTS.sm})`).matches
    ? VIDEO_SIZE.sm
    : VIDEO_SIZE.lg;

  const { data, ...rest } = useRequest(
    () => youtubeRest.getVideoList({ id, maxWidth }),
    {
      enable: !!id,
    }
  );

  return { data: data?.items[0], ...rest };
};
