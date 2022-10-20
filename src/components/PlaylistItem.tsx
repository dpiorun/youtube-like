import { YoutubeSearchResult } from '../types/youtubeTypes';
import './PlaylistItem.css';

interface Props {
  item: YoutubeSearchResult;
  onClick: () => void;
  sm: boolean;
}

const PlaylistItem = ({ item, onClick, sm }: Props) => {
  return (
    <div id="item" onClick={onClick}>
      <div className="thumbnail">
        <img alt="thumbnail" src={item.snippet.thumbnails.high.url} />
      </div>
      <div className="thumbnail-metadata">
        <h3>{item.snippet.title}</h3>
      </div>
    </div>
  );
};

export default PlaylistItem;
