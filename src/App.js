import { useEffect, useRef, useState } from 'react';
import './style.css';

const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

function App() {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return undefined;
    }

    intervalRef.current = window.setInterval(() => {
      setSecondsElapsed((previousValue) => previousValue + 1);
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleStartStop = () => {
    setIsRunning((previousValue) => !previousValue);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSecondsElapsed(0);
  };

  return (
    <div className="container">
      <img src={require('./assets/cronometro.png')} className="img" alt="Cronômetro" />
      <span className="timer" aria-live="polite">{formatTime(secondsElapsed)}</span>
      <div className="areaBtn">
        <button type="button" className="botao" onClick={handleStartStop}>
          {isRunning ? 'PAUSAR' : 'INICIAR'}
        </button>
        <button type="button" className="botao" onClick={handleReset}>
          ZERAR
        </button>
      </div>
    </div>
  );
}

export default App;
