import axios from 'axios'
import { TextField } from '@mui/material';
import React,{useEffect,useState}from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../Assests/SignUp.css'
function Signup() {
    useEffect(()=>{
        document.title='Signup';
    })
    const [email,setemail] = useState('');
    const [name,setname] = useState('');
    const [password,setpassword] = useState('');
    const link2 = useNavigate();
    function change(e){
        e.preventDefault()
        console.log(name)
        console.log(password)
        axios.post('http://localhost:3001/user',{email,name,password})
        .then(res=>alert("Account Created"))
        .catch(err=> console.log(err))
        link2('/Login')
    }
  return (
    <>
    <div className='signup_body'>
        <h1 className='title1'>IMS</h1>
        <h1 className='title2'>Inventory Management System</h1>
        <form onSubmit={change}>
            <div className='signup_page'>
                <div className='sign_sign'>SignUp</div>
                <TextField id="standard-basic" label="Email" variant="standard" value={email} onChange={(event)=>{setemail(event.target.value)}} required/>
                <TextField id="standard-basic" label="UserName" variant="standard" value={name} onChange={(event)=>{setname(event.target.value)}} required/>
                <TextField id="standard-basic" label="Password" variant="standard" value={password} onChange={(event)=>{setpassword(event.target.value)}} required/>
                <div>Already have an account? <span className='signup_anchor'><Link to="/Login">Sign in</Link></span></div>
                <button className='signup_button'>Sign Up</button>
            <div className='sign_or'>Or</div>
            <div className='signup_symbol'>
                <div className='signup_symbol1'></div>
                <div className='signup_symbol2'></div>
                <div className='signup_symbol3'></div>
            </div>


            </div>
        </form>




    </div>
    </>
  )
}

export default Signup