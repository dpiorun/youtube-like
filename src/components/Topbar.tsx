import { useEffect, useRef, useState } from 'react';
import './Topbar.css';
import logo from '../assets/images/youtube-like.png';
import { Search, User } from 'react-feather';
import { useSearchList } from '../hooks/useSearchList';
import { useAppState } from '../services/ContextStateProvider';
import { BREAKPOINTS } from '../constants';
import classNames from 'classnames';
import { useDetectOutsideClick } from '../hooks/useDetectOutsideClick';

// TODO: doesn't work properly on small screens with Firefox

const Topbar = () => {
  const [search, setSearch] = useState<string>();
  const [showSearchInput, setShowSearchInput] = useState<boolean>();
  const inputSearchRef = useRef(null);
  useDetectOutsideClick(inputSearchRef, () => {
    if (showSearchInput) setShowSearchInput(false);
  });
  const { setAppState } = useAppState();

  const { data, refetch, status, errorMsg } = useSearchList(search);

  useEffect(() => {
    if (data)
      setAppState((previous) => ({
        ...previous,
        youtubeSearchList: data,
        isFetchingYoutubeSearchList: false,
      }));
    else if (status === 'loading')
      setAppState((previous) => ({
        ...previous,
        isFetchingYoutubeSearchList: true,
      }));
    else if (status === 'error')
      setAppState((previous) => ({
        ...previous,
        isError: true,
        errorMsg,
        isFetchingYoutubeSearchList: false,
      }));
  }, [data, status, setAppState, errorMsg]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      matchMedia(`(max-width: ${BREAKPOINTS.sm})`).matches &&
      !showSearchInput
    ) {
      setShowSearchInput(true);
      return;
    }
    refetch();
    setAppState((previous) => ({ ...previous, youtubeVideo: undefined }));
  };

  return (
    <div className="container">
      <div className="logo">
        <img alt="logo" src={logo} />
      </div>
      <div className="searchcontainer">
        <form onSubmit={handleSubmit}>
          <div className="input-group-merge input-group">
            <input
              ref={inputSearchRef}
              className={classNames(
                'form-control',
                showSearchInput && 'd-block'
              )}
              placeholder="Search"
              onChange={(event) => setSearch(event.currentTarget.value)}
            />
            <button className="input-group-text search-btn" type="submit">
              <Search size={'1.5em'} />
            </button>
          </div>
        </form>
      </div>
      <div className="end">
        <button className="sign-in-btn">
          <User size={'1.3em'} />
          <span className="sign-in-btn-text">SIGN IN</span>
        </button>
      </div>
    </div>
  );
};

export default Topbar;
