import { Avatar, Button, Icon, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import React, { useState } from 'react'
import useStyles from '../../theme/useStyles';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../context/store';

function MenuClient() {

    const [{sessionUser}, dispatch] = useStateValue();

    const classes = useStyles();

     const [anchorEl, setAnchorEl] = useState(null);

     const handlerClick = (e) => {
        setAnchorEl(e.currentTarget);
     }

     const handlerClose = () =>{
        setAnchorEl(null);
     }




  return (
    <div className={classes.perfilAjus}>
        <Button color="inherit" className={classes.Button}>
            <Link className={classes.linkAppBarDesktop} to="/cart">
                <Icon className={classes.mr}>shopping_card</Icon>
                <div className={classes.mrs}>
                     My orders 
                </div>
              
            </Link>
        </Button>
        <div>
        <Button color="inherit" className={classes.Button}
        onClick={handlerClick}
        >
            <div className={classes.linkAppBarDesktop}>
                <Avatar 
                alt="my image"
                className={classes.avatarPerfilAppBar}
                src=""
                
                />
                {sessionUser 
                ? (sessionUser.authentication ?  sessionUser.user.name  : "undefined1" )
                : "undefined2"}
                <Icon>keyboard_arrow_down</Icon>
            </div>
        </Button>
        <Menu
        elevation={2}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center"
        }}
        keepMounted
        open={Boolean(anchorEl)}
        
        >
            <MenuItem className={classes.listItem} onClick={handlerClose}>
                <Link className={classes.linkAppBarMobile} to="/perfil">
                       <ListItemIcon className={classes.ListItemIcon}>
                        <Icon>person</Icon>
                        
                       </ListItemIcon>
                       <ListItemText >My perfil</ListItemText>
                </Link>
            </MenuItem>
           
            <MenuItem className={classes.listItem} onClick={handlerClose}>
                <Link className={classes.linkAppBarMobile} to="/">
                       <ListItemIcon className={classes.ListItemIcon}>
                        <Icon>exit_to_app</Icon>
                       </ListItemIcon>
                       <ListItemText >Close</ListItemText>
                </Link>
            </MenuItem>
           
        </Menu>
        </div>
    </div>
  )
}

export default MenuClient