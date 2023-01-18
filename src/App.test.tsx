import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders the app page', () => {
  render(<App />);
  // const calendarTitle = screen.getByText(/Birthday Calendar/i)
  // const calendarInstruction = screen.getByText(/Select a date to view birthdays/i)
  
  // expect(calendarTitle).toBeInTheDocument();
  // expect(calendarInstruction).toBeInTheDocument();
});