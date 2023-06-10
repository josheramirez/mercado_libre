import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

test('renders learn react link', () => {
  render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
  );
  const linkElement = screen.getByText(/ERROR PAGE/i);
  expect(linkElement).toBeInTheDocument();
});
