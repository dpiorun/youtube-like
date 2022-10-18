import { Video } from '../types/youtubeTypes';
import './PlaylistItem.css';

interface Props {
  video: Video;
}

const PlaylistItem = ({ video }: Props) => {
  return (
    <div id="item">
      <div className="thumbnail">
        <img
          alt="thumbnail"
          width={168}
          src={video.snippet.thumbnails.default.url}
        />
      </div>
      <div>
        <h3>{video.snippet.title}</h3>
      </div>
    </div>
  );
};

export default PlaylistItem;
