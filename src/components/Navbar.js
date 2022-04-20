import "./navbar.scss";

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
      <div className="navbar__center">Center</div>
      <div className="navbar__right">Right</div>
    </div>
  );
}
