import React, { SyntheticEvent, useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import axios from 'axios';
import {Navigate} from 'react-router-dom';
import Wrapper from '../components/Wrapper';



const Login = () => {

  const [errorText, setErrorText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

  const data = {
    email,
    password
  }

  console.log(data);

  const res = await axios.post('http://localhost:8080/auth/login', data, {withCredentials: true});

  console.log(res);

  if (res.status == 201) {
    setRedirect(true);
  }
  if (res.status !== 201) {
    setErrorText('Napaka pri podatkih');
  }
}
  if (redirect){
    return <Navigate to = '/'/>
  }

  return (
    <>
        <h2>{errorText}</h2>
        <form onSubmit={submit} className="form-signin w-100 m-auto">
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"
                   onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="floatingEmail">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                   onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
        </form>
    </>
  )

}

export default Login;