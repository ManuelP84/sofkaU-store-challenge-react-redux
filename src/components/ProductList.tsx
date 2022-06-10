import * as React from 'react';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../actions/productsAction';
import { getProductsError, getProductsStatus, getProducts } from '../state/productSlice';
import { dispatchWithType } from '../state/store';
import { useEffect } from "react"
import { statusOption } from '../actions/statusOption';

interface IProductListProps {
}

const ProductList: React.FunctionComponent<IProductListProps> = (props) => {

  const dispatch = dispatchWithType();
  const products = useSelector(getProducts)
  const productsStatus = useSelector(getProductsStatus)
  const productsError = useSelector(getProductsError)

  useEffect(() => {
    if(productsStatus === statusOption.IDLE){
      dispatch(getAllProducts())
    }
  }, [dispatch])

  return (
    <div>
      <h1>Products go here!</h1>
      {products.map((product) => <h3>{product.name}</h3>)}
    </div>
  );
};

export default ProductList;
