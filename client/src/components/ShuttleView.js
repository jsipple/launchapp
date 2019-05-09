import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from './Button';
import Typography from '@material-ui/core/Typography'


const ShuttleView = (props) => {

    return (
            <Grid item xs={12}> 
                <Grid container >
                    <Grid item xs={6}>
                        <Grid container alignItems="space-around">
                            <Grid item xs={6}>
                                <Typography>
                                         Date More Info does it cahnge
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                Info Stuff
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <img src='./images/ea4078548b2778ad6487e1dfd3d4978fb67cdb2c.png' alt="Shuttle"/>
                    </Grid> 
            </Grid> 
            <Grid item xs={12}>
                <Grid container justify="flex-end">
                    <Grid item xs={6}>
                        <Button name={"Details"} />
                    </Grid>
                    <Grid item xs={6}>
                        <Button name={"Follow"}/>
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
    );
}

export default ShuttleView;