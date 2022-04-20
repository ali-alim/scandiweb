import "./cart.scss"
import photo from "./product.png"

export default function Cart() {
  return (
    <div className="cart">
        
        <div className="cart__left">
            <p>Apollo</p>
            <p>Running Short</p>
            <p>$50.00</p>
            <div className="cart__left-sizes">
                <div>S</div>
                <div>M</div>
            </div>
        </div>
        <div className="cart__center">
            <div className="cart__center-buttons">
                <div>+</div>
                1
                <div>-</div>
            </div>
        </div>
        <div className="cart__right">
    <img src={photo} alt="" />
        </div>
    </div>
  )
}
