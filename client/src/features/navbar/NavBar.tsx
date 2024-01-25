/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  // Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { NavLink, Outlet, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchIcon from './icons/SearchIcon';
import Logo from './icons/Logo';
import { useAppDispatch, type RootState } from '../../redux/store';
import { logout } from '../Auth/types/authSlice';

export default function NavBar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = (): void => {
    dispatch(logout()).catch((err) => console.error(err));
    navigate('/');
  };

  const [searchValue, setSearchValue] = useState('');

  const menuItems = ['Главная', 'Каталог', 'Корзина', 'It is for ADMIN :)'];

  return (
    <>
      <Navbar isBordered shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
          />

          <NavbarBrand className="mr-4 cursor-pointer" onClick={() => navigate('/')}>
            <Logo />
            <NavLink to="/">
              <p color="black" className="hidden sm:block font-bold text-inherit">
                ShOp
              </p>
            </NavLink>
          </NavbarBrand>

          <NavbarContent className="hidden sm:flex gap-3">
            <NavbarItem>
              <Link color="foreground" to="/">
                Главная
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" to="/products">
                Каталог
              </Link>
            </NavbarItem>
            {/* <NavbarItem>
              <Link color="foreground" to="/category">
                Категории
              </Link>
            </NavbarItem> */}
            <NavbarItem>
              <Link color="foreground" to="/cart">
                Корзина
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>
        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: 'max-w-full sm:max-w-[10rem] h-10',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper:
                'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
            }}
            placeholder="Введите для поиска..."
            size="sm"
            startContent={<SearchIcon size={18} strokeWidth={1.5} />}
            type="search"
            value={searchValue}
            onChange={(e)=> setSearchValue(e.target.value)}
          />
          {user ? (
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="bg-transparent transition-transform"
                  name="avatar"
                  size="sm"
                  src="https://img.icons8.com/material-outlined/100/user--v1.png"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Вошел как</p>
                  <p className="font-semibold">{user.email}</p>
                </DropdownItem>
                <DropdownItem key="settings" href="/user/profile">
                  Профиль
                </DropdownItem>
                <DropdownItem key="order" href="/user/orders">
                  Мои заказы
                </DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                  Выйти
                </DropdownItem>
                {user.isAdmin ? (
                  <DropdownItem key="ADMIN" href="/admin">
                    ADMIN
                  </DropdownItem>
                ) : (
                  <DropdownItem className="hidden" />
                )}
              </DropdownMenu>
            </Dropdown>
          ) : (
            <a href="/login">Войти</a>
          )}
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'
                }
                className="w-full"
                to="/"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <Outlet />
    </>
  );
}
