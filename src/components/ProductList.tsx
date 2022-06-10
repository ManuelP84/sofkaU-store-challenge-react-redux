import * as React from 'react';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../actions/productsAction';
import { getProductsError, getProductsStatus, getProducts } from '../state/productSlice';
import { dispatchWithType } from '../state/store';
import { useEffect } from "react"
import { statusOption } from '../actions/statusOption';
import Product from './Product';

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
    <div className="row">
        <div className="col-md">
            <div className="card card-body">
                <h5>Products</h5>
            </div>
            <div className="card card-body">
                <table className="justTable">
                <thead>
                    <tr>
                        <th>Product id:</th>
                        <th>Product name:</th>
                        <th>Product description:</th>                
                        <th>Product Quantity:</th>
                        <th>Provider NIT:</th>
                    </tr>
                  </thead>  
                  
                    {!productsError && products.map((product) => <Product key={product.id} product={product}/>)}
                  
                </table>
            </div>
        </div>
    </div>
  );
};

export default ProductList;
