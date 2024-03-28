import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import {Link} from 'react-router-dom';
import React,{useEffect,useState} from 'react';
import '../Assests/Login.css'
import axios from 'axios';

function Login() {
    useEffect(()=>{
        document.title='Login';
    })
    const [name,setname] = useState('');
    const [password,setpassword] = useState('');
    function change(prevent){
        prevent.preventDefault();
        
        console.log(name)
        console.log(password)
        axios.get(`http://localhost:3001/user?name=${name}&password=${password}`)
        .then(res=>{
            if(res.data.length>0){
                alert("Login Successful")
            }
            else{
                alert("Login Unsuccessful")
            }
        })
        .catch(err=>{console.log(err)})
    }
  return (
    <>
    <div className='login_body'>
        <h1 className='login_title1'>IMS</h1>
        <h1 className='login_title2'>Inventory Management System</h1>
        <form onSubmit={change}>
            <div className='login_page'>
              <div className='login'>Login</div>
            <TextField id="standard-basic" label="UserName" variant="standard" value={name} onChange={(event)=>{setname(event.target.value)}} required/>
            <TextField id="standard-basic" label="Password" variant="standard" value={password} onChange={(event)=>{setpassword(event.target.value)}} required/>
            <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                <a className='form_anchor' href='#'>Forgot password?</a>
            </div>
            <div>

            <button className='login_button'>Log In</button>
            </div>
            <div className='login_or'>Or</div>
            <div className='login_symbol'>
              <div className='login_symbol1'></div>
              <div className='login_symbol2'></div>
              <div className='login_symbol3'></div>
            </div>
            
            <p>Don't have an account?<span className='sign'> <Link to="/Signup">Sign up</Link></span></p>
          </div>
        </form>
    </div>
    </>
  )
}

export default Login