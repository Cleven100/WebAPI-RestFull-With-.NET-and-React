import React, { useState } from 'react'
import { Container, Grid, Card, Typography, Avatar, Icon, TextField, Button, makeStyles} from '@material-ui/core';
import "./Login.css";
import { Link } from 'react-router-dom'
import { loginUser } from '../../actions/UserAction';

const useStyles = makeStyles({
    containermet: {
      marginTop: 70
     
    },
    card: {
     padding: 60,
    
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
      width: "100%",
      display: "inherit",
      alignItems: "inherit",
      justifycontent: "inherit",
    color: "rgba(0, 0, 0, 0.87)",
    padding: "6px 16px",
    fontSize: "0.875rem",
    minWidth: "64px",
    boxSizing: "border-box",
    transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    fontFamily: "Roboto",
    fontWeight: 500,
    lineHeight: 1.75,
    borderRadius: "4px",
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
    textDecoration: "none",
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

  const [user, setUser] = useState({
    email: '',
    password: ''
  })


  const handleChange = (e) => {
    const {name, value} = e.target;
     setUser(prev => ({
      ...prev,
       [name]: value
     }))
  }



  const loginEventUser = () => {
      loginUser(user)
       .then(response => {
         if(response.status === 200) {
                 window.localStorage.setItem('token', response.data.token);
                 console.log('Login start', response.data);
         } else {
           console.log("Login false ruim", response.data)
         }
       })
  }



  const classes = useStyles();
  return (
    <div>
        <Container className={classes.containermet}>
           <Grid container justify="center" >
             <Grid item lg={5} md={6}>
               
                <Card className={classes.card} align="center">
                  
                    <Avatar className="avatar">
                        <Icon className="icon">person</Icon>
                    </Avatar>
                   <Typography className={classes.typography} variant="h5" color="">Enter username</Typography>
                   <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                      <Grid container spacing={2}>
                      <Grid item xs={12} className={classes.gridmb}>
                            <TextField  
                            className={classes.input}
                              label="Email"
                              variant='outlined'
                              fullWidth
                              type="email"
                              name="email"
                              value={user.email}
                              onChange={handleChange}

                            />
                         </Grid>

                         <Grid item xs={12}>
                            <TextField  
                             className={classes.input}
                              label="Password"
                              variant='outlined'
                              fullWidth
                              type="password"
                              name="password"
                              value={user.password}
                              onChange={handleChange}
                            />
                         </Grid>


                         <Grid item xs={12} >
                            <Button 
                            variant="contained"
                            fullWidth
                           className={classes.button}
                           type="submit"
                           onClick={loginEventUser}
                            >
                                 Enter
                            </Button>
                         </Grid>
                      </Grid>
                      <br/>
                      <br/>
                     <Link to="/register"
                      className={classes.link}
                      >  
                     Need an account? Sign up
                     </Link >
                   </form>
                </Card>
               
                
             </Grid>
           </Grid>
        </Container>
    </div>
  )
}
