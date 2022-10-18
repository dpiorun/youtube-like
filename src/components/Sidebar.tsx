import { Video } from '../types/youtubeTypes';
import PlaylistItem from './PlaylistItem';
import './Sidebar.css';

const videos: Video[] = Array(10).fill({
  snippet: {
    title: 'Title title',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/z1q9NJ1Ur6M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCs6CnhVebE5I-3xjCO_t19vfH79g',
      },
    },
  },
  player: {
    embedHtml: (
      <iframe
        width="200"
        src="https://www.youtube.com/embed/pcX5c-pmvTA"
        title='sanah " Do * w sztambuch" (A. Mickiewicz)'
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),
  },
});

const Sidebar = () => {
  return (
    <div id="related">
      {videos.map((video, index) => (
        <PlaylistItem video={video} key={index} />
      ))}
    </div>
  );
};

export default Sidebar;
