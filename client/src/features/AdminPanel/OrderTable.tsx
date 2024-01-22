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
  getKeyValue,
} from '@nextui-org/react';
import EditIcon from './icons/EditIcon';
import DeleteIcon from './icons/DeleteIcon';
import EyeIcon from './icons/Eyelcon';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const statusColorMap = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning',
};

const columns = [
  { name: 'КЛИЕНТЫ', uid: 'name' },
  { name: 'СУММА', uid: 'total' },
  { name: 'STATUS', uid: 'status' },
  { name: 'ИЗМИНЕНИЯ', uid: 'actions' },
];

export default function OrderTable(): JSX.Element {
  const orders = useSelector((store: RootState) => store.orders.orders);
  console.log(orders);
  // const users=orders.map((order)=>order.User)
  // const totals=orders.map((order)=>order.total)

  const renderCell = React.useCallback((order, columnKey) => {
    const cellValue = order[columnKey];

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
            color={statusColorMap[order.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case 'actions':
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={orders}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
