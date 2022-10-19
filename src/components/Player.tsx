import parse from 'html-react-parser';
import { useContext } from 'react';
import { AppContext } from '../App';
import './Player.css';

const Player = () => {
  const { youtubeVideo } = useContext(AppContext);

  if (!youtubeVideo) return <></>;

  return (
    <div id="player">
      <div className="embeded">{parse(youtubeVideo?.player.embedHtml)}</div>
      <div>
        <h2>{youtubeVideo.snippet.title}</h2>
        <p>{youtubeVideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default Player;
