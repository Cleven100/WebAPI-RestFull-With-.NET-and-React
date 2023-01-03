import { Avatar, Collapse, Divider, Icon, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import useStyles from '../../theme/useStyles';
import { useStateValue } from '../../../context/store';

const MenuMobile = (props) => {
    const imagenDefault="";
    
    const classes = useStyles();
    const [openCliente, setOpenCliente] = useState(false);
    const [openAdmin, setOpenAdmin] = useState(false);

    const handleClickCliente = () => {
        setOpenCliente((prevOpen) => !prevOpen);
    };    

    const handleClickAdmin = () => {
        setOpenAdmin((prevOpen) => !prevOpen);
    };

  



    return (
        <>
            <ListItem button onClick={handleClickCliente} className={classes.listItem}>
                
            </ListItem>
            <Collapse component="li" in={openCliente} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItem button onClick={props.clickHandler} 
                    className={classes.listSubItem}>
                        <Link className={classes.linkAppBarMobile} to="/perfil">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>person</Icon>
                            </ListItemIcon>
                            <ListItemText>My profile</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button onClick={props.clickHandler} 
                    className={classes.listSubItem}>
                        <Link className={classes.linkAppBarMobile} to="/">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>exit_to_app</Icon>
                            </ListItemIcon>
                            <ListItem button onClick={handleClickAdmin}>
                                <ListItemText>Cerrar Sesion</ListItemText>
                            </ListItem>
                                
                            
                        </Link>
                    </ListItem>
                    <Divider />
                </List>
            </Collapse>
            {/* admin */}
            <ListItem button onClick={handleClickAdmin} className={classes.listItem}>
                <div className={classes.linkAppBarMobile}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <Icon>admin_panel_settings</Icon>
                    </ListItemIcon>
                    <ListItemText>Admin</ListItemText>
                    <Icon>keyboard_arrow_down</Icon>
                </div>
            </ListItem>
            <Collapse component="li" in={openAdmin} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItem button onClick={props.clickHandler} 
                    className={classes.listSubItem}>
                        <Link className={classes.linkAppBarMobile} to="/admin/users">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>group</Icon>
                            </ListItemIcon>
                            <ListItemText>Users</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button onClick={props.clickHandler} 
                    className={classes.listSubItem}>
                        <Link className={classes.linkAppBarMobile} to="/admin/listProducts">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>storefront</Icon>
                            </ListItemIcon>
                            <ListItemText>Products</ListItemText>
                        </Link>
                    </ListItem>
                    <ListItem button onClick={props.clickHandler} 
                    className={classes.listSubItem}>
                        <Link className={classes.linkAppBarMobile} to="/">
                            <ListItemIcon className={classes.listItemIcon}>
                                <Icon>shopping_cart</Icon>
                            </ListItemIcon>
                            <ListItemText>Orders</ListItemText>
                        </Link>
                    </ListItem>
                    <Divider />
                </List>
            </Collapse>
            {/* fin admin */}
            <ListItem button onClick={props.clickHandler} className={classes.listItem}>
                <Link className={classes.linkAppBarMobile} to="/admin/listOrders">
                    <ListItemIcon className={classes.listItemIcon}>
                        <Icon>shopping_cart</Icon>
                    </ListItemIcon>
                    <ListItemText>My Orders</ListItemText>
                </Link>
            </ListItem>
        </>
    );
};

export default withRouter(MenuMobile);