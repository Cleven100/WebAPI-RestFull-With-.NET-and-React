import { Button, Icon, Typography, createMuiTheme, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import "../MenuAppBar.css"
import useStyles from '../../theme/useStyles';

const  theme = createMuiTheme();

const useStyle = makeStyles ({
   
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

const MenuPublic = () => {
    const classes = useStyle();
    const classe = useStyles();
    return (
        <>
          
                       
          <Button color="inherit" className={classe.Button}>
            <Link className={classe.linkAppBarDesktop} to="/cart">
                <Icon className={classe.mr}>shopping_cart</Icon>
                <div className={classe.mrs}>
                     My orders 
                </div>
              
            </Link>
        </Button>


                         <div className={classes.login}>
                    <div className='background-two link-container'>
                        <div className='link-two'>
                           <div className={classes.login}>
                        <Icon className={classes.alin}>person</Icon>
                         <Link to="/login" className={classes.logins}>
                            Login
                         </Link>
                         </div>
                        </div>
                    </div>


               
                        
         </div>
        </>
    );
};

export default MenuPublic;