import React, { Dispatch, SetStateAction, useState } from 'react';
import MainContent from './components/MainContent';
import Topbar from './components/Topbar';
import { YoutubeSearchListResponse, YoutubeVideo } from './types/youtubeTypes';

interface AppContextProps {
  youtubeSearchList?: YoutubeSearchListResponse;
  setYoutubeSearchList: Dispatch<
    SetStateAction<YoutubeSearchListResponse | undefined>
  >;
  youtubeVideo?: YoutubeVideo;
  setYoutubeVideo: Dispatch<SetStateAction<YoutubeVideo | undefined>>;
}

export const AppContext = React.createContext<AppContextProps>({
  setYoutubeSearchList: () => {},
  setYoutubeVideo: () => {},
});

function App() {
  const [youtubeSearchList, setYoutubeSearchList] =
    useState<YoutubeSearchListResponse>();
  const [youtubeVideo, setYoutubeVideo] = useState<YoutubeVideo>();

  return (
    <div>
      <AppContext.Provider
        value={{
          youtubeSearchList,
          setYoutubeSearchList,
          youtubeVideo,
          setYoutubeVideo,
        }}
      >
        <Topbar />
        <MainContent />
      </AppContext.Provider>
    </div>
  );
}

export default App;
