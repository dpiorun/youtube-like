import { render, screen } from '../../setupTests';
import Topbar from '../Topbar';

describe('Test Topbar component', () => {
  it('renders search input', () => {
    render(<Topbar />);
    expect(screen.getByPlaceholderText('Search')).toBeVisible();
  });

  it('renders sign in button', () => {
    render(<Topbar />);
    expect(screen.getByText(/sign in/i)).toBeVisible();
  });
});
