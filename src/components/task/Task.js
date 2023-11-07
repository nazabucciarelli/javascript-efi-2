import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import './Task.css'

export default function BasicCard(props) {
    return (
        <Card className='card' sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Task N° {props.task.id}
                </Typography>
                <Typography variant="h6">
                    {props.task.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography variant="h6" color="text.secondary">
                    {props.task.completed ? 'Completed' : 'Uncompleted'}
                </Typography>
                {props.task.completed ? <CheckCircleIcon className='check'></CheckCircleIcon>: <CancelIcon className='cross'></CancelIcon>}
            </CardActions>
        </Card>
    );
}