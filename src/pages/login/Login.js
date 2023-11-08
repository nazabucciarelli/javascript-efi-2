import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertDialog from '../../components/alert_dialog/AlertDialog';
import { LoginContext } from '../../contexts/LoginContext';
import { useContext } from 'react';
import DarkModeSwitch from '../../components/darkmode_switch/DarkModeSwitch';
import { DarkModeContext } from '../../contexts/DarkThemeContext';

const USER = "admin"
const PASSWORD = "admin"

function Copyright(props) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Typography variant="body2"  color={darkMode?"common.white":"text.secondary"} align="center" {...props}>
      {'Copyright © '}

      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const { logged, setLogged, currentUser, setCurrentUser } = useContext(LoginContext);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);


  useEffect(() => {
    (logged && navigate("/home"))
    console.log('useEffect Login. Estado actual del user:', logged)
  }, [navigate, logged])

  const handleSubmit = (event) => {
    event.preventDefault();
    validateUser();
  };

  const validateUser = () => {
    if (username === USER && password === PASSWORD) {
      setLogged(true);
      setCurrentUser(username);
      navigate("/home");
    } else {
      setOpenDialog(true)
    }
  }

  return (
    <div className={darkMode?"container darkBackground":"container"}>
      <Container maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5" color={darkMode?"common.white":"text.secondaryn"}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
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
              variant={darkMode?"contained":"outlined"}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Container>
              <DarkModeSwitch toggleDarkMode={toggleDarkMode}></DarkModeSwitch>
            </Container>
            <AlertDialog open={openDialog} setOpenDialog={setOpenDialog} msg="Incorrect username or password" title="Authentication failed"></AlertDialog>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </div>

  );
}

