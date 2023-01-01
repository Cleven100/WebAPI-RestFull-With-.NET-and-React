import React, { useState } from 'react'
import { Avatar, Container, Grid, Icon, Card, makeStyles, Typography, TextField, Button} from '@material-ui/core';
import "./Login.css"
import { Link } from 'react-router-dom';


const clearUser = {
 
  name: '',
  nickName: '',
  email: '',
  password: ''

}

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
   background: '#d3d3d3',
   
   
  },
  input: {
   background: '#d3d3d3',
   borderRadius: 5,
    
  },
  link: {
    color: '#000',
    padding: 20
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
  links: {
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
  }
       
 })
export default function RegisterUser() {

  const [user, setUser] = useState({
    name: '',
    nickName: '',
    email: '',
    password: ''
  });


  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const saveUser = () => {
    console.log("My user is", user);
    setUser(clearUser);
  }


    const classes = useStyles();
  return (
    <div>
        <Container className={classes.containermet}>
            <Grid container justify="center">
                <Grid item lg={6} md={8}>
                    <Card className={classes.card} align="center">
                        <Avatar className={classes.avatar}>
                        <Icon className={classes.Icon}>person_add</Icon>
                    </Avatar>
                    <Typography variant="h5" className={classes.typography}>Sign up</Typography>
                    
                        <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                        <Grid container spacing={2}>
                        <Grid item md={6} xs={12} className={classes.gridmb}>
                                <TextField 
                                 label="name"
                                 variant="outlined"
                                 fullWidth
                                 name="name"
                                 value={user.name}
                                 onChange={handleChange}
                                
                                />
                           </Grid>
                           <Grid item md={6} xs={12} className={classes.gridmb}>
                                <TextField 
                                 label="nickname"
                                 variant="outlined"
                                 fullWidth
                                 name="nickName"
                                 value={user.nickName}
                                 onChange={handleChange}
                                
                                />
                           </Grid>
                           <Grid item md={12} xs={12} className={classes.gridmb}>
                                <TextField 
                                 label="Email"
                                 variant="outlined"
                                 fullWidth
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                />
                           </Grid>

                           <Grid item md={12} xs={12} className={classes.gridmb}>
                                <TextField 
                                 label="Password"
                                 variant="outlined"
                                 fullWidth
                                type="password"

                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                />
                           </Grid>
                           
                           <hr style={{visibility: "hidden"}}/>
                           
                           
                           <Button 
                            variant="contained"
                            fullWidth
                            color="Secundary"
                            className='button'
                            onClick={saveUser}
                            type="submit"
                           >

                              Register
                           </Button>
                           
                           <p style={{visibility: "hidden"}}> L </p>
                           <p style={{visibility: "hidden"}}> K </p>
                           <p style={{visibility: "hidden"}}> P </p>
                           
                        </Grid>

                        <Link 
                            to="/login"
                            className={classes.links}>
                            Forgot Password?
                            </Link>
                      
                    </form>
                    
                    
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}
