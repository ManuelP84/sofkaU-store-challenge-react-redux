import * as React from "react";
import { useState } from "react";
import { productType } from "../state/productSlice";
import { dispatchWithType } from "../state/store";
import { getAllProducts, postProduct } from "../actions/productsAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../state/productSlice";
import { getItems, itemType } from "../state/itemSlice"
import { addItemReducer } from "../state/itemSlice" 
import ItemList  from "../components/ItemList"

interface IItemFormProps {}

const ItemForm: React.FunctionComponent<IItemFormProps> = (props) => {
  const [product, setProduct] = useState({} as productType);
  const [quantity, setQuantity] = useState<any>(0);
  const products = useSelector(getProducts);
  const items = useSelector(getItems);

  const dispatch = dispatchWithType();
  

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const addProduct = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProduct = products.find((product) => product.id === e.target.value)
    if(selectedProduct){
        setProduct(selectedProduct)
    }
  };

  const onAdd = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if(quantity && product && product.quantity >= quantity){
       const newItem: itemType = 
       {
        id: product.id,
        name: product.name,
        description: product.description,
        min: product.min,
        max: product.max,
        quantity: quantity,
        price: product.price,
        subTotal: quantity*product.price,
        balance: product.quantity - quantity,
        provider: product.provider
       }
       
       dispatch(addItemReducer(newItem))
       setQuantity(0)
       setProduct({} as productType)
    }else{
        setQuantity(0)
        setProduct({} as productType)
    }
  };

  return (
    <>
      <div className="row">
        <div>
          <div className="row">
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
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <button onClick={(e) => onAdd(e)} type="submit" className="btn btn-primary col-md-10">
                Add product
              </button>
            </div>
          </div>
        </div>
        <ItemList items={items}/>
      </div>
    </>
  );
};

export default ItemForm;
