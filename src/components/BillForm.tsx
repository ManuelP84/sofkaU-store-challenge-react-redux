import * as React from "react";
import { useState } from "react";
import { dispatchWithType } from "../state/store";
import ItemForm from "./ItemForm";
import { useSelector } from "react-redux";
import { getItems, itemType } from "../state/itemSlice";
import { billType } from "../state/billSlice";
import { nanoid } from "@reduxjs/toolkit";
import { postBill } from "../actions/billsAction";
import { clearItemsReducer } from "../state/itemSlice";
import { putProduct } from "../actions/productsAction";

interface IBillFormProps {}

const BillForm: React.FunctionComponent<IBillFormProps> = (props) => {
  const [customerName, setCustomerName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const items = useSelector(getItems);

  const dispatch = dispatchWithType();

  const onAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (items.length !== 0) {
      const paid = items.reduce(
        (subTotal, nextSubTotal) => subTotal + nextSubTotal.subTotal,
        0
      );
      const newBill: billType = {
        id: nanoid(),
        customerName: customerName,
        sellerName: sellerName,
        paid: paid,
        items: items,
      };

      items.map(async (item: itemType) => {
        return dispatch(
          putProduct({
            id: item.id,
            name: item.name,
            description: item.description,
            min: item.min,
            max: item.max,
            quantity: item.balance,
            price: item.price,
            provider: item.provider,
          })
        );
      });

      dispatch(postBill(newBill));
      setCustomerName("");
      setSellerName("");
      dispatch(clearItemsReducer());
    }
  };

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
                  name="customerName"
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
                  name="sellerName"
                  placeholder="Seller name"
                  value={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                />
              </div>
            </div>
            <ItemForm />
            <button type="submit" className="btn btn-primary col-md-3">
              Generate Bill
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BillForm;
