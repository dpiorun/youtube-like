import { waitFor } from '@testing-library/react';
import { RestYoutubeClient } from '../restYoutubeClient';

describe('Test rest youtube client', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('throws and console error if no api key is provided', async () => {
    jest.spyOn(global.console, 'error').mockImplementation(() => {});
    process.env.REACT_APP_YOUTUBE_API_KEY = '';
    new RestYoutubeClient();
    await waitFor(() => expect(console.error).toBeCalledTimes(1));
  });
});
