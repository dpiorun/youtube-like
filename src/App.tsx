import React from 'react';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div>
        <MainContent />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
