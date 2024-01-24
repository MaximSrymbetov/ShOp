import React from 'react';
import { NavLink } from 'react-router-dom';
import type  {Product}  from '../Products/types/type';
// import { image } from '@nextui-org/react';

type ProductItemProps = {
  // image: { src: string };
  product: Product;
};

function ProductItemAdmin({ product }: ProductItemProps): JSX.Element {
  // console.log(product);
  
  return (
    <div className="boxItem">
      <NavLink to={`/product/${product.id}`}>
        <div>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default ProductItemAdmin;
