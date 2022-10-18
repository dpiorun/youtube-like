import Player from './Player';
import Sidebar from './Sidebar';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="justify-content-center">
      <div id="primary">
        <Player />
        <Sidebar />
      </div>
    </div>
  );
};

export default MainContent;
