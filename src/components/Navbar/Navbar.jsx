import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'


import useStyles from "./styles"
const Navbar = ({totalItems}) => {
    const classes = useStyles();

    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={"https://storefront.files.wordpress.com/2017/02/storefront1.png"} 
                        alt="Commerce.js" height="25px" className={classes.image}/>
                        Commerce.js
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname === '/' && (
                        <div className={classes.button}>
                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart/>
                                </Badge>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
