import * as React from 'react';
import { useState } from 'react'
import { productType } from '../state/productSlice';
import { dispatchWithType } from "../state/store"
import { postProduct } from "../actions/productsAction"
import { providerType } from '../state/providerSlice';
import { useSelector } from 'react-redux';
import { stateType } from '../state/store'
import { getAllProviders } from '../actions/providersAction'
import { useEffect } from "react"
import { nanoid } from '@reduxjs/toolkit';
 
interface IProductFormProps {
}

const ProductForm: React.FunctionComponent<IProductFormProps> = (props) => {
    
      const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [min, setMin] = useState<any>(0)
    const [max, setMax] = useState<any>(0)    
    const [price, setPrice] = useState<any>(0)
    const [provider, setProvider] = useState({} as providerType)
    const quantity = 0
    const providers = useSelector((state: stateType) => state.providers.providers)

    const dispatch = dispatchWithType()  

    useEffect(() => {     
      console.log("En useEffect dentro de product form") // prueba   
      dispatch(getAllProviders())        
     }, [dispatch])

    const addProvider = async (e: React.ChangeEvent<HTMLSelectElement>) => {         
        const selectedProvider = providers.find((provider) => provider.id === e.target.value)
        if(selectedProvider){setProvider(selectedProvider)}
    }

    const onAdd = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(name && description && min && max && price && provider){
          const newProduct: productType = 
          {
            id: nanoid(), 
            name: name, 
            description: description, 
            min: min, 
            max: max, 
            quantity: quantity, 
            price: price, 
            provider: provider 
          }
          dispatch(postProduct(newProduct))          
          setName('')
          setDescription('')
          setMin(0)
          setMax(0)
          setPrice(0)
          setProvider({} as providerType)          
        }
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
              <label><i>Select provider</i></label>
                <select className="form-select" aria-label="Default select example" onChange={(e) => addProvider(e)}>
                <option>---------</option>
                    {providers.map((providerOption) => (
                        <option key={providerOption.id} value={providerOption.id}>{providerOption.name}</option>
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

