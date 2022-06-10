import * as React from 'react';
import { useSelector } from 'react-redux';
import { getAllProviders } from '../actions/providersAction'
import { useEffect } from "react"
import { getProviders, getProvidersStatus, getProviderError } from "../state/providerSlice"
import { dispatchWithType } from "../state/store"
import { statusOption } from "../actions/statusOption"


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
    <div>
      <h1>Providers go here!</h1>
      {providers.map((provider) => <h3>{provider.nit}</h3>)}
    </div>     
  )
};

export default ProviderList;
