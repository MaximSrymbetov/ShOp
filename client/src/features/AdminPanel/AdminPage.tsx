/* eslint-disable react/self-closing-comp */
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
        <div className="container flex flex-col mx-auto ">
          <h2
            className="mx-auto flex justify-center py-8"
            style={{ fontSize: '200%', fontWeight: 'bold' }}
          >
            панель администрирования:
          </h2>
          <AddProduct />

          <div className=" mx-auto flex justify-center py-8">
            <Button onClick={() => navigate('/OrderTable')}> ЗАКАЗЫ</Button>
          </div>
          <div className="container mx-auto flex justify-center">
            <div className="mx-auto flex justify-center "></div>
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
