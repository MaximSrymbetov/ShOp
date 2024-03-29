import React, { useEffect } from 'react';
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
import { allorders } from '../features/AdminPanel/orderSlice';
import Cart from '../features/cart/Cart';
import ProductInfo from '../features/Products/ProductInfo';
import OneOrderInfo from '../features/AdminPanel/OneOrderInfo';
import FormUpdateOrder from '../features/AdminPanel/FormUpdateOrder';
import ProductsMan from '../features/Products/ProductsMen';
import ProductsWoman from '../features/Products/ProductsWomen';
import ProductsShoes from '../features/Products/ProductsShoes';
import ProductsClothes from '../features/Products/ProductsClothes';
import ProductsAccessories from '../features/Products/ProductsAccessories';
import OrderTable from '../features/AdminPanel/OrderTable';
import { checkUser } from '../features/Auth/types/authSlice';
import Footer from '../features/footer/Footer';
import SizeЕable from '../features/Size/SizeЕable';
import OrderPayment from '../features/payment/OrderPayment';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(allproducts());
    void dispatch(allorders());
    dispatch(checkUser()).catch((err) => console.error(err));
    return () => {};
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<AuthorizationPage />} />
          <Route path="/signin" element={<RegistrationPage />} />
          <Route path="/OneOrderInfo/:idOrder" element={<OneOrderInfo />} />
          <Route path="/order/:id/update" element={<FormUpdateOrder />} />
          <Route path="/products" element={<Allroducts />} />
          <Route path="/product/:idProduct" element={<ProductInfo />} />
          <Route path="/orderTable" element={<OrderTable />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/men" element={<ProductsMan />} />
          <Route path="/women" element={<ProductsWoman />} />
          <Route path="/category/accessories" element={<ProductsAccessories />} />
          <Route path="/category/clothes" element={<ProductsClothes />} />
          <Route path="/category/shoes" element={<ProductsShoes />} />
          <Route path="/size/nike" element={<SizeЕable />} />
          <Route path="/order" element={<OrderPayment />} />
          {/* <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/orders" element={<Orders />} /> */}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
