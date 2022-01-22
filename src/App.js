import React, {useState, useEffect} from 'react'
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components'
import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom';



const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({})
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    useEffect(() => {
        fetchProducts()
        fetchCart()
    }, [])

    const handleAddToCart = async (productID, quantity) => {
        const {cart} = await commerce.cart.add(productID, quantity);

        setCart(cart);
    }

    const handleUpdateCartQty = async (productID, quantity) => {
        const {cart} = await commerce.cart.update(productID, {quantity});

        setCart(cart);
    };

    const handleRemoveFromCart = async (productID) => {
        const {cart} = await commerce.cart.remove(productID);

        setCart(cart);
    };

    const handleEmptyCart = async() => {
        const {cart} = await commerce.cart.empty();

        setCart(cart)
    }
    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items}/>
                <Switch>
                    <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart}/>} />
                    <Route path="/cart" element={<Cart cart={cart}
                           handleUpdateCartQty={handleUpdateCartQty}
                           handleRemoveFromCart={handleRemoveFromCart}
                           handleEmptyCart={handleEmptyCart}/>}/>
                </Switch>
            </div>
        </Router>
        )

    }
export default App