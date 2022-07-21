import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Rightbar from "./Rightbar";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Content = () => {
    return (
        <Box>
            <Grid container >
                <Grid item xs={3}>
                    <Item>
                        <Sidebar />
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Feed />
                    </Item>
                </Grid>

                <Grid item xs={3}>
                    <Item>
                        <Rightbar />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Content;