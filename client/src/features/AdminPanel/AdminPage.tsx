import React from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';
import AddProduct from './AddProduct';
import AllOrders from './AllOrders';

function AdminPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div>
      <h2>ПРИВЕТИК АДМИН</h2>
      <AddProduct />
      <AllOrders />
      <div>
        <a href="/OrderTable">ЗАКАЗЫ</a>
      </div>
      <button className="text-box" type="button" onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
}

export default AdminPage;
