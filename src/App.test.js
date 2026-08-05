import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';

describe('App stopwatch', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('starts, pauses and resets the timer', () => {
    render(<App />);

    expect(screen.getByText('00:00')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /iniciar/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /iniciar/i }));
    expect(screen.getByRole('button', { name: /pausar/i })).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.getByText('00:03')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /pausar/i }));
    expect(screen.getByRole('button', { name: /iniciar/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /zerar/i }));
    expect(screen.getByText('00:00')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /iniciar/i })).toBeInTheDocument();
  });
});
