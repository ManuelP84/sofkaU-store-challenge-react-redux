import * as React from 'react';
import { itemType } from "../state/itemSlice"

interface IItemListProps {
    items: itemType[]
}

const ItemList: React.FunctionComponent<IItemListProps> = ({items}) => {
  return (
    <>
    <div className="card card-body">
                <table className="justTable">
                  <tbody>
                      <tr>
                          <th>Product name:</th>
                          <th>Quantity</th>                
                          <th>Price</th>
                          <th>Subtotal</th>
                      </tr>
                    </tbody>  
                    <tbody>
                        {items.map((item)=>(
                        item !== null && 
                        <tr key={item.id}>
                            <td>{ item.name}</td>
                            <td>{ item.quantity}</td>
                            <td>{ item.price}</td>
                            <td>{ item.subTotal}</td>                           
                        </tr>          
                        ))}
                    </tbody>
                </table>
            </div>
    </>
  );
};

export default ItemList;
