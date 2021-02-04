import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderLogin from "./header-login";
import auth from "../../services/authServices";

class ChangePassword extends Component {
  state = {
    username: "",
    sucessMessage: "",
    serverError: "",
    submitting: false,
    token: "",
  };
  componentDidMount() {
    if (this.props.location.search) {
      const token = this.props.location.search.split("=")[1];
      if (token) {
        this.setState({
          token,
        });
      }
    }
  }
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmitChangePassword = async () => {
    const info = {
      token: this.state.token,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    this.setState({ submitting: true });
    try {
      const { data } = await auth.resetPassword(info);
      this.setState({ sucessMessage: data.title, serverError: "" });
      window.location.href = "/login";
    } catch (ex) {
      this.setState({ serverError: ex.response.data.title });
    }
    this.setState({ submitting: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  onPasswordChange = (e) => {
    if (e.target.value === this.state.confirmPassword) {
      this.setState({
        password: e.target.value,
        submitting: true,
      });
    } else {
      this.setState({
        password: e.target.value,
        submitting: false,
      });
    }
  };

  onConfirmPasswordChange = (e) => {
    if (e.target.value === this.state.password) {
      this.setState({
        confirmPassword: e.target.value,
        submitting: true,
      });
    } else {
      this.setState({
        confirmPassword: e.target.value,
        submitting: false,
      });
    }
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
          <h1>Change Password</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fa fa-lock" />
                </div>
              </div>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.onPasswordChange}
                placeholder="Enter Password"
              />
            </div>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fa fa-lock" />
                </div>
              </div>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.onConfirmPasswordChange}
                placeholder="Enter Confirm Password"
              />
            </div>
            <button
              onClick={this.handleSubmitChangePassword}
              type="button"
              disabled={!this.state.submitting}
              className="btn btn-primary loginButton"
            >
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default ChangePassword;
