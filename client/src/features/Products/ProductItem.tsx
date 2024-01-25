/* eslint-disable prefer-template */
import React from 'react';
import { NavLink } from 'react-router-dom';
import type { Product } from './types/type';
// import { image } from '@nextui-org/react';

type ProductItemProps = {
  product: Product;
};

function ProductItem({ product }: ProductItemProps): JSX.Element {
  const nameProduct = product.name;
  return (
    <div className="product-card product-grid__card  css-1t0asop">
      <NavLink to={`/product/${product.id}`}>
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <img className="w-full h-auto rounded-t-xl" src={product.Images[0].src} alt="img" />
          <div className="lineSt p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {nameProduct.length > 20 ? (nameProduct.substring(0, 20) + '...' ): nameProduct}
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">{`${product.price} ₽`}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default ProductItem;



