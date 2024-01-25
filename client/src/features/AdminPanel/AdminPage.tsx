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
    <div className="container mx-auto flex justify-center min-w 1/3">
      {user && user.isAdmin ? (
        <div>
          <h2 style={{ fontSize: '500%', fontWeight: 'bold'}}>АДМИН</h2>
          <AddProduct />
          

          <div className="container mx-auto flex justify-center min-w 1/3">
            <a style={{fontSize: '200%',color: 'green', fontWeight: ' Bold '}} href="/OrderTable">ЗАКАЗЫ</a>
          </div>
          <div className="container mx-auto flex justify-center min-w 1/3">
            {' '}
            <div className="buttons-container">
            <button className="button-arounder" type="button" onClick={() => navigate(-1)}>
              Назад
            </button>
            </div>
          </div>

          {/* {newP.name} */}
          <ProductsListAdmin />
        </div>
      ) : (
        <Button className="className='c-button'" onClick={() => navigate('/')}>
          Вернуться
        </Button>
      )}
    </div>
  );
}
export default AdminPage;
