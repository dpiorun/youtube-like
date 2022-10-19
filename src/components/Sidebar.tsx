import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import { useVideo } from '../hooks/useVideo';
import PlaylistItem from './PlaylistItem';
import './Sidebar.css';

const Sidebar = () => {
  const { youtubeVideo, setYoutubeVideo, youtubeSearchList } =
    useContext(AppContext);
  const [id, setId] = useState('');
  const { data, refetch } = useVideo(id);

  useEffect(() => {
    if (data) setYoutubeVideo(data);
  }, [data, setYoutubeVideo]);

  const handleClick = (newId: string) => {
    if (newId !== id) {
      setId(newId);
      refetch();
    }
  };

  return (
    <div id="related">
      {youtubeSearchList?.items.map((item, index) => (
        <PlaylistItem
          sm={!!youtubeVideo}
          item={item}
          key={index}
          onClick={() => handleClick(item.id.videoId)}
        />
      ))}
    </div>
  );
};

export default Sidebar;
