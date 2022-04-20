import './product.scss'
import images from "./product.png"

export default function Product() {
  return (
    
    <div className='product'>
        
        <img src={images} alt="" className='product__image'/>
        <p>Apollo Running Short</p>
        <p>$50.00</p>
    </div>
  )
}
