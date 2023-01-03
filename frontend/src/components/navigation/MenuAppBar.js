import { AppBar, Toolbar, Container, Icon, Typography, makeStyles, Button, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./MenuAppBar.css"
import MenuAdmin from './desktop/MenuAdmin';
import MenuClient from './desktop/MenuClient';
import MenuMobile from './mobile/MenuMobile';
import MenuMobilePublic from './mobile/MenuMobilePublic';


const  theme = createMuiTheme();


const useStyles = makeStyles ({
   
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
padding: "16px 32px",
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

    },
    loginss: {
       height: 100,
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
        <AppBar position="static"  className="appbar">



           <Container  className="containerrr">
           
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
                            
                          <MenuMobile />
                        </List>
                     </div>
                  </Drawer>
                  <div className={classes.logo}>
                    
                    <div className='background-one'>
                        <div className='link-container'>

                            <Link to="/"  className="link-one">
                           <Typography variant="h5">CNShop</Typography>
                       </Link>
                        </div>
                        
                    </div>
                     
                  </div>
                  <div className={classes.sectionDesktop}>
                {/*  <div className='background-two link-container'>
                        <div className='link-two'>
                           <div className={classes.login}>
                        <Icon className={classes.alin}>person</Icon>
                         <Link to="/login" className={classes.logins}>
                            Login
                         </Link> 
                      </div> 
                       
                      </div> 
                     
                     
                   </div> */ }
                    <MenuClient />
                    <MenuAdmin />
                    
                  </div>
              </Toolbar>
              
           </Container>
        </AppBar>
    </div>
  )
}
