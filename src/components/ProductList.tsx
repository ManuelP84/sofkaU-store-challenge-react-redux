import * as React from 'react';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../actions/productsAction';
import { getProductsError, getProductsStatus, getProducts, productType } from '../state/productSlice';
import { dispatchWithType } from '../state/store';
import { useEffect } from "react"
import { statusOption } from '../actions/statusOption';
import Product from './Product';
import ProductForm from '../components/ProductForm'


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
    <>
    <ProductForm/>
    <div className="row">
        <div className="col-md">
            <div className="card card-body">
                <h5>Products</h5>
            </div>
            <div className="card card-body">
                <table className="justTable">
                  <tbody>
                      <tr>
                          <th>Product:</th>
                          <th>Description:</th>                
                          <th>Quantity:</th>
                          <th>Price:</th>
                          <th>Provider</th>
                      </tr>
                    </tbody>  
                    <tbody>
                      {!productsError && products.map((product: productType) => <Product key={product.id} product={product}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
    
  );
};

export default ProductList;
