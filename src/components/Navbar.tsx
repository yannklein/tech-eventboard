const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 mb-4">
      <div className="container-fluid d-flex justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <img
            height="64"
            src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png"
          />
          <h1>Tokyo tech events calendar 🗼</h1>
        </div>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="https://www.lewagon.com/tokyo">
              LW Tokyo
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://yannklein.dev/">
              About Yann
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
