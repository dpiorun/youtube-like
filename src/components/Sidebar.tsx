import PlaylistItem from './PlaylistItem';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div id="related">
      {Array.from(Array(10).keys()).map((index) => (
        <PlaylistItem key={index} />
      ))}
    </div>
  );
};

export default Sidebar;
