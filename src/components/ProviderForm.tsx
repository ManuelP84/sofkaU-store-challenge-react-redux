import { useState } from 'react'
import { postProvider } from '../actions/providersAction'
import { providerType } from '../state/providerSlice';
import { dispatchWithType } from "../state/store"
import { nanoid } from '@reduxjs/toolkit';

interface IProviderFormProps {

}

const ProviderForm: React.FunctionComponent<IProviderFormProps> = (props) => {


    const [nit, setNit] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [note, setNote] = useState('')

    const dispatch = dispatchWithType()

    const onAdd = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if(nit && name && phone && email && note){
        const newProvider: providerType = {id: nanoid(), nit, name, phone, email, note}
        dispatch(postProvider(newProvider))
        setNit('')
        setName('')
        setEmail('')
        setPhone('')
        setNote('')
      }
    }

  return (
    <div className="row">
      <div className="col-md">
        <div className="card card-body">
          <h5>Register provider</h5>
        </div>
        <div className="card card-body">
          <form onSubmit={(e) => onAdd(e)}>
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name='nit'
                  placeholder="Nit"
                  value={nit}
                  onChange={(e) => setNit(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name='name'
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
              <label></label>
                <input
                  type="text"
                  className="form-control"
                  name='phone'
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label></label>
                <input
                  type="text"
                  className="form-control"
                  name='email'
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label></label>
                <input
                  type="text"
                  className="form-control"
                  name='note'
                  placeholder="Note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary col-md-12">Register</button>

          </form>
        </div>
      </div>
    </div>

  );
};

export default ProviderForm;
