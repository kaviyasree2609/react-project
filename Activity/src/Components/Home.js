import React,{ useEffect } from 'react';
import '../Assests/Home.css'
import { Link } from 'react-router-dom';
const Home=()=>
{
    useEffect(()=>{
    document.title='Home';
})
    return(
        <div className>
            <nav className="nav">
          <a href="/" className="site-title">
               NATE INVENTORY
          </a>
          <ul>
            <li>
                <a href="/Home">Home</a>
            </li>
              <li >
                  <a href="/Login" variant="contained"><Link to='/Login'>Login</Link></a>
              </li>
              <li >
                  <a href>Try it free</a>
              </li>
              
          </ul>
      </nav>
      <div className="fx"></div>
            <h1 className="fx1">Welcome</h1>
           <h1 className="fx1"> Nate Inventory Management</h1>
            <p className="fx2"> Manage orders,Track inventory,  </p>
            <p className="fx2"> Handle GST billing, Oversee warehouses, </p>
            <p className="fx2"> One inventory management software to run all your inventory operations. </p>           

            <div className="fx3"><Link to="/Home1">
                <a href><h2 style={{color:'beige'}}>Start Now</h2></a></Link>
                
            </div>
            
            
        </div>
    )
}
export default Home;