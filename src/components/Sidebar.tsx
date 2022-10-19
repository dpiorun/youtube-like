import { useEffect, useState } from 'react';
import { useVideo } from '../hooks/useVideo';
import { useAppState } from '../services/ContextStateProvider';
import PlaylistItem from './PlaylistItem';
import './Sidebar.css';
import Spinner from './Spinner';

const Sidebar = () => {
  const { appState, setAppState } = useAppState();

  const [id, setId] = useState('');
  const { data, refetch, status, errorMsg } = useVideo(id);

  useEffect(() => {
    if (data)
      setAppState((previous) => ({
        ...previous,
        youtubeVideo: data,
        isFetchingYoutubeVideo: false,
      }));
    else if (status === 'loading')
      setAppState((previous) => ({
        ...previous,
        isFetchingYoutubeVideo: true,
      }));
    else if (status === 'error')
      setAppState((previous) => ({
        ...previous,
        isError: true,
        errorMsg,
        isFetchingYoutubeVideo: false,
      }));
  }, [data, status, setAppState, errorMsg]);

  const handleClick = (newId: string) => {
    if (newId !== id) {
      setId(newId);
      refetch();
    }
  };

  return (
    <div id="related">
      {appState.errorMsg && <div>{appState.errorMsg}</div>}
      {appState.isFetchingYoutubeSearchList ? (
        <Spinner />
      ) : (
        appState.youtubeSearchList?.items.map((item, index) => (
          <PlaylistItem
            sm={!!appState.youtubeVideo}
            item={item}
            key={index}
            onClick={() => handleClick(item.id.videoId)}
          />
        ))
      )}
    </div>
  );
};

export default Sidebar;
