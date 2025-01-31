const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
      <div className="container-fluid d-flex justify-content-between">
        <img
          height="64"
          src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png"
        />
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
