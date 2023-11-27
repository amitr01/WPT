import { useEffect, useState } from "react"
import ProductService from "../service/ProductService";

const ProductTable=(props)=>{
    const[prodarr,setprodarr]=useState([]);
    useEffect(()=>{
        ProductService.getAllProducts()
        .then((result)=>{
            setprodarr([...result.data]);
        })
    },[])

      return(
        <div>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Product id</th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
  {/* use map function to covert array into rows of the table */}
    {prodarr.map(p=><tr key={p.pid}>
        <td>{p.pid}</td>
        <td>{p.pname}</td>
        <td>{p.qty}</td>
        <td>{p.price}</td>
    </tr>)}
  </tbody>
</table>
    </div>
      )
}
export default ProductTable;