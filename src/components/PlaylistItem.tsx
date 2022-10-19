import './PlaylistItem.css';

const PlaylistItem = () => {
  return (
    <div id="item">
      <div className="thumbnail">
        <img
          alt="thumbnail"
          width={168}
          src="https://i.ytimg.com/vi/z1q9NJ1Ur6M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCs6CnhVebE5I-3xjCO_t19vfH79g"
        />
      </div>
      <div>
        <h3>Title title</h3>
      </div>
    </div>
  );
};

export default PlaylistItem;
