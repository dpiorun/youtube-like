import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import App from '../App';
import { server } from '../setupTests';

describe('Test App', () => {
  it('gets initial search', async () => {
    render(<App />);
    expect(await screen.findByText('Test video title 1')).toBeVisible();
  });

  it('shows loading spinner when fetching search list', async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByTestId('spinner')).toBeVisible());
  });

  it('loads video', async () => {
    render(<App />);
    expect(screen.queryByTestId('iframe-container')).toBeNull();

    userEvent.click(await screen.findByText('Test video title 1'));
    await waitFor(() =>
      expect(screen.getByTestId('iframe-container')).toBeVisible()
    );
  });

  it('shows error message if search failed', async () => {
    server.use(
      rest.get(
        'https://www.googleapis.com/youtube/v3/search',
        (_req, res, ctx) => res.once(ctx.status(400))
      )
    );
    render(<App />);
    expect(
      await screen.findByText('Request failed with status code 400')
    ).toBeVisible();
  });

  it('shows error message if video load failed', async () => {
    server.use(
      rest.get(
        'https://www.googleapis.com/youtube/v3/videos',
        (_req, res, ctx) => res.once(ctx.status(400))
      )
    );
    render(<App />);
    userEvent.click(await screen.findByText('Test video title 1'));
    expect(
      await screen.findByText('Request failed with status code 400')
    ).toBeVisible();
  });
});
