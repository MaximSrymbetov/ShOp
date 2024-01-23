import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../features/ErrorPage/ErrorPage';
import NavBar from '../features/navbar/NavBar';
import MainPage from '../features/mainpage/MainPage';
import AuthorizationPage from '../features/Auth/AuthorizationPage';
import RegistrationPage from '../features/Auth/RegistrationPage';
import Allroducts from '../features/Products/ProductsList';
import { useAppDispatch } from '../redux/store';
import { allproducts } from '../features/Products/productSlice';
import AdminPage from '../features/AdminPanel/AdminPage';
import { allorders, updateOrder } from '../features/AdminPanel/orderSlice';
import OrderTable from '../features/AdminPanel/OrderTable';
import ProductInfo from '../features/Products/ProductInfo';
import OneOrderInfo from '../features/AdminPanel/OneOrderInfo'
import FormUpdateOrder from '../features/AdminPanel/FormUpdateOrder';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(allproducts());
    void dispatch(allorders());
    void dispatch(updateOrder());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/authorization" element={<AuthorizationPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/OneOrderInfo/:idOrder" element={<OneOrderInfo />} />
          <Route path="/order/:id/update" element={<FormUpdateOrder />} />
          <Route path="/products" element={<Allroducts />} />
          <Route path="/product/:idProduct" element={<ProductInfo />} />
          <Route path="/orderTable" element={<OrderTable />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
