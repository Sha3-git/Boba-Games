import { useEffect } from "react"
import "../App.css"
function Header() {
  return (
    <>
      <div>
        <nav className={`navbar navbar-expand-lg bg-body-tertiary`}>
          <div class="container-fluid pl-5">
            <a class="navbar-brand ms-5" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler ms-3 mb-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className={`row w-100 `}>
                <div className="col-lg-8 ps-5">
                  <hr className="nav-line"></hr>
                </div>
                <div className="col-lg-1 text-center mb-2">
                  <a className="navItem fs-5" href="/about">
                    About
                  </a>
                </div>
                <div className="col-lg-1 text-center mb-2">
                  <a className="navItem fs-5" href="/Menu">
                    Menu
                  </a>
                </div>
                <div className="col-lg-1 text-center mb-2">
                  <a className="navItem fs-5" href="/Calendar">
                    Events
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* body */}
    </>
  )
}

export default Header
