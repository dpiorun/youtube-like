import parse from 'html-react-parser';
import { useAppState } from '../services/ContextStateProvider';
import './Player.css';
import Spinner from './Spinner';

const Player = () => {
  const { appState } = useAppState();

  if (!appState.youtubeVideo) return <></>;

  return (
    <div id="player">
      {appState.errorMsg && <div>{appState.errorMsg}</div>}
      {appState.isFetchingYoutubeVideo ? (
        <Spinner />
      ) : (
        <>
          <div className="embeded" data-testid="iframe-container">
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
