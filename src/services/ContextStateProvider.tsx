import React, { useContext, useState } from 'react';
import { YoutubeSearchListResponse, YoutubeVideo } from '../types/youtubeTypes';

interface AppState {
  youtubeSearchList?: YoutubeSearchListResponse;
  isFetchingYoutubeSearchList: boolean;
  youtubeVideo?: YoutubeVideo;
  isFetchingYoutubeVideo: boolean;
}

const initialAppState: AppState = {
  isFetchingYoutubeSearchList: false,
  isFetchingYoutubeVideo: false,
};

interface AppContextStateProps {
  appState: AppState;
  setAppState: React.Dispatch<React.SetStateAction<AppState>>;
}

const AppContextState = React.createContext<AppContextStateProps>({
  appState: initialAppState,
  setAppState: () => {},
});

interface ContextProviderProps {
  children: React.ReactNode;
}

export default function ContextStateProvider({
  children,
}: ContextProviderProps) {
  const [appState, setAppState] = useState<AppState>(initialAppState);

  return (
    <AppContextState.Provider value={{ appState, setAppState }}>
      {children}
    </AppContextState.Provider>
  );
}

export const useAppState = () => useContext(AppContextState);
