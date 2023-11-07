import Switch from '@mui/joy/Switch';
import DarkMode from '@mui/icons-material/DarkMode';
import { Grid } from '@mui/material';

export default function DarkModeSwitch(props) {

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Switch
            size="lg"
            onClick={props.toggleDarkMode}
            slotProps={{
                input: { 'aria-label': 'Dark mode' },
                thumb: {
                    children: <DarkMode />,
                },
            }}
            sx={{
                '--Switch-thumbSize': '24px',
            }}
        />
        </Grid>

    )
}