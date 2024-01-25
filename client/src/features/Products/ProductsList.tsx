/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from '@nextui-org/react';
import type { RootState } from '../../redux/store';

import ProductItem from './ProductItem';

import './styles/ProductsList.css';

function Allroducts(): JSX.Element {
  const loading = useSelector((store: RootState) => store.products.loading);
  const products = useSelector((store: RootState) => store.products.products);
  // const [info, setInfo] = useState('');
  // const [value, setValue] = useState('');

  // const [info, setInfo] = useState('');
  // useEffect(() => {
  //   setValue(info);
  // }, [info]);

  // const searchProducts = products.filter((product) => product.name.toLowerCase().includes(value));

  const content = (
    <div className="py-16 px-10" style={{ backgroundColor: '#eee' }}>
      {/* <CheckboxGroup label="Filter" value={info} onValueChange={setInfo}>
        <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
        <Checkbox value="sydney">Sydney</Checkbox>
        <Checkbox value="san-francisco">San Francisco</Checkbox>
        <Checkbox value="london">London</Checkbox>
        <Checkbox value="tokyo">Tokyo</Checkbox>
      </CheckboxGroup>
      {/* <select value={info} onChange={(e) => setInfo(e.target.value)}>
      
        <option className="checkbox" value="air">
          Кроссовки
        </option>
        <option className="checkbox" value="Jacket">
          Куртки
        </option>
   </select> */}
      {/* <form>
          <input type="text" placeholder="ывводи" onChange={(e) => setValue(e.target.value)} />
        </form> */}

      <div className="container mx-auto gap-4 grid grid-cols-1 sm:grid-cols-3 flex justify-center p-0 m-0">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
  return (
    <div>{loading ? <Spinner className="container mx-auto my-10" /> : <div>{content}</div>}</div>
  );
}

export default Allroducts;
