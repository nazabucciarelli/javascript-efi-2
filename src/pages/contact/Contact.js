import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../../components/contact_form/ContactForm';
import Navbar from '../../components/navbar/Navbar';
import { DarkModeContext } from '../../contexts/DarkThemeContext';
import { LoginContext } from '../../contexts/LoginContext';

export default function Contact() {
  const navigate = useNavigate();
  const { logged } = useContext(LoginContext);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    (!logged && navigate('/'));
  }, [logged, navigate]);

  return (
    <div className={darkMode ? 'main darkBackground' : 'main'}>
      <Navbar />
      <ContactForm />
    </div>
  );
}
