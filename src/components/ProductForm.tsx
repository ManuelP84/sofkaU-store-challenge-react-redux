import * as React from 'react';
import { useState } from 'react'
import { productType } from '../state/productSlice';
import { dispatchWithType } from "../state/store"
import { postProduct } from "../actions/productsAction"
import { providerType } from '../state/providerSlice';
import { useSelector } from 'react-redux';
import { stateType } from '../state/store'
import { getAllProviders } from '../actions/providersAction'
 
interface IProductFormProps {
}

const ProductForm: React.FunctionComponent<IProductFormProps> = (props) => {
    
    const dispatch1 = dispatchWithType()
    const dispatch2 = dispatchWithType()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [min, setMin] = useState<any>(0)
    const [max, setMax] = useState<any>(0)    
    const [price, setPrice] = useState<any>(0)
    const [provider, setProvider] = useState({} as providerType)
    const quantity = 0
    const providers = useSelector((state: stateType) => state.providers.providers)
    dispatch1(getAllProviders())

    

    const onAdd = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(name && description && min && max && price && provider){
          const newProduct: productType = {name, description, min, max, quantity, price, provider}
          dispatch2(postProduct(newProduct))
          
          setName('')
          setDescription('')
          setMin(0)
          setMax(0)
          setPrice(0)
          setProvider({} as providerType)
        }
      } 
      
    const addProvider = (e: React.ChangeEvent<HTMLSelectElement>) => {

    }
  
    return (
        <div className="row">
      <div className="col-md">
        <div className="card card-body">
          <h5>Create product</h5>
        </div>
        <div className="card card-body">
          <form onSubmit={(e) => onAdd(e)}>
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name='name'
                  placeholder="Product name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name='description'
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
              <label><i>Min. quantity</i></label>
                <input
                  type="number"
                  className="form-control"
                  name='min'
                  placeholder="Min. quantity"
                  value={min}
                  onChange={(e) => setMin(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label><i>Max. quantity</i></label>
                <input
                  type="number"
                  className="form-control"
                  name='max'
                  placeholder="Max. quantity"
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label><i>Price</i></label>
                <input
                  type="number"
                  className="form-control"
                  name='price'
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <select onChange={(e) => addProvider(e)}>
                    {providers.map((providerOption) => (
                        <option >{providerOption.name}</option>
                    ))}
                </select>                
              </div>
            </div>            
            <button type="submit" className="btn btn-primary col-md-12">Create</button>
          </form>
        </div>
      </div>
    </div>

  );
};

export default ProductForm;
