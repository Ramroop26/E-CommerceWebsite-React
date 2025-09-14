import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusSquare } from "react-icons/fa";
import { FaSquareMinus } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { incQunty, decQunty, cartDataRemove  } from "../cartSlice";
import '../CSS/MyCart.css';

const MyCart = () => {
    const CartData = useSelector((state) => state.mycart.cart);
   const dispatch = useDispatch();
    
   let TotalAmount=0;
    const ans = CartData.map((key) => {

         TotalAmount+=key.price*key.qnty;
        return (
            <>
                <tr>
                    <td> <img src={key.images} width="100" height="100" /></td>
                    <td> {key.name} </td>
                    <td> {key.brand} </td>
                    <td> {key.category} </td>
                    <td> {key.price} </td> 
                    <td>
                         <FaSquareMinus onClick={()=>{dispatch(decQunty({id:key.id}))}} />
                        {key.qunty}
                          <FaPlusSquare onClick={()=>{dispatch(incQunty({id:key.id}))}} /> 
                        </td>
                    <td> 
                        
                        {key.price * key.qnty} 
                        
                         </td>
                         <td>
     
                          <button onClick={()=>{dispatch(cartDataRemove({id:key.id}))}}> Delete </button>

                         </td>
                </tr>
            </>
        )
    })


    return (
        <>
            <h1> Cart Data</h1>
            <h3 align="center">Total Amount : <FaRupeeSign /> {TotalAmount}</h3>
              <Table striped bordered hover>
      <thead>
        <tr>
          <th>Images</th>
          <th style={{width:"400px"}}> Name</th>
          <th>Brand</th>
          <th>Category</th>
          <th> Price</th>
          <th> Quantity</th>
          <th> Total Amount</th>
          <th> Delete</th>
        </tr>
      </thead>
      <tbody>
         {ans}
      </tbody>
</Table>
        </>
    )
}

export default MyCart;