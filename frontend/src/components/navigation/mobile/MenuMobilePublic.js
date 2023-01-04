import { Icon, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../../theme/useStyles';

const MenuMobilePublic = (props) => {
    
    const classes = useStyles();
    return (
        <>  
            <ListItem button onClick={props.clickHandler} className={classes.listItem}>
                <Link className={classes.linkAppBarMobile} to="/login">
                    <ListItemIcon className={classes.listItemIcon}>
                        <Icon>person</Icon>
                    </ListItemIcon>
                    <ListItemText>Login</ListItemText>
                </Link>
            </ListItem>
            <ListItem button onClick={props.clickHandler} className={classes.listItem}>
                <Link className={classes.linkAppBarMobile} to="/cart">
                    <ListItemIcon className={classes.listItemIcon}>
                        <Icon>shopping_cart</Icon>
                    </ListItemIcon>
                    <ListItemText>My Orders</ListItemText>
                </Link>
            </ListItem>
        </>
    );
};

export default MenuMobilePublic;