import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import ProductService from '../service/ProductService';

const ProductDetails=(props)=>{
    const navigate=useNavigate();
    const deleteproduct=(pid)=>{
      ProductService.deleteProduct(pid)
      .then((result)=>{
       console.log(result);
      props.getData()
      })
      .catch(()=>{})
  
    }
    return(
        <div className="container">
        <div className="row">
           <div className="col-sm-12 col-md-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gift" viewBox="0 0 16 16">
                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07M9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z"/>
                </svg>
           </div>
           <div className="col-sm-12 col-md-4">
                <span>{props.product.pid}</span>
                <span> {props.product.pname}</span>
                <span>{props.product.qty}</span>
                <span> {props.product.price}</span>
           </div>
           <div>
              <Link to={`/view/${props.product.pid}`}>
               <button type="button" name="btn" className="btn btn-success">View</button>
               </Link> &nbsp;&nbsp;&nbsp;
               <button type="button" name="btn" className="btn btn-danger" onClick={()=>{deleteproduct(props.product.pid)}}>Delete</button>&nbsp;&nbsp;&nbsp;
               <Link to={`/edit/${props.product.pid}`} state={{empedit:props.product}}>
                  <button type="button" name="btn" className="btn btn-success">Edit</button>
               </Link>
              
           </div>
          
        </div>
        <hr color="red"></hr>
        </div>
    )
}
export default ProductDetails;