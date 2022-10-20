import { waitFor } from '@testing-library/react';
import { RestYoutubeClient } from '../restYoutubeClient';

const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...OLD_ENV };
});

afterAll(() => {
  process.env = OLD_ENV;
});

describe('Test rest youtube client', () => {
  it('throws and console error if no api key is provided', async () => {
    jest.spyOn(global.console, 'error').mockImplementation(() => {});
    process.env.REACT_APP_YOUTUBE_API_KEY = '';
    new RestYoutubeClient();
    await waitFor(() => expect(console.error).toBeCalledTimes(1));
  });
});
