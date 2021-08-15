import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/actions/cartActions'

const ProductCard = ({product}) => {

 const dispatch = useDispatch()
 return (
  <div className='col'>
   <div className="card h-100">
    <img src={product.image} alt="..." className='card-img-top h-100'/>
    <div className="card-body">
     <h5 className="car-title">{product.name}</h5>
     <div className="card-text"><p>{product.short}</p></div>
     <p className="h5">Price: <span className='text-danger'>{product.price}</span></p>
     <div className=" row row-cols-1 row-cols-lg-2 mt-3">
      <button className="btn btn-info" onClick={()=>dispatch(addToCart(product))}>Add To Cart</button>
      <Link className="btn btn-info" to={`/products/${product._id}`}>Read More</Link>
     </div>
    </div>
   </div>
   
  </div>
 )
}

export default ProductCard
