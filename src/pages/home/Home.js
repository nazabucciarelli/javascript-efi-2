import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Grid, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Select from '../../components/select/Select';
import Task from '../../components/task/Task';
import { DarkModeContext } from '../../contexts/DarkThemeContext';
import { LoginContext } from '../../contexts/LoginContext';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [numPage, setNumPage] = useState(1);
  const [sizePage, setSizePage] = useState(10);
  const { logged } = useContext(LoginContext);
  const { darkMode } = useContext(DarkModeContext);

  const from = (numPage - 1) * sizePage;
  const to = numPage * sizePage;

  const slicedTasks = tasks.slice(from, to);
  const lastPage = Math.ceil(tasks.length / sizePage);

  useEffect(() => {
    !logged && navigate('/');
  }, [logged, navigate]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((doc) => doc.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div className={darkMode ? 'main darkBackground' : 'main'}>
      <Navbar />
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="end"
        sx={{ mt: '20px', paddingRight: '6em' }}
      >
        <Select darkMode={darkMode} sizePage={sizePage} setSizePage={setSizePage} 
        setNumPage={setNumPage} />
      </Grid>
      <Grid sx={{ mt: 1.0 }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
        >
          {slicedTasks.map((task) => <Task key={task.id} task={task} />)}
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: '35px', paddingBottom: '2em' }}
      >
        <ChevronLeftIcon
          className={numPage !== 1 ? 'chevron' : 'chevron disabled'}
          onClick={() => (numPage !== 1 ? setNumPage(numPage - 1) : '')}
        />
        <Typography color={darkMode ? 'common.white' : ''}>
          Page N°
          {' '}
          {numPage}
          {' '}
          of 
          {' '}
          {lastPage}
        </Typography>
        <ChevronRightIcon
          className={numPage !== lastPage ? 'chevron' : 'chevron disabled'}
          onClick={() => (numPage !== lastPage ? setNumPage(numPage + 1) : '')}
        />
      </Grid>

    </div>
  );
}
