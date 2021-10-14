import React, {useRef, useState} from 'react';
import { Grid, Button , TextField} from '@mui/material';

const FileInput = () => {
    const inputRef = useRef();

    const [filename, setFilename] = useState('');
    
    const onFileChange = e => {
        if (e.target.files[0]) {
            setFilename(e.target.files[0].name);
        } else {
            setFilename('');
        }

        onChange(e);
    };

    const activateInput = () => {
        inputRef.current.click();
    };

    return (
        <>
            <input
                type="file"
                name={name}
                onChange={onFileChange}
                ref={inputRef}
                sx={{ display: 'none' }}
            />
            <Grid container direction="row" spacing={2} alignItems="center">
                <Grid item xs>
                    <TextField
                        disabled
                        label={label}
                        value={filename}
                        onClick={activateInput}
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={activateInput}>Browse</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default FileInput
