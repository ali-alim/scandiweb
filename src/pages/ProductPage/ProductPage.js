import "./productPage.scss"
import photo from "./product.png"

export default function ProductPage() {
  return (
    <div className="productPage">
        <div className="productPage__left">
            <img src={photo} alt="" />
            <img src={photo} alt="" />
            <img src={photo} alt="" />
        </div>
        <div className="productPage__center">
        <img src={photo} alt="" />
        </div>
        <div className="productPage__right">
            <p>Apollo</p>
            <p>Running Short</p>
            <p>size</p>
            <div className="productPage__right-sizes">
            <div>
                xs
            </div>
            <div>
                s
            </div>
            <div>
                m
            </div>
            <div>
                l
            </div>
            </div>

            <p>price:</p>
            <p>$50.00</p>   

            <button>add to cart</button>
            <p>Lorem ipsum dolor sit amet  laborum rerum reiciendis accusamus odit </p>
        </div>
    </div>
  )
}
