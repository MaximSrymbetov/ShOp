/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useState } from 'react';

import { Button, Input, Textarea } from '@nextui-org/react';
import type { Focused } from './src';
import ReactCreditCards from './src';
import './App.css';
import './src/styles.scss';

function OrderPayment(): JSX.Element {
  const [number, setNumber] = useState<string | number>('');
  const [name, setName] = useState<string>('');
  const [focused, setFocused] = useState<Focused>('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const handleNumberChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(evt.target.value);
  };
  const handleNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };
  const handleCVCChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(evt.target.value);
  };
  const handleExpiryChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setExpiry(evt.target.value);
  };

  // const handleSubmit = () => {};

  return (
    <div className="credit container flex flex-row justify-around">
      <ReactCreditCards cvc={cvc} name={name} number={number} expiry={expiry} focused={focused} />
      <div style={{ display: 'flex', width: '100%', gap: '1rem' }} className="flex-1">
        <div className="conatiner mx-auto flex justify-center min-w-full">
          <div style={{ display: 'flex', flexDirection: 'column' }} className="min-w-full">
            <form className="min-w-full">
              <input
                type="text"
                value={number}
                placeholder="Номер карты"
                onFocus={() => setFocused('number')}
                onChange={handleNumberChange}
              />
              <input
                type="text"
                value={expiry}
                placeholder="Годен до"
                onFocus={() => setFocused('expiry')}
                onChange={handleExpiryChange}
              />
              <input
                type="text"
                value={cvc}
                placeholder="CVC код"
                onFocus={() => setFocused('cvc')}
                onChange={handleCVCChange}
              />
              <input
                type="text"
                value={name}
                placeholder="Имя владельца"
                onFocus={() => setFocused('name')}
                onChange={handleNameChange}
              />
            </form>
          </div>
        </div>
      </div>
      <form className="flex-1">
        <p className="py-3">Информация о получателе</p>
        <Textarea name="address" rows={10} placeholder="Адрес получателя" className="w-1/2 py-1" />
        <Input type="name" name="name" placeholder="Имя получателя" className="w-1/2 py-1" />
        <Input type="name" name="phone" placeholder="Номер телефона" className="w-1/2 py-1" />
        <Button
          type="submit"
          // onSubmit={handleSubmit}
        >
          Дальше
        </Button>
      </form>
    </div>
  );
}

export default OrderPayment;
