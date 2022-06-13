import * as React from 'react';
import { receiptType } from '../state/receiptSlice';

interface IReceiptProps {
  receipt: receiptType
}

const Receipt: React.FunctionComponent<IReceiptProps> = ({receipt}) => {
  return(
    <tr>
      <td>{ receipt.id}</td>
      <td>{ receipt.product.provider.id}</td>
      <td>{ receipt.product.provider.name}</td>
      <td>{ receipt.product.name}</td>
      <td>{ receipt.quantityAdded}</td>
      <td>{ receipt.date}</td>
    </tr>
  ) ;
};

export default Receipt;
