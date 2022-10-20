import '@testing-library/jest-dom';

import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import ContextStateProvider from './services/ContextStateProvider';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { searchResponse, youtubeVideoListResponse } from './testConfig';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ContextStateProvider>{children}</ContextStateProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

export const server = setupServer(
  rest.get('https://www.googleapis.com/youtube/v3/search', (_req, res, ctx) => {
    return res(ctx.json(searchResponse(5)));
  }),
  rest.get('https://www.googleapis.com/youtube/v3/videos', (req, res, ctx) =>
    res(
      ctx.json(
        youtubeVideoListResponse(req.url.searchParams.get('id') ?? 'null')
      )
    )
  )
);

// https://github.com/facebook/create-react-app/issues/10126#issuecomment-735272763
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // Deprecated
  removeListener: jest.fn(), // Deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  jest.restoreAllMocks();
});

afterAll(() => {
  server.close();
});
