import * as React from 'react';
import { productType } from "../state/productSlice"

interface IProductProps {
  product: productType

}

const Product: React.FunctionComponent<IProductProps> = ({product}) => {
  return (
    
    <tr>
      <td>{ product.name}</td>
      <td>{ product.description}</td>
      <td>{ product.quantity}</td>
      <td>{ product.price}</td>
      <td>{ product.provider.name}</td>
      <td>
        { product.quantity <= product.min && <>Quantity below the minimum allowed: {product.min}</> }
        { product.quantity >= product.max && <>Quantity under the maximum  allowed: {product.max}</> }
        {product.quantity > product.min && product.quantity < product.max && <>Quantity ok</>}
      </td>
      
      
    </tr>
  );
};

export default Product;
