/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
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
import { Outlet } from 'react-router-dom';
import AcmeLogo from './icons/AcmeLogo';
import SearchIcon from './icons/SearchIcon';

export default function NavBar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
    'It is for ADMIN :)'
  ];
  return (
    <>
      <Navbar isBordered shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden"
          />
          <NavbarBrand className="mr-4">
            <AcmeLogo />
            <p className="hidden sm:block font-bold text-inherit">ACME</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3">
            <NavbarItem>
              <Link color="foreground" href="/">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="/" aria-current="page" color="secondary">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/">
                Integrations
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
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} strokeWidth={1.5} />}
            type="search"
          />
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
              <DropdownItem key="ADMIN" href='/admin'>ADMIN </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'
                }
                className="w-full"
                href="/"
                size="lg"
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
