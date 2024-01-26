/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
} from '@nextui-org/react';
import type { Key } from 'react';
import { useSelector } from 'react-redux';
// import EditIcon from './icons/EditIcon';
// import DeleteIcon from './icons/DeleteIcon';
import { Link } from 'react-router-dom';
import EyeIcon from './icons/Eyelcon';
import type { RootState } from '../../redux/store';
import type { Order } from './types/type';

// const statusColorMap = {
//   created: 'warning',
//   confirmed: 'warning',
//   closed: 'danger',
//   payed: 'warning',
//   delivery: 'success',
// };

const columns = [
  { name: 'КЛИЕНТЫ', uid: 'name' },
  { name: 'СУММА', uid: 'total' },
  { name: 'СТАТУС', uid: 'status' },
  { name: 'ИЗМEНЕНИЯ', uid: 'actions' },
];

const statuses = {
  confirmed: 'Ожидает оплаты',
  payed: 'Оплачен',
  delivery: 'На доставке',
  closed: 'Закрыт',
};

export default function OrderTable(): JSX.Element {
  const orders = useSelector((store: RootState) => store.orders.orders).filter(
    (ord) => ord.status !== 'created',
  );
  const arr1 = [...orders];
  const sortOrders = arr1.sort((a, b) => b.id - a.id);

  // const sortOrders=orders.map((el)=>el)
  // const users=orders.map((order)=>order.User)
  // const totals=orders.map((order)=>order.total)

  const renderCell = React.useCallback((order: Order, columnKey: Key) => {
    switch (columnKey) {
      case 'name':
        return (
          <User description={order.User.email} name={order.User.name}>
            {order.User.email}
          </User>
        );
      case 'total':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize text-default-400">{order.total}</p>
          </div>
        );
      case 'status':
        return (
          <Chip
            className="capitalize"
            // color={statusColorMap[order.status]}
            size="sm"
            variant="flat"
          >
            {order && statuses[order.status]}
          </Chip>
        );
      case 'actions':
        return (
          <div className="relative flex items-center gap-2">
            <Link to={`/order/${order.id}/update`}>
              <Tooltip content="Details">
                <span className="text-lg text-default-300 cursor-pointer active:opacity-50">
                  {/* <a href="/OrderTable">👁</a> */}

                  <EyeIcon />
                </span>
              </Tooltip>
            </Link>
            {/* <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip> */}
            {/* <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <DeleteIcon />
              </span>
            </Tooltip> */}
          </div>
        );
      default:
        return order.status;
    }
  }, []);

  return (
    //  const sortOrders=orders.sort((a,b)=>b.id-a.id)
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={sortOrders}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
