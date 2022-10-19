import MainContent from './components/MainContent';
import Topbar from './components/Topbar';
import ContextStateProvider from './services/ContextStateProvider';

function App() {
  return (
    <ContextStateProvider>
      <Topbar />
      <MainContent />
    </ContextStateProvider>
  );
}

export default App;
