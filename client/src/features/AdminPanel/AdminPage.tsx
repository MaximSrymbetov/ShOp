import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './admin.css';
import AddProduct from './AddProduct';
import AllOrders from './AllOrders';
// import OrderTable from './OrderTable';
// import AddProduct from './AddProduct';

// import { useSelector } from 'react-redux';
// import ProductItem from './ProductItem';
// import AddProduct from './AddProduct';
// import type { RootState } from '../../../redux/store';

function AdminPage(): JSX.Element {
  // const products = useSelector((store: RootState) => store.products.products);
  // const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      {/* <AddProduct />
      {id
        ? products
            .filter((product) => product.category_id === +id)
            .map((product) => <ProductItem product={product} key={product.id} />)
        : products.map((product) => <ProductItem product={product} key={product.id} />)} */}

      <h2>ПРИВЕТИК АДМИН</h2>
      <AddProduct />
      <AllOrders />
      {/* <OrderTable /> */}
      
      <div><a href="/OrderTable">ЗАКАЗЫ</a></div>
      <button className="text-box" type="button" onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
}

export default AdminPage;
