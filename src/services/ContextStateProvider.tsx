import React, { useCallback, useContext, useState } from 'react';
import { YoutubeSearchListResponse, YoutubeVideo } from '../types/youtubeTypes';

interface AppState {
  youtubeSearchList?: YoutubeSearchListResponse;
  isFetchingYoutubeSearchList: boolean;
  youtubeVideo?: YoutubeVideo;
  isFetchingYoutubeVideo: boolean;
  isError: boolean;
  errorMsg?: string;
}

const initialAppState: AppState = {
  isFetchingYoutubeSearchList: false,
  isFetchingYoutubeVideo: false,
  isError: false,
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

export const useAppState = () => {
  const { appState } = useContext(AppContextState);
  return { appState };
};

export const useDispatch = () => {
  const { setAppState } = useContext(AppContextState);
  const dispatch = useCallback(
    (newState: Partial<AppState>) =>
      setAppState((previous) => ({ ...previous, ...newState })),
    [setAppState]
  );
  return { dispatch };
};
