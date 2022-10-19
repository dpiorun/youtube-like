import { useEffect, useState } from 'react';
import './Topbar.css';
import logo from '../assets/images/youtube-like.png';
import { Search, User } from 'react-feather';
import { useSearchList } from '../hooks/useSearchList';
import { useAppState } from '../services/ContextStateProvider';

const Topbar = () => {
  const [search, setSearch] = useState<string>();
  const { setAppState } = useAppState();

  const { data, refetch, status } = useSearchList(search);

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
  }, [data, status, setAppState]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
              className="form-control"
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
