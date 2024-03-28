import React from 'react';
import '../Assests/Home1.css';
import {useState} from 'react';

const Home1=()=>{

const [price,setPrice] = useState('');
const [qty,setQty]=useState('');

const [total,setTotal]=useState(0);
const [users,setUsers]=useState([]);
const [name,setName]=useState('');
const [sum, setSum] = useState('');

function Calculation()
{
    setUsers((prevUsers) => [...prevUsers, { name, qty, price, sum }]);
const newTotal = users.reduce((newTotal, users) => {
    newTotal +=Number(users.sum)
    return newTotal
},0);
setTotal(newTotal);
    
    setName('');
    setQty('');
    setPrice('');
    setSum('');
}
const handlePriceChange =(e)  => {
    const newPrice= parseFloat(e.target.value);
    if(!isNaN(newPrice))
    {
        setPrice(newPrice);
        calculateTotal(newPrice,qty);
    }
};
const handleQuantityChange =(e) =>{
    const newQuantity = parseInt(e.target.value);
    if(!isNaN(newQuantity)) {
        setQty(newQuantity);
        calculateTotal(price,newQuantity);
    }
};
const calculateTotal=(price,qty) => {
    const newTotal = (price *qty).toString();
    setSum(newTotal);
};
function refreshPage()
{
    window.location.reload();
}

return(
     <div class="container-fluid bg-2 text-center">
        <h1>Inventory Management System</h1>
        <br/>
        <div class="row" >
        <div >
               
                <h2 >Add Products </h2>
           <table class="table table-bordered"> 
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Amount</th>
                    <th>Option</th>
                </tr>
                <tr>
                    <td>
                        <input type="text"  class="form-control" placeholder="Item Name" value={name}
                        onChange={(event) =>
                        {
                           setName(event.target.value);
                        }}
                        />

                    </td>
                    <td>
                        <input type="text" class="form-control" placeholder="Enter Price"
                        value={price.toString()}
                        onChange={handlePriceChange}
                        />
                    </td>
                    <td>
                        <input type="number" class="form-control" placeholder="Enter Qty"
                        value={qty.toString()}
                        onChange={handleQuantityChange}
                        />
                    </td>
                    <td>
                        <input type="text" value={sum} class="form-control" placeholder="Enter Total" id="total_cost" name="total_cost" disabled/>
                    </td>
                    <td>
                        <button class="btn btn-success" type="submit" onClick={Calculation}>Add</button>
                    </td>
                </tr>
            </table>
            </div>
            </div>
            <h2 > Products </h2>
            <div class="row" >
        <div class="col-sm-8">
            <table>
                
                    <tr cellpadding="5px">
                        <th>Item     </th>
                        <th >  Price    </th>
                        <th>Qty    </th>
                        <th>Amount </th>
                    </tr>
                
               
                    
                    {users.map((row,index)=>(
                        <tr key={index} cellpadding="5px">
                            <td>{row.name}</td>
                            <td>{row.price}</td>
                            <td>{row.qty}</td>
                            <td>{row.sum}</td>
                        </tr>
                    )
                    )}
                    <br></br>
                   
                
                
            </table>
        </div>
        <div class="col-sm-4">
            <div class="form-group" align="left">
                
                <h3 align="left" font-size="16px">TOTAL</h3><br></br>
                
                <input type="text" class="form-control" placeholder="" required disabled 
                value={total} />
                
                <br/>
                <button type="button" class="form-control" onClick={ refreshPage}><span>Complete</span> </button>
                
            </div>
        </div>
        </div>
        </div>
        );
        }

export default Home1;