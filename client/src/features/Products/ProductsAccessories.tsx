import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import ProductItem from './ProductItem';

function ProductsAccessories(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  const AccessoriesProducts = products.filter((product) => product.category_id === 3);
  return (
    <div>
      {AccessoriesProducts &&
        AccessoriesProducts.map((product) => <ProductItem product={product} />)}
    </div>
  );
}

export default ProductsAccessories;
