import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

// This is a products component.
const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();
    return (
        // Just like a div, but has some "meaning to it" (?)
        <main className={classes.content}>
            <div className ={classes.toolbar}/>
            {/*
                Grid allows us to put the items into a... well, a grid.
                This grid is of the type Container
            */}
            <Grid container justify="center" spacing={4}>
                {/*

                */}
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
    </main>
    )
    
}

// Export the component.
export default Products;