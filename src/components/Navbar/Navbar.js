import "./navbar.scss";
import logo from "./assets/a-logo.png";
import cart from "./assets/vector.png";
import usd from "./assets/frame_2.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        {["women", "men", "kids"].map((item) => (
          <p key={`link -${item}`}>
            <a href={`#${item}`}>{item}</a>
            <div />
          </p>
        ))}
      </div>
      <div className="navbar__center">
        <a href="">
          <img src={logo} alt="logo" height={28.62} width={31.18} className="logo" />
        </a>
      </div>
      <div className="navbar__right">
        <div className="navbar__right-actions">

            <div>
            <select> 
              <option value="usd">$ USD</option>
              <option value="eur">€ EUR</option>
              <option value="jpy">¥ JPY</option>
            </select>
            </div>

          <div>
          <a href="">
            <img src={cart} alt="cart" width={13} height={13} />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
