import Navbtn from "./NavBtn";

function NavScrollExample() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid con">
        <h2>F<span>oo</span>dy Z<span>o</span>ne</h2>
        <div className="d-flex" role="search">
          <input className=" input form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-danger" type="submit">Search</button>
        </div>
      </div>
    </nav>
  );
}


function Offcanvas() {
  return (
    <nav className="navbar  bg-body-tertiary ">
      <div className="container-fluid con">
        <h2>F<span>oo</span>dy Z<span>o</span>ne</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              F<span>oo</span>dy Z<span>o</span>ne
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body navbaroff">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <Navbtn v="All" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Navbtn v="BreakFast" />

                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Navbtn v="Lunch" />

                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Navbtn v="Dinner" />

                </a>
              </li>
            </ul>
            <div className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-danger" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
};



export { NavScrollExample, Offcanvas };