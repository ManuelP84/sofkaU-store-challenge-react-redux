import * as React from 'react';
import { useState } from 'react'
import { productType } from '../state/productSlice';
import { dispatchWithType } from "../state/store"
import { useEffect } from "react"
import { getAllProducts } from "../actions/productsAction"
import ItemForm from './ItemForm';
import { useSelector } from "react-redux";
import { getItems, itemType } from "../state/itemSlice"
import { getProducts } from "../state/productSlice";

interface IBillFormProps {
}

const BillForm: React.FunctionComponent<IBillFormProps> = (props) => {
  
  const [customerName, setCustomerName] = useState('')
  const [sellerName, setSellerName] = useState('')
  const items = useSelector(getItems);
  const products = useSelector(getProducts);


   const onAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(items.length !== 0){
      
    }
    
   }  
  
  return (
    <div className="row">
      <div className="col-md">
        <div className="card card-body">
          <h5>Create a Bill</h5>
        </div>
        <div className="card card-body">
          <form onSubmit={(e) => onAdd(e)}>
            <div className="row">
              
            <div className="form-group col-md-6">
                <label></label>
                <input
                  type="text"
                  className="form-control"
                  name='customerName'
                  placeholder="Customer name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>

              <div className="form-group col-md-6">
                <label></label>
                <input
                  type="text"
                  className="form-control"
                  name='sellerName'
                  placeholder="Seller name"
                  value={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                />
              </div>

            </div>  
            <ItemForm />          
            <button type="submit" className="btn btn-primary col-md-3">Generate Bill</button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default BillForm;
