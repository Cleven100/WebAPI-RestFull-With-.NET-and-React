import React from 'react'
import useStyles from '../../theme/useStyles'
import { Container, Grid, Typography } from '@material-ui/core'

function EditUser() {
    const classes = useStyles
  return (
    <Container className={classes.Containermt}>
        <Grid container justify="center">
             <Grid item lg={6} sm={12}>
                <Typography variant="h4" className={classes.text_title}>
                    Edit User
                </Typography>
             </Grid>
        </Grid>

    </Container>
  )
}

export default EditUser