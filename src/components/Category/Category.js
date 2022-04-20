import Product from "../Product/Product"
import "./category.scss"


export default function Category() {
  return (
    <div className="category">
        <h2>Category name</h2>
    <div className="category__products">
        <Product />
        <Product />
        <Product />
        <Product />
    </div>
    </div>
  )
}
