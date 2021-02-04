import React, { Component } from "react";
import { Link } from "react-router-dom";

import headerLogo from "../../images/kloxetlogo-h.svg";
import userIcon from "../../images/user-icon.png";

class StaticHeader extends Component {
  state = {
    user: this.props.user,
    showAccountDrop: false,
    hideHeaderMiddleMenu: false,
    slidedown: false
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  toggleAccountDrop = () => {
    this.setState({
      showAccountDrop: !this.state.showAccountDrop
    });
  };

  toggleSlideMobileMenu = () => {
    this.setState({
      slidedown: !this.state.slidedown
    });
    //this.state.slidedown
  };

  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="logoArea">
          <Link className="nav-link" to="/">
            <img src={headerLogo} alt="header logo" />
          </Link>
        </div>
	<Link to="/quiz">
                <button className="nav-getstrated"><span>Get Started</span></button>
        </Link>
        {/*<div className="user-icon">
          <Link className="nav-link" to="/login">
            <img src={userIcon} alt="user icon" />
          </Link>
        </div>*/}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.toggleSlideMobileMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {this.state.slidedown && (
          <div className={"my-dropdown-slidedown"}>
            {!user && (
              <ul className="mobileMenu">
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">
                    ABOUT US
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/terms">
                    TERMS & CONDITION
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/policy">
                    PRIVACY POLICY
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contactus">
                    CONTACT US
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link alwaysActive" to="/quiz">
                    SIGNUP
                  </Link>
                </li>
              </ul>
            )}
            {user && (
              <ul className="mobileMenu">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/aboutus">
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/profile">
                    MY PROFILE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/quiz">
                    RETAKE QUIZ
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    LOG OUT
                  </Link>
                </li>
              </ul>
            )}
          </div>
        )}
        <div className="navMiddle">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/terms">
                TERMS & CONDITION
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/policy">
                PRIVACY POLICY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
       
        <div className="loginSignupAreaRight">
          {!user && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link alwaysActive" to="/quiz">
                  SignUp
                </Link>
              </li>
            </ul>
          )}

          {user && (
            <ul className="navbar-nav new">
              <li className="nav-item" onClick={this.toggleAccountDrop}>
                <span className="avatar">
                  {user.avatarFileUrl && (
                    <img src={user.avatarFileUrl} alt="profile Avatar" />
                  )}
                  {!user.avatarFileUrl && (
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFiHW_ncNEpkLlG4YL1Ljnv4rjTj6hyS19XI9nNRcdd9CFA9FU"
                      alt="profile Avatar"
                    />
                  )}
                </span>
                <span className="userName">{user.firstName}</span>
                <span className="downArrow">
                  <i className="fa fa-chevron-down" />
                </span>

                <div
                  className={
                    this.state.showAccountDrop
                      ? "myAccountDropDown show"
                      : "myAccountDropDown"
                  }
                >
                  <div className="arrow-up" />
                  <Link className="nav-link" to="/">
                    <span>
                      <i className="fa fa-home" />
                    </span>
                    <em>Home</em>
                  </Link>
                  <Link className="nav-link" to="/profile">
                    <span>
                      <i className="fa fa-user" />
                    </span>
                    <em>My Profile</em>
                  </Link>
                  <Link className="nav-link" to="/quiz">
                    <span>
                      <i className="fa fa-home" />
                    </span>
                    <em>Retake Quiz</em>
                  </Link>
                  <Link className="nav-link" to="/logout">
                    <span>
                      <i className="fa fa-sign-out" />
                    </span>
                    <em>Log Out</em>
                  </Link>
                </div>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

export default StaticHeader;
