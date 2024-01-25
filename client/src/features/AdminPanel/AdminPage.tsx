import React from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';
import { useSelector } from 'react-redux';
import { Button, Spinner } from '@nextui-org/react';
import AddProduct from './AddProduct';
import type { RootState } from '../../redux/store';
import ProductsListAdmin from './ProductsListAdmin';

function AdminPage(): JSX.Element {
  const navigate = useNavigate();
  const loading = useSelector((state: RootState) => state.auth.loading);
  const user = useSelector((state: RootState) => state.auth.user);

  const content = (
    <div >
      {user && user.isAdmin ? (
        <div className='container flex flex-col mx-auto '>     
          <h2 className='mx-auto flex justify-center py-8' style={{ fontSize: '200%', fontWeight: 'bold'}}>панель администрирования:</h2>
          <AddProduct />
          <div className=" mx-auto flex justify-center py-8">
          <Button onClick={()=>navigate('/OrderTable')}> ЗАКАЗЫ</Button>
          </div>
          {/* {newP.name} */}
          <ProductsListAdmin />
        </div>
      ) : (
        <div className="container mx-auto flex flex-col gap-5 mt-20 justify-center w-1/3">
          <p className="self-center">У вас нет доступа к этой странице</p>
          <Button
            className="className='c-button' w-1/2 self-center mb-72"
            onClick={() => navigate('/')}
          >
            Вернуться
          </Button>
        </div>
      )}
    </div>
  );
  return (
    <div>{loading ? <Spinner className="container mx-auto my-10" /> : <div>{content}</div>}</div>
  );
}
export default AdminPage;
