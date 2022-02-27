
import React, { useState } from 'react';
//MUI components.
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './MarkerBoard.css';

const buttonStyle = {
    marginTop: '15px',
    marginBottom: '15px',
    textAlign: 'left'
};
const textFieldStyle = {
    marginTop: '15px',
    marginBottom: '15px',
    textAlign: 'right'
};

const MarkerBoard = props => {
    const [textFieldValue, setTextFieldValue] = useState('');

    const { title, value, buttonClickCallback } = props;

    const handleTextFieldChange = (event) => {
        setTextFieldValue(event.target.value);
    };

    return <React.Fragment >
        <Grid item xs={12}>
            <div />
            <Typography component="h1" variant="h5">{`${title} Value: ${value}`}</Typography>
        </Grid>
        <Grid item xs={12}>
            <Grid container spacing={3}>
                <Grid item xs={3} />
                <Grid item xs={3}>
                    <div style={textFieldStyle}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={textFieldValue} onChange={handleTextFieldChange} />
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div style={buttonStyle}>
                        <Button variant="contained" color="primary" onClick={
                            () => buttonClickCallback(textFieldValue)}>
                            Primary
                            </Button>
                    </div>
                </Grid>
                <Grid item xs={3} />
            </Grid>
        </Grid>
    </React.Fragment>
}

export default MarkerBoard;
