import React from 'react';
import { NavLink } from 'react-router-dom';
import type { Product } from './types/type';
// import { image } from '@nextui-org/react';

type ProductItemProps = {
  product: Product;
};

function ProductItem({ product }: ProductItemProps): JSX.Element {
  return (
    <div className="product-card product-grid__card  css-1t0asop">
      <NavLink to={`/product/${product.id}`}>
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <img
            className="w-full h-auto rounded-t-xl"
            src={product.Images[0].src}
            alt="img"
          />
          <div className="lineSt p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">{product.name}</h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">{`${product.price}₽`}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default ProductItem;

{
  /* <NavLink to={`/product/${product.id}`}>
<div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
  <img className="w-full h-auto rounded-t-xl" src={product.Images[0].src} alt="Image Description">
  <div className="p-4 md:p-5">
    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
      {product.name}
    </h3>
    <p className="mt-1 text-gray-500 dark:text-gray-400">
      {product.price}
    </p>
    <a className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      Go somewhere
    </a>
  </div>
</div>
</NavLink> */
}
