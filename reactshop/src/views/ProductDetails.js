import { useDispatch, useSelector } from "react-redux"
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {clearProduct, getProductById} from '../store/actions/productCatalogActions'
import ProductCard from '../components/products/ProductCard'

const ProductDetails = () => {

 const id = useParams().id
 const dispatch = useDispatch()
 useEffect(() => {
  dispatch(getProductById(id))
  return ()=>{
   dispatch(clearProduct())
  }
 }, [dispatch, id])

 const product = useSelector(state => state.product)
 return (
  <div>
  {product && <ProductCard product = {product}/>}
  </div>
 )
}

export default ProductDetails
