import React from 'react'
import { Container, Grid, Card, Typography, Avatar, Icon, TextField, Button, Link, makeStyles} from '@material-ui/core';
import "./Login.css";

const useStyles = makeStyles({
    containermet: {
      marginTop: 70
     
    },
    card: {
     padding: 60,
    
    },
    avatar: {
     backgroundColor: '#d3d3d3',
     color: "#000",
      width: 80,
      height: 80
    },
    icon: {
     fontSize: 60
    },
    enter: {
     backgroundColor: '#94b447'
    },
    button: {
     background: '#d3d3d3'
    },
    input: {
     background: '#d3d3d3',
     borderRadius: 5,
      
    },
    link: {
      color: '#000',
      padding: 10
    },
    typography: {
     color: '#000',
     padding: 10
    },
    form : {
     marginTop: 40,
     marginBotoom: 10
    },
    gridmb: {
      marginBotoom: 20
    },
   
});

export default function Login() {
    const classes = useStyles();
  return (
    <div>
        <Container className={classes.containermet}>
           <Grid container justify="center">
             <Grid item lg={5} md={6}>
                <Card className={classes.card} align="center">
                    <Avatar className={classes.avatar}>
                        <Icon className={classes.icon}>person</Icon>
                    </Avatar>
                   <Typography className={classes.typography} variant="h5" color="">Enter username</Typography>
                   <form className={classes.form}>
                      <Grid container spacing={2}>
                      <Grid item xs={12} className={classes.gridmb}>
                            <TextField  
                            className={classes.input}
                              label="Email"
                              variant='outlined'
                              fullWidth
                              type="email"
                            />
                         </Grid>

                         <Grid item xs={12}>
                            <TextField  
                             className={classes.input}
                              label="Password"
                              variant='outlined'
                              fullWidth
                              type="password"
                            />
                         </Grid>


                         <Grid item xs={12} >
                            <Button 
                            variant="contained"
                            fullWidth
                           className={classes.button}
                            >
                                 Enter
                            </Button>
                         </Grid>
                      </Grid>
                      <br/>
                      <br/>
                     <Link
                     href="/"
                      variant="body1"
                      className={classes.link}
                      >  
                     Need an account? Sign up
                     </Link>
                   </form>
                </Card>
             </Grid>
           </Grid>
        </Container>
    </div>
  )
}
