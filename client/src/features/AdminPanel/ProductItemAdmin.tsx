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
    <div className="list">
      <NavLink to={`/product/${product.id}`}>
        <div>
          <h3 className='listitemone'>{product.name}</h3>
        </div>
      </NavLink>
    </div>
  );
}

export default ProductItemAdmin;
