import './Spinner.css';

// From https://codepen.io/Webevasion/pen/VQEdRd
const Spinner = () => (
  <div id="spinner" data-testid="spinner">
    <div className="ytp-spinner">
      <div className="ytp-spinner-container">
        <div className="ytp-spinner-rotator">
          <div className="ytp-spinner-left">
            <div className="ytp-spinner-circle"></div>
          </div>
          <div className="ytp-spinner-right">
            <div className="ytp-spinner-circle"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Spinner;
