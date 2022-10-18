import './Player.css';

const Player = () => {
  return (
    <div id="player">
      <div className="embeded">
        <iframe
          width="577"
          height="325"
          src="https://www.youtube.com/embed/pcX5c-pmvTA"
          title='sanah " Do * w sztambuch" (A. Mickiewicz)'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div>
        <h1>Title</h1>
        <div>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum
          </p>
        </div>
      </div>
    </div>
  );
};

export default Player;
