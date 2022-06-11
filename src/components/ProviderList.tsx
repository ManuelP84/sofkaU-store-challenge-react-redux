import * as React from 'react';
import { useSelector } from 'react-redux';
import { getAllProviders } from '../actions/providersAction'
import { useEffect } from "react"
import { getProviders, getProvidersStatus, getProviderError } from "../state/providerSlice"
import { dispatchWithType } from "../state/store"
import { statusOption } from "../actions/statusOption"
import Provider from "../components/Provider"
import ProviderForm from './ProviderForm';


interface IProviderListProps {
}

const ProviderList: React.FunctionComponent<IProviderListProps> = (props) => {

  const dispatch = dispatchWithType();
  const providers = useSelector(getProviders)
  const providersStatus = useSelector(getProvidersStatus)
  const providersError = useSelector(getProviderError)

  useEffect(() => {
    if (providersStatus === statusOption.IDLE){
      dispatch(getAllProviders())
    }
   }, [dispatch]) 
  

  return (
    <>
    <ProviderForm/>
    <div className="row">
    
    <div className="col-md">
    
        <div className="card card-body">
            <h5>Providers</h5>
        </div>
        <div className="card card-body">
            <table className="justTable">
              <tbody>
                  <tr>
                      <th>Nit:</th>
                      <th>Name:</th>                
                      <th>Phone:</th>
                      <th>Email:</th>
                      <th>Note:</th>
                  </tr>
                </tbody>  
                <tbody>
                {!providersError && providers.map((provider) => <Provider key={provider.id} provider={provider}/>)}
              </tbody>
            </table>
        </div>
    </div>
  </div>
    </>
  )
};

export default ProviderList;