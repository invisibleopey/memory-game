import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

it('renders header component', () => {
  render(<App />);
  const headerComponent = screen.getByTestId('header');
  expect(headerComponent).toBeInTheDocument();
});

it('renders card component', () => {
  render(<App />);
  const cardsComponent = screen.getByTestId('cards');
  expect(cardsComponent).toBeInTheDocument();
});
