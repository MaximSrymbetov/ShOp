/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

import ProductItemAdmin from './ProductItemAdmin';

function ProductsListAdmin(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);
  const [info, setInfo] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(info);
  }, [info, products]);

  const searchProducts = products.filter((product) => product.name.toLowerCase().includes(value));

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Поиск по товару"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <div>
        {searchProducts.map((product) => (
          <ProductItemAdmin product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsListAdmin;
