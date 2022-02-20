import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Scoreboard from '../components/Scoreboard';

it('renders the scoreboard component', () => {
  render(<Scoreboard />);
  const score = screen.getByText(/best score/i);
  expect(score).toBeInTheDocument();
});
