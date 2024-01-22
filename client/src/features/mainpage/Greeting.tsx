import React from 'react';
import './styles/video.css';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import comvideo from '../../public/videos/com_mainVideo.mp4';
import GoIcon from './icons/GoIcon';

export default function Greeting(): JSX.Element {
  return (
    <div className="container min-w-full">
      <video className="background-video" autoPlay loop muted>
        <source src={comvideo} type="video/mp4" />
      </video>

      <div className="container-text text-white backdrop-blur-3xl rounded-3xl p-3">
        <h2 className="text-6xl">меняй стиль.</h2>
        <h2 className="text-6xl text-left">сегодня</h2>
        <div className="container pt-3">
          <Link to="/products">
            <Button
              variant="bordered"
              endContent={<GoIcon />}
              radius="full"
              className="bg-white text-black shadow-lg"
            >
              начать
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
