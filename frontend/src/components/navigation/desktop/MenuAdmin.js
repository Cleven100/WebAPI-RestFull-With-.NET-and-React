import { Button, Icon, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../../theme/useStyles';

const MenuAdmin = () => {

    const classes = useStyles();
    
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button color="inherit" className={classes.buttonIcon}
            onClick={handleClick}>
                <div className={classes.linkAppBarDesktop}>
                    <Icon className={classes.mr}>admin_panel_settings</Icon>
                    ADMIN
                    <Icon>keyboard_arrow_down</Icon>
                </div>
            </Button>
            <Menu
            elevation={3}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "center"
            }}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem className={classes.listItem} onClick={handleClose}>
                    <Link className={classes.linkAppBarMobile} to="/admin/users">
                        <ListItemIcon className={classes.listItemIcon}>
                            <Icon>group</Icon>
                        </ListItemIcon>
                        <ListItemText>Users</ListItemText>
                    </Link>
                </MenuItem>
                <MenuItem className={classes.listItem} onClick={handleClose}>
                    <Link className={classes.linkAppBarMobile} to="/admin/listProducts">
                        <ListItemIcon className={classes.listItemIcon}>
                            <Icon>storefront</Icon>
                        </ListItemIcon>
                        <ListItemText>Products</ListItemText>
                    </Link>
                </MenuItem>
                <MenuItem className={classes.listItem} onClick={handleClose}>
                    <Link className={classes.linkAppBarMobile} to="/admin/listOrders">
                        <ListItemIcon className={classes.listItemIcon}>
                            <Icon>shopping_cart</Icon>
                        </ListItemIcon>
                        <ListItemText>Orders</ListItemText>
                    </Link>
                </MenuItem>
              
               
            </Menu>
        </>
    );
};

export default MenuAdmin;