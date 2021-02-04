import React, { Component } from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/kloxetlogo-h.svg";

class HeaderLogin extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="logoArea">
          <Link className="nav-link" to="/">
            <img src={headerLogo} alt="header logo" />
          </Link>
        </div>
      </nav>
    );
  }
}

export default HeaderLogin;
