import React from 'react'
import useStyles from '../../theme/useStyles'
import { Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography } from '@material-ui/core'

function EditUser() {
    const classes = useStyles




  return (
    <Container className={classes.Containermt}>
        <p style={{visibility: "hidden"}}> L </p>
        <p style={{visibility: "hidden"}}> L </p>
        <p style={{visibility: "hidden"}}> L </p>
        <Grid container justify="center">
             <Grid item lg={6} sm={12}>
                <Typography variant="h4" className={classes.text_title}>
                    Edit User
                </Typography>
                <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
                <TextField 
                    label="name"
                    variant="filled"
                    value="FILL"
                    fullWidth
                    disabled
                    className={classes.gridmb}
                    />
                    <p style={{visibility: "hidden"}}> L </p>
                     <TextField 
                    label="email"
                    variant="filled"
                    value="FILL@554.com"
                    fullWidth
                    disabled
                  
                    />
                    <p style={{visibility: "hidden"}}> L </p>
                    <FormControl className={classes.checkbox}>
                        <FormControlLabel 
                         control={<Checkbox color="primary" />}
                         label="This Administrador"
                       />
                       <Button
                        variant="contained"
                        color="primary"
                       >
                         Update
                       </Button>

                       

                    </FormControl>
                </form>
             </Grid>
        </Grid>

    </Container>
  )
}

export default EditUser