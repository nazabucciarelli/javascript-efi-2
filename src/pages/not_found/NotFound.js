import { Button } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../contexts/DarkThemeContext';
import './NotFound.css';
import notFound from './notfound.png';

export default function NotFound() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'container darkBackground' : 'container'}>
      <img alt="404 not found" src={notFound} />
      <Link to="/home">
        <Button variant={darkMode ? 'contained' : 'outlined'}>Return to home</Button>
      </Link>
    </div>
  );
}
