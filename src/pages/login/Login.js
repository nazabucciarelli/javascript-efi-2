import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertDialog from '../../components/alert_dialog/AlertDialog';
import DarkModeSwitch from '../../components/darkmode_switch/DarkModeSwitch';
import { DarkModeContext } from '../../contexts/DarkThemeContext';
import { LoginContext } from '../../contexts/LoginContext';
import './Login.css';

const USER = 'usuario';
const PASSWORD = 'demo';

function Copyright(props) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Typography variant="body2" color={darkMode ? 'common.white' : 'text.secondary'}
     align="center" {...props}>
      {'Copyright © '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const { logged, setLogged, setCurrentUser } = useContext(LoginContext);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    logged && navigate('/home');
  }, [navigate, logged]);

  const validateUser = () => {
    if (username === USER && password === PASSWORD) {
      setLogged(true);
      setCurrentUser(username);
      navigate('/home');
    } else {
      setOpenDialog(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateUser();
  };

  return (
    <div className={darkMode ? 'container darkBackground' : 'container'}>
      <Container maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
          <Typography component="h1" variant="h5" color={darkMode ? 'common.white' : 
          'text.secondary'}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              className={darkMode ? 'darkModeInput' : ''}
              margin="normal"
              required
              fullWidth
              value={username}
              color={darkMode ? 'info' : 'primary'}
              variant={darkMode ? 'filled' : 'outlined'}
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              className={darkMode ? 'darkModeInput' : ''}
              margin="normal"
              required
              fullWidth
              value={password}
              color={darkMode ? 'info' : 'primary'}
              variant={darkMode ? 'filled' : 'outlined'}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant={darkMode ? 'contained' : 'outlined'}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Container>
              <DarkModeSwitch toggleDarkMode={toggleDarkMode} />
            </Container>
            <AlertDialog open={openDialog} setOpenDialog={setOpenDialog} 
            msg="Incorrect username or password" title="Authentication failed" />
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </div>

  );
}
