import React from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';
import AddProduct from './AddProduct';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';


function AdminPage(): JSX.Element {
  const navigate = useNavigate();
//   const products = useSelector((store: RootState) => store.products.products);
// const newP=products.map((el)=>el.name)



  return (
    <div>
      <h2>ПРИВЕТИК АДМИН</h2>
      <AddProduct />
   
      <div>
        <a href="/OrderTable">ЗАКАЗЫ</a>
      </div>
      <button className="text-box" type="button" onClick={() => navigate(-1)}>
        Назад
      </button>
      {/* {newP.name} */}
    </div>
  );
}


export default AdminPage;
