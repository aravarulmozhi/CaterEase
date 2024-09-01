import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BiTrash } from "react-icons/bi";
import EditableField from './EditableField';
import { menuList } from '../assets/ItemList';

const QuotationItem = ({ onItemizedItemEdit, currency, onRowDel, items, onRowAdd }) => {
  const itemTable = items.map((item) => (
    <ItemRow
      onItemizedItemEdit={onItemizedItemEdit}
      item={item}
      onDelEvent={onRowDel}
      key={item.id}
      currency={currency}
    />
  ));

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>QTY</th>
            <th>PRICE/RATE</th>
            <th className="text-center">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {itemTable}
        </tbody>
      </Table>
      <Button className="fw-bold" onClick={onRowAdd}>
        Add Item
      </Button>
    </div>
  );
};

const ItemRow = ({ onItemizedItemEdit, item, onDelEvent, currency }) => {
  const handleDelete = () => {
    onDelEvent(item);
  };
  return (
    <tr>
      <td style={{ width: '100%' }}>
<EditableField
      onItemizedItemEdit={onItemizedItemEdit}
      cellData={{
        type: "search-select",
        name: "name",
        placeholder: "Search and select item",
        value: item.name,
        id: item.id,
      }}
      options={menuList}
    />
      </td>
      <td style={{ minWidth: '150px' }}>
        <EditableField
          onItemizedItemEdit={onItemizedItemEdit}
          cellData={{
            type: "number",
            name: "quantity",
            min: 1,
            step: "1",
            value: item.quantity,
            id: item.id,
          }}
        />
      </td>
      <td style={{ minWidth: '130px' }}>
        <EditableField
          onItemizedItemEdit={onItemizedItemEdit}
          cellData={{
            leading: currency,
            type: "number",
            name: "price",
            min: 1,
            step: "0.01",
            precision: 2,
            textAlign: "text-end",
            value: item.price,
            id: item.id,
          }}
        />
      </td>
      <td className="text-center" style={{ minWidth: '50px' }}>
        <BiTrash
          onClick={handleDelete}
          style={{ height: '33px', width: '33px', padding: '7.5px' }}
          className="text-white mt-1 btn btn-danger"
        />
      </td>
    </tr>
  );
};

export default QuotationItem;
