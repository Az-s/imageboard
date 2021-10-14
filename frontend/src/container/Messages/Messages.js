import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper, CardMedia , Button } from '@mui/material';
import {Link} from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { fetchMessages } from '../../store/actions/actions';
import {apiURL} from "../../config";

const Messages = () => {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.messages.messages);

    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]); 

    return (
        <Grid container justifyContent='center' mt={3}>
            <Grid item container justifyContent="space-around" alignItems="center" mb={4}>
                <Grid item>
                    <Typography variant="h4">Messages</Typography>
                </Grid>
                <Grid item>
                    <Button color="primary" component={Link} to="/messages/new">Add</Button>
                </Grid>
            </Grid>
            <Grid item>
                <Paper>
                    <List sx={{ width: '100%', minWidth: 500, bgcolor: 'background.paper' }}>
                        {messages.map(msg => (
                            <>
                                <ListItem alignItems="flex-start" key={msg.id}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 150, height: '100%' , marginRight: '2rem'}} 
                                        image={apiURL + '/uploads/' + msg.image}
                                        alt=""
                                    />
                                    <ListItemText
                                        primary={msg.datetime}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {msg.author}
                                                </Typography>
                                                {` — ${msg.message}`}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </>
                        ))}
                    </List>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Messages;
