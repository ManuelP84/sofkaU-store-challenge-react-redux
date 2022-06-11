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
            <thead>
                <tr>
                    <th>Provider id:</th>
                    <th>Provider NIT:</th>
                    <th>Provider name:</th>                
                    <th>Provider phone:</th>
                    <th>Provider email:</th>
                    <th>Provider note:</th>
                </tr>
              </thead>  
              
                {!providersError && providers.map((provider) => <Provider key={provider.id} provider={provider}/>)}
              
            </table>
        </div>
    </div>
  </div>
    </>
  )
};

export default ProviderList;