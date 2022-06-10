import * as React from 'react';
import { productType } from "../state/productSlice"

interface IProductProps {
  product: productType

}

const Product: React.FunctionComponent<IProductProps> = ({product}) => {
  return (
    
    <tr>
      <td >{ product.id}</td>
      <td>{ product.name}</td>
      <td>{ product.description}</td>
      <td>{ product.quantity}</td>
      <td>{ product.providerNit}</td>
    </tr>
  );
};

export default Product;
