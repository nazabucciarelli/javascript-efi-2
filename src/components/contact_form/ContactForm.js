import {
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { useContext, useState } from 'react';
import { DarkModeContext } from '../../contexts/DarkThemeContext';
import './ContactForm.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { darkMode } = useContext(DarkModeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
        <Typography color={darkMode ? 'common.white' : 'text.primary'} variant="h3" align="center"
         mb={2} mt={7}>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            className={darkMode ? 'darkModeInput' : ''}
            fullWidth
            label="Name"
            value={name}
            color={darkMode ? 'info' : 'primary'}
            variant={darkMode ? 'filled' : 'outlined'}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            className={darkMode ? 'darkModeInput' : ''}
            fullWidth
            label="Email"
            value={email}
            color={darkMode ? 'info' : 'primary'}
            variant={darkMode ? 'filled' : 'outlined'}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            className={darkMode ? 'darkModeInput' : ''}
            fullWidth
            label="Subject"
            value={subject}
            color={darkMode ? 'info' : 'primary'}
            variant={darkMode ? 'filled' : 'outlined'}
            onChange={(e) => setSubject(e.target.value)}
            margin="normal"
            required
            type="subject"
          />
          <TextField
            className={darkMode ? 'darkModeInput' : ''}
            fullWidth
            label="Message"
            value={message}
            color={darkMode ? 'info' : 'primary'}
            variant={darkMode ? 'filled' : 'outlined'}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button variant={darkMode ? 'contained' : 'outlined'} type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}
