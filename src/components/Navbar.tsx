import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-light navbar-lewagon">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png" />
        </a>
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <a className="nav-link" href="https://www.lewagon.com/tokyo">
                LW Tokyo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://tokyo-events.herokuapp.com/">
                Tokyo Tech Event API
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
