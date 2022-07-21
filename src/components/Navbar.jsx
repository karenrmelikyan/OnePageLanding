import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import {Badge} from "@mui/material";
import {Mail, Notifications} from "@mui/icons-material";

const inputStyle = {
    borderRadius: '5px',
    position: 'absolute',
    left: '45%',
    right: '45%',
    //justifyContent: 'center',
    height: '30px',
}

const buttonStyle = {
    position: 'absolute',
    left: '55%',
    height: '35px',
    background: 'skyblue',
}

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />

                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>

                    <input type={"text"} style={inputStyle} placeholder={'Search ...'}/>
                    <Button startIcon={<ZoomOutIcon />} style={buttonStyle} variant="text"/>

                    <Button color="inherit">Login</Button>

                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>

                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
