import React from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';
import { useSelector } from 'react-redux';
import { Button } from '@nextui-org/react';
import AddProduct from './AddProduct';
import type { RootState } from '../../redux/store';
import ProductsListAdmin from './ProductsListAdmin';

function AdminPage(): JSX.Element {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div>
      {user && user.isAdmin ? (
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
        <Button className="container mx-auto my-5" onClick={() => navigate('/')}>
          Вернуться
        </Button>
      )}
    </div>
  );
}
export default AdminPage;
