import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { viewproduct ,deletedproduct } from "../../service/api";

const ManageProducts =  () => {

    const navigate = useNavigate();
 
    



const [productdetails,setProductdetails]=useState([]);




const Productdetails =  async () => {
    
    const getproductdetails = await viewproduct();
    setProductdetails(getproductdetails.data);
}


const handleSubmit =  async (e) => {
   await deletedproduct(productdetails);
   const newproduct=await viewproduct();
   setProductdetails(newproduct.data);
   
}
useEffect(()=>{
    Productdetails();
},[productdetails]);


    return (

      <div className="container">
        <div className="row card">
            <h3 >Product Management</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">PRODUCT ID</th>
                        <th scope="col">PRODUCT NAME</th>
                        <th scope="col">STOCK</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">OPERATIONS</th>
                    </tr>
                </thead>
                <tbody>

                {

                    productdetails.map((product)=>{
                       
                     return (
                         
                         <tr>
                    <td> {product.pid} </td>
                    <td> {product.pname} </td>
                    <td>{product.stock}</td>
                    <td>{product.pprice} $</td>
                     

                    <td><button  onClick={(e)=>handleSubmit(e)}  >DELETE </button>
                    </td>
                    
                </tr>
                             );
                    })
                }
                
                </tbody>
            </table>
           <div className="row">
            <div className="col-3">
                <Link to="/addprod">
                <button className="btn btn-outline-success" >
                    Add Products
                </button>
                </Link>
            </div>

            <Link  to="/deleteprod" style={{display:"inline"}}>

            <div className="col-3">
                <button className="btn btn-outline-danger"   >
                    Delete  Products
                </button>
            </div>
            </Link>
            
           </div>
          


        </div>
      </div>

      );
}
 
export default ManageProducts;