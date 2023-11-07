import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import './Task.css'
import { DarkModeContext } from '../../contexts/DarkThemeContext';

export default function BasicCard(props) {
    const { darkMode,  } = React.useContext(DarkModeContext)

    return (
        <Card className={darkMode?"card card-dark":"card"} sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ mb: 1.5 }} color={darkMode?"common.white":"text.secondary"}>
                    Task N° {props.task.id}
                </Typography>
                <Typography variant="h5" color={darkMode?"common.white":"text.primary"}>
                    {props.task.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography variant="h6" color={darkMode?"common.white":"text.secondary"}>
                    {props.task.completed ? 'Completed' : 'Uncompleted'}
                </Typography>
                {props.task.completed ? <CheckCircleIcon className='check'></CheckCircleIcon>: <CancelIcon className='cross'></CancelIcon>}
            </CardActions>
        </Card>
    );
}