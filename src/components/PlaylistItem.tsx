import { BREAKPOINTS, THUMBNAILS_SIZE } from '../constants';
import { YoutubeSearchResult } from '../types/youtubeTypes';
import './PlaylistItem.css';

interface Props {
  item: YoutubeSearchResult;
  onClick: () => void;
  sm: boolean;
}

const PlaylistItem = ({ item, onClick, sm }: Props) => {
  const getWidth = () => {
    if (matchMedia(`(max-width: ${BREAKPOINTS.sm})`).matches || sm)
      return THUMBNAILS_SIZE.sm;
    return THUMBNAILS_SIZE.lg;
  };

  return (
    <div id="item" onClick={onClick}>
      <div className="thumbnail">
        <img
          alt="thumbnail"
          width={getWidth()}
          src={item.snippet.thumbnails.high.url}
        />
      </div>
      <div>
        <h4>{item.snippet.title}</h4>
      </div>
    </div>
  );
};

export default PlaylistItem;
