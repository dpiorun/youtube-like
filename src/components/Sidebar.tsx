import { useEffect, useState } from 'react';
import { useVideo } from '../hooks/useVideo';
import { useAppState, useDispatch } from '../services/ContextStateProvider';
import PlaylistItem from './PlaylistItem';
import './Sidebar.css';
import Spinner from './Spinner';

const Sidebar = () => {
  const { appState } = useAppState();
  const { dispatch } = useDispatch();

  const [id, setId] = useState('');
  const { data, refetch, status, errorMsg } = useVideo(id);

  useEffect(() => {
    if (data)
      dispatch({
        youtubeVideo: data,
        isFetchingYoutubeVideo: false,
      });
    else if (status === 'loading')
      dispatch({
        isFetchingYoutubeVideo: true,
      });
    else if (status === 'error')
      dispatch({
        isError: true,
        errorMsg,
        isFetchingYoutubeVideo: false,
      });
  }, [data, status, dispatch, errorMsg]);

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
