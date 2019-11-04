import React, { useContext } from 'react';

// Components
import Product from './Product';
// Context API
import { ProductContext } from '../contexts/ProductContext';

const Products = () => {
	const { products, addItem } = useContext(ProductContext);
	// destructored this will return value passed by ProductContext Provider as props.
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
