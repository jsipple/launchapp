import React from 'react';
import Grid from '@material-ui/core/Grid';

const Wrapper = (props) => {
    return (
        <Grid container justify="center">
                {props.children}
    
        </Grid>
    );
}


export default Wrapper;