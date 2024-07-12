import "./HeaderTwo.css"
import logo from "../assets/images/logo.png"
function HeaderTwo() {
  return (
    <>
      <div className="header-nav">
        <header className="header-nav header">
          <a href="#" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="header-nav-wrap menu">
            <li>
              <a href="#our-games">Our Games</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#calender">Calender</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </header>
      </div>
      {/* body */}
    </>
  )
}

export default HeaderTwo
