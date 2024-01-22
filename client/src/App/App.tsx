import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../features/ErrorPage/ErrorPage';
import NavBar from '../features/navbar/NavBar';
import MainPage from '../features/mainpage/MainPage';
import AuthorizationPage from '../features/Auth/AuthorizationPage';
import RegistrationPage from '../features/Auth/RegistrationPage';
import Allroducts from '../features/allproducts/Allroducts';
import { useAppDispatch } from '../redux/store';
import { allproducts } from '../features/allproducts/productSlice';
import AdminPage from '../features/AdminPanel/AdminPage';
import { allorders } from '../features/AdminPanel/orderSlice';
import OrderTable  from '../features/AdminPanel/OrderTable';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(allproducts());
    void dispatch(allorders());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/authorization" element={<AuthorizationPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/allproducts" element={<Allroducts />} />
          <Route path="/orderTable" element={<OrderTable />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
