import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//imports ProductContext
import { ProductContext } from './contexts/ProductContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	// ^^^ keeps track of all available products.
	const [cart, setCart] = useState([]);
	// ^^^ will keep track of all the items in our cart.

	const addItem = item => {
		// add the given item to the cart
		setCart(cart += item);
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			{/* ^^^ need to wrap everything and pass what is to be used. Using double {} because one of the things being passed down is a function.*/}
			<div className="App">
				<Navigation cart={cart} />

				{/* Routes */}
				<Route exact path="/" component={Products} />

				<Route
					path="/cart"
					render={() => <ShoppingCart cart={cart} />}
				/>
			</div>
		</ProductContext.Provider>
		
	);
}

export default App;
