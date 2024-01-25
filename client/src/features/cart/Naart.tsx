import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

export default function Cart(): JSX.Element {
  const products = useSelector((store: RootState) => store.products.products);

  return (
    <div className="container mx-auto flex justify-center flex-col gap-5 md:flex-row md:gap-12">
      <div className="bag flex flex-col">
        <p>Корзина</p>
        <div className="flex flex-col">
          {products.map((product) => (
            //   <li className="inline-flex items-center gap-x-2 py-3 pr-4 text-sm font-medium text-gray-800 dark:text-white">
            //     <div className="bg-white flex justify-between dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            //       <div className="flex flex-shrink-0 relative w-1/2  overflow-hidden pt-[40%] sm:max-w-[15rem] md:max-w-xs ">
            //         <img
            //           className="absolute top-0 start-0 object-cover h-[100px] w-[100px]"
            //           src={product.Images[0].src}
            //           alt="Description"
            //         />
            //       </div>
            //       <div className="flex flex-wrap">
            //         <div className="p-4 flex flex-col h-full sm:p-7">
            //           <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            //             {product.name}
            //           </h3>
            //           <p className="mt-1 text-gray-500 dark:text-gray-400">{product.description}</p>
            //           <div className="mt-5 sm:mt-auto">
            //             <p className="text-xs text-gray-500 dark:text-gray-500">{product.price}</p>
            //           </div>
            //         </div>
            //       </div>
            //     </div>
            //   </li>
            <>
              <Divider />
              <Card className="flex-row rounded-none p-3">
                <div className="flex">
                  <Image
                    src={product.Images[0].src}
                    height="100%"
                    width="100%"
                    className="max-w-60 rounded"
                  />
                </div>
                <div className="flex-col h-full w-full">
                  <CardHeader>{product.name}</CardHeader>
                  <CardBody>
                    <p className="text-xs">{product.description}</p>
                  </CardBody>
                  <CardFooter className="pb-0">
                    <button type="button">
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/material-outlined/24/like--v1.png"
                        alt="like--v1"
                      />
                    </button>
                    <button type="button">
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/external-tal-revivo-light-tal-revivo/24/external-trash-can-layout-for-a-indication-to-throw-trash-mall-light-tal-revivo.png"
                        alt="external-trash-can-layout-for-a-indication-to-throw-trash-mall-light-tal-revivo"
                      />
                    </button>
                  </CardFooter>
                </div>
                <div className="flex-col">
                  <p>{product.price}</p>
                </div>
              </Card>
              <Divider />
            </>
          ))}
        </div>
        <p>Избранное</p>
        <div className="favs"> item 1</div>
      </div>
      <div className="summary flex flex-col">
        <p>Чек</p>
        <ul className="mt-3 flex flex-col">
          <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
            <div className="flex items-center justify-between w-full">
              <span>Payment</span>
              <span>$264.00</span>
            </div>
          </li>
          <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
            <div className="flex items-center justify-between w-full">
              <span>Tax fee</span>
              <span>$52.8</span>
            </div>
          </li>
          <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-800 dark:border-gray-700 dark:text-gray-200">
            <div className="flex items-center justify-between w-full">
              <span>Amount</span>
              <span>$316.8</span>
            </div>
          </li>
        </ul>
        <Button color="default">Оплатить</Button>
      </div>
    </div>
  );
}
