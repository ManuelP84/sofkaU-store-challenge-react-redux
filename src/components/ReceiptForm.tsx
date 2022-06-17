import * as React from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../state/productSlice";
import { productType } from "../state/productSlice";
import { dispatchWithType } from "../state/store";
import { receiptType } from "../state/receiptSlice";
import { postReceipt } from "../actions/receiptsAction";
import { useEffect } from "react";
import { useState } from "react";
import { putProduct } from "../actions/productsAction";
import { getAllProducts } from "../actions/productsAction";

interface IReceiptFormProps {}

const ReceiptForm: React.FunctionComponent<IReceiptFormProps> = (props) => {
  const [quantity, setQuantity] = useState<number>(0);
  const products = useSelector(getProducts);
  const [product, setProduct] = useState({} as productType);

  const dispatch = dispatchWithType();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const addProduct = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProduct = products.find(
      (product) => product.id === e.target.value
    );
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  };

  const onAdd = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (product && quantity > 0) {
      const newReceipt: receiptType = {
        product: product,
        quantityAdded: quantity,
      };

      const newProduct = {
        id: product.id,
        name: product.name,
        description: product.description,
        min: product.min,
        max: product.max,
        quantity: product.quantity + quantity,
        price: product.price,
        provider: product.provider,
      };

      dispatch(putProduct(newProduct));
      dispatch(postReceipt(newReceipt));
      setQuantity(0);
      setProduct({} as productType);
    } else {
      setQuantity(0);
      setProduct({} as productType);
    }
  };

  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="card card-body">
            <h5>Create a Receipt</h5>
          </div>
          <div className="form-group col-md-4">
            <label>
              <i>Select product</i>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => addProduct(e)}
            >
              <option>---------</option>
              {products.map((productOption) => (
                <option key={productOption.id} value={productOption.id}>
                  {productOption.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group col-md-4">
            <label>
              <i>Quantity</i>
            </label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.valueAsNumber)}
            />
            {quantity <= 0 && <i>Quantity must be greater than cero</i>}
          </div>
          <div className="col-md-4">
            <button
              onClick={(e) => onAdd(e)}
              type="submit"
              className="btn btn-primary col-md-10"
            >
              Add product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptForm;
