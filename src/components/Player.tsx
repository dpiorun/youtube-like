import parse from 'html-react-parser';
import { useAppState } from '../services/ContextStateProvider';
import './Player.css';
import Spinner from './Spinner';

const Player = () => {
  const { appState } = useAppState();

  if (!appState.youtubeVideo) return <></>;

  return (
    <div id="player">
      {/* <Spinner /> */}
      {appState.isFetchingYoutubeVideo ? (
        <Spinner />
      ) : (
        <>
          <div className="embeded">
            {parse(appState.youtubeVideo?.player.embedHtml)}
          </div>
          <div>
            <h2>{appState.youtubeVideo.snippet.title}</h2>
            <p>{appState.youtubeVideo.snippet.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Player;
