import React from 'react'

const CartProduct = ({product}) => {
 return (
  <div>
   <div className="p-2 d-flex justify-content-between align-items-center">
    <div className='d-flex align-items-center'>
     <img src={product.image} alt="product" className='img-fluid image-width'/>
      <div>
       <div><strong>{product.name}</strong></div>
       <div><small>{product.quantity} x {product.price}</small></div>
      </div>
    </div>
    <div className='buttons'>
     <button className='btn btn-sm px-3'>-</button>
     <button className='btn btn-sm px-3'>+</button>
     <button className='btn btn-sm btn-danger px-3 ms-2'><i className='fas fa-trash'></i></button>
    </div>
   </div>
  </div>
 )
}

export default CartProduct
