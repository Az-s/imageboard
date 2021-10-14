import React, { useState } from 'react';
import { Grid, Button , TextField} from '@mui/material';
import FileInput from '../FileInput/FileInput';

const MessageForm = () => {
    const [state, setState] = useState({
        author: "",
        message: "",
        image: null,
    });

    const submitFormHandler = e => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(state).forEach(key => {
            formData.append(key, state[key]);
        });

        onSubmit(formData);
    };

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => {
            return { ...prevState, [name]: value };
        });
    };

    const fileChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];
        setState(prevState => {
            return { ...prevState, [name]: file }
        });
    };

    return (
        <Grid
            container
            direction="column"
            spacing={2}
            component="form"
            autoComplete="off"
            onSubmit={submitFormHandler}
        >
            <Grid item xs>
                <TextField
                    label="Author"
                    name="author"
                    value={state.author ? state.author : 'Anonymous'}
                    onChange={inputChangeHandler}
                />
            </Grid>

            <Grid item xs>
                <TextField
                    required
                    multiline
                    rows={3}
                    label="Message"
                    name="message"
                    value={state.message}
                    onChange={inputChangeHandler}
                />
            </Grid>

            <Grid item xs>
                <FileInput
                    label="Image"
                    name="image"
                    onChange={fileChangeHandler}
                />
            </Grid>

            <Grid item xs>
                <Button type="submit" color="primary" variant="contained">Send</Button>
            </Grid>
        </Grid>
    )
}

export default MessageForm;
