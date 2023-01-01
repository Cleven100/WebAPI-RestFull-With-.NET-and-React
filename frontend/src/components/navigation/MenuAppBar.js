import { AppBar, Toolbar, Container, Icon, Typography, makeStyles, Button, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const  theme = createMuiTheme();


const useStyles = makeStyles ({
    container : { 
        color: "#DEDEDE",
        background: "#6a6a6a",
        borderRadius: 5,
        

    },
    toolbar : {
        justifyContent: "space-between"
    },
    logo : {
        display: "flex",
        textAlign: "center",
        
    } ,
    icons : {
        paddingRight:  5
    } ,
    button : {
        display: "flex",
        textAlign: "center",
        
    },
    link : {
        textDecoration: "none !important"
    },
    list: {
        width: 250
    },
    listItem: {
        padding: 0,

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
    },
    listIcon: {
        minWidth: 35
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up('md')] : {
           display: "flex"
        }
    },
    sectionMobile: {
        display: "flex",
        flexGrow: 1,
        [theme.breakpoints.up('md')] : {
            display: "none"
        }
    },
    logoName: {
        textDecoration: "none",
        color: "#dedede",
      
    }, 
    login: {
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        
       
        
    } ,
    alin: {
        paddingTop: "5px",
        justifyContent: "center",
        
    },
    logins: {

        width: "100%",
        display: "inherit",
        alignItems: "inherit",
        justifycontent: "inherit",
      color: "#dedede",
      padding: "6px 3px",
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
export default function MenuAppBar() {

const [open, setOpen] = useState(false);

const openToggle = () => {
    setOpen(true);
}

const closeToggle = () => {
    setOpen(false);
}
    
const classes = useStyles();

  return (
    
    <div>
        <AppBar position="static"  className={classes.container}>
           <Container  >
                  
              <Toolbar className={classes.toolbar}>
                  <div className={classes.sectionMobile}>
                     <IconButton color="inherit" onClick={openToggle}>
                        <Icon fontSize="large">menu</Icon>
                     </IconButton>
                  </div>
                  <Drawer
                  open={open}
                  onClose={closeToggle}
                  >
                     <div className={classes.list}>
                        <List>
                             <ListItem button onClick={closeToggle} className={classes.listItem}>
                                <Link  to="/login" className={classes.links}>
                                    <ListItemIcon className={classes.listIcon}>
                                        <Icon>person</Icon>
                                    </ListItemIcon>
                                    <ListItemText>
                                        Login
                                    </ListItemText>
                                </Link >
                             </ListItem>
                        </List>
                     </div>
                  </Drawer>
                  <div className={classes.logo}>
                    <Icon className={classes.icons} fontSize="large">store</Icon>
                     <Link to="/"  className={classes.logoName}>
                         <Typography variant="h5">Cleven Shop</Typography>
                    </Link>
                  </div>
                  <div className={classes.sectionDesktop}>
                    
                    <div className={classes.login}>
                        <Icon className={classes.alin}>person</Icon>
                         <Link to="/login" className={classes.logins}>
                            Login
                         </Link>
                         </div>
                    
                  </div>
              </Toolbar>
           </Container>
        </AppBar>
    </div>
  )
}
