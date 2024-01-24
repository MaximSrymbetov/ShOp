import React from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';
import { useSelector } from 'react-redux';
import AddProduct from './AddProduct';
import type { RootState } from '../../redux/store';
// import { useSelector } from 'react-redux';
// import { store, type RootState } from '../../redux/store';
// import ProductItemAdmin from './ProductItemAdmin';
// import Allroducts from '../Products/ProductsList';
import ProductsListAdmin from './ProductsListAdmin';

// const user = useSelector((store: RootState) => store.auth.user);

function AdminPage(): JSX.Element {
  const navigate = useNavigate();
  //   const products = useSelector((store: RootState) => store.products.products);
  // const newP=products.map((el)=>el.name)
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div>
      {user ? (
        <div>
          <h2>АДМИН</h2>
          <AddProduct />

          <div>
            <a href="/OrderTable">ЗАКАЗЫ</a>
          </div>
          <button className="text-box" type="button" onClick={() => navigate(-1)}>
            Назад
          </button>
          {/* {newP.name} */}
          <ProductsListAdmin />
        </div>
      ) : (
        <>{navigate('/404')}</>
      )}
    </div>
  );
}
export default AdminPage;
