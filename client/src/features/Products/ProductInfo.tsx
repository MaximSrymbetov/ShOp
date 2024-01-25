import React, { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, type RootState } from '../../redux/store';
import '../AdminPanel/Add.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles/styles.css';
import { addOrderItem, deleteOrderItem } from '../AdminPanel/orderSlice';

function ProductInfo(): JSX.Element {
  const { idProduct } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useSelector((store: RootState) => store.auth.user);
  const products = useSelector((store: RootState) => store.products.products);
  const product = products.find((produc) => produc.id === Number(idProduct));

  const order = useSelector((store: RootState) => store.orders.orders).find(
    (ord) => ord.user_id === user?.id && ord.status === 'created',
  );

  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (order?.Order_items.find((item) => item.product_id === +idProduct)) {
      setAddedToCart(true);
    } else {
      setAddedToCart(false);
    }
  }, [order, idProduct]);

  const handleAddItem = (): void => {
    if (user) {
      try {
        dispatch(addOrderItem(idProduct)).catch((err) => console.error(err));
        setAddedToCart(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      navigate('/login');
    }
  };

  const handleDeleteItem = (): void => {
    try {
      dispatch(deleteOrderItem(idProduct)).catch((err) => console.error(err));
      setAddedToCart(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="boxitem">
        <Swiper
          loop
          spaceBetween={10}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {product &&
            product.Images.map((image) => (
              <SwiperSlide className="swiperbox" key={image.id}>
                <img src={image.src} alt="img" />
              </SwiperSlide>
            ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop
          spaceBetween={10}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {product &&
            product.Images.map((image) => (
              <SwiperSlide key={image.id}>
                <img src={image.src} alt="img" />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div>
        <div>
          {addedToCart ? (
            <Button type="button" onClick={handleDeleteItem}>
              Убрать из корзины
            </Button>
          ) : (
            <Button type="button" onClick={handleAddItem}>
              Добавить в корзину
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
// {product &&
//   product.Images.map((image) => (
//     <SwiperSlide>
//       <img src={image.src} alt="img" />
//     </SwiperSlide>
//   ))}
