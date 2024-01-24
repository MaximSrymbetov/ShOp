import React from 'react';
import { NavLink } from 'react-router-dom';
import type { Product } from './types/type';
// import { image } from '@nextui-org/react';

type ProductItemProps = {
  // image: { src: string };
  product: Product;
};

function ProductItem({ product }: ProductItemProps): JSX.Element {
  // console.log(product);
  
  return (
    <div className="boxItem">
      <NavLink to={`/product/${product.id}`}>
        <div>
          <img src={product.Images[0].src} alt="img" />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default ProductItem;
