import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderLogin from "../common/header-login";
import auth from "../../services/authServices";

class ForgotPassword extends Component {
  state = {
    username: "",
    sucessMessage: "",
    serverError: "",
    submitting: false,
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmitForgotPassword = async () => {
    const info = {
      username: this.state.username,
    };
    this.setState({ submitting: true });
    try {
      const { data } = await auth.initiateForgotPassword(info);
      this.setState({ sucessMessage: data.title, serverError: "" });
      window.location.href = "/";
    } catch (ex) {
      console.log(ex.response.data);
      this.setState({ serverError: ex.response.data.title });
    }
    this.setState({ submitting: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <HeaderLogin />
        <div className="loginFormArea">
          {this.state.sucessMessage && (
            <div className="alert alert-success alert-dismissible">
              {this.state.sucessMessage}
            </div>
          )}
          {this.state.serverError && (
            <div className="alert alert-danger alert-dismissible">
              {this.state.serverError}
            </div>
          )}
          <h1>Forgot Password</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fa fa-user" />
                </div>
              </div>
              <input
                type="email"
                className="form-control"
                id="username"
                name="username"
                value={this.state.username}
                onChange={(e) => {
                  this.setState({ username: e.target.value });
                }}
                placeholder="Enter email"
              />
            </div>
            <button
              onClick={this.handleSubmitForgotPassword}
              type="button"
              disabled={this.state.submitting}
              className="btn btn-primary loginButton"
            >
              Submit
            </button>

            <p className="dontHaveAccount">
              Go back to <Link to="/login">Login</Link> page
            </p>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default ForgotPassword;
