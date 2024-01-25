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
  }, [info,products]);
console.log(products,'++++++++++++++++++++++++++++++++');

  const searchProducts = products.filter((product) => product.name.toLowerCase().includes(value));

  return (
    <div>
      <select value={info} onChange={(e) => setInfo(e.target.value)}>
        <option className="checkbox"  value="t-shirt">
          Футболки
        </option>
        <option className="checkbox" value="air">
          Кроссовки
        </option>
        <option className="checkbox" value="Jacket">
          Куртки
        </option>
      </select>
      <form>
        <input type="text" placeholder="Вводи" onChange={(e) => setValue(e.target.value)} />
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
