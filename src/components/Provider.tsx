import * as React from 'react';
import {providerType } from "../state/providerSlice"

interface IProviderProps {
  provider:providerType
}

const Provider: React.FunctionComponent<IProviderProps> = ({provider}) => {
  return(
    <tr>
      <td>{ provider.nit}</td>
      <td>{ provider.name}</td>
      <td>{ provider.phone}</td>
      <td>{ provider.email}</td>
      <td>{ provider.note}</td>
    </tr>
  ) ;
};

export default Provider;
