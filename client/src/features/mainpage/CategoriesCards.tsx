import React from 'react';
import { Card, CardHeader, Image } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import menImg from '../../public/images/men.webp';
import womenImg from '../../public/images/women.webp';
import shoes from '../../public/images/shoe_5.jpg';
import clothes from '../../public/images/clothes.jpg';
import accessories from '../../public/images/accessories.gif';

export default function CategoriesCards(): JSX.Element {
  return (
    <div className="container mx-auto py-5">
      <div className="mx-auto max-w-[985px] gap-2 grid grid-cols-12 px-8">
        {/* MEN */}
        <Link to="/men" className="w-full h-[500px] col-span-12 sm:col-span-6">
          <Card className="w-full h-[500px] col-span-12 sm:col-span-6">
            <CardHeader className="absolute z-10 bottom-20 flex-col items-start">
              <h4 className="text-white font-medium text-7xl">для него</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Men background"
              className="z-0 w-full h-full   object-cover"
              src={menImg}
            />
          </Card>
        </Link>

        {/* WOMEN */}
        <Link to="/women" className="w-full h-[500px] col-span-12 sm:col-span-6">
          <Card className="w-full h-[500px] col-span-12 sm:col-span-6">
            <CardHeader className="absolute z-10 bottom-20 flex-col items-start">
              <h4 className="text-white font-medium text-7xl">для нее</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Men background"
              className="z-0 w-full h-full   object-cover"
              src={womenImg}
            />
          </Card>
        </Link>

        <Link to="/category/shoes" className="col-span-12 sm:col-span-4 h-[300px]">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Что надеть</p>
              <h4 className="text-white font-medium text-large">Для комфорта твоих ног</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={shoes}
            />
          </Card>
        </Link>
        <Link to="/category/clothes" className="col-span-12 sm:col-span-4 h-[300px]">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Измени себя</p>
              <h4 className="text-white font-medium text-large">С ног до головы</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover scale-120"
              src={clothes}
            />
          </Card>
        </Link>
        <Link to="/category/accessories" className="col-span-12 sm:col-span-4 h-[300px]">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Дополни образ</p>
              <h4 className="text-white font-medium text-large">Мелкими деталями</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={accessories}
            />
          </Card>
        </Link>

        {/* <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-2xl">Acme camera</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://www.reebok.eu/BWStaticContent/153000/eed04b13-d3a0-49e5-9375-94376cb937a7_club-c-85-focus.jpg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available soon.</p>
              <p className="text-black text-tiny">Get notified.</p>
            </div>
            <Button className="text-tiny" color="primary" radius="full" size="sm">
              Notify Me
            </Button>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
            <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://www.reebok.eu/BWStaticContent/153000/e6de86b5-ef77-4209-b532-996329e3588a_desk-sale.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="/images/breathing-app-icon.jpeg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">Get a good nights sleep.</p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Get App
            </Button>
          </CardFooter>
        </Card> */}
      </div>
    </div>
  );
}
