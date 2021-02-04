import React, { Component } from "react";
import { Helmet } from "react-helmet";
/* import { FacebookProvider, LoginButton } from "react-facebook"; */
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import auth from "../../services/authServices";
import HeaderLogin from "../common/header-login";
//import kloxet_logo from "../../images/header_logo.png";
import "./login.css";

class Login extends Component {
  state = {
    account: { email: "", password: "" },
    /* facebookAccount: [], */
    googleAccount: [],
    error: {},
    serverError: "",
    sucessMessage: "",
    isFbLoggedin: false,
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  validate = () => {
    const { account } = this.state;
    const result = Joi.validate(account, this.schema, { abortEarly: false });

    if (!result.error) return null;

    const error = {};
    for (let item of result.error.details) {
      error[item.path[0]] = item.message;
    }
    return error;
  };

  handleLogin = async () => {
    const { account } = this.state;
    const errors = this.validate();

    this.setState({ error: errors || {} });

    if (errors) return;

    try {
      const { data } = await auth.login(account.email, account.password);
      this.setState({ sucessMessage: data.title, serverError: "" });
      const token = data.token;
      localStorage.setItem("token", token);
      window.location.href = "/profile";
      //this.props.history.push("/profile");
    } catch (ex) {
      console.log(ex.response.data);
      this.setState({ serverError: ex.response.data.title });
    }
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const error = { ...this.state.error };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) error[input.name] = errorMessage;
    else delete error[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, error });
  };

  handleResponse = async (response) => {
    this.setState({
      facebookAccount: response,
    });
    console.log(this.state.facebookAccount);
    try {
      const { data } = await auth.socialLogin(this.state.facebookAccount);
      console.log(data);
      if (!data.existingUser) {
        this.setState({
          serverError: "Please Take the Profile Quiz first!",
        });
      } else {
        this.setState({ sucessMessage: data.title, serverError: "" });
        const token = data.token;
        localStorage.setItem("token", token);
        window.location.href = "/profile";
        //this.props.history.push("/profile");
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  handleGoogleSignUp = async (response) => {
    this.setState({
      googleAccount: response,
    });
    console.log(this.state.googleAccount);
    try {
      const { data } = await auth.socialLogin(this.state.googleAccount);
      console.log(data);
      if (!data.existingUser) {
        this.setState({
          serverError: "Please Take the Profile Quiz first!",
        });
      } else {
        this.setState({ sucessMessage: data.title, serverError: "" });
        const token = data.token;
        localStorage.setItem("token", token);
        window.location.href = "/profile";
        //this.props.history.push("/profile");
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  handleError = (error) => {
    this.setState({ error });
  };

  render() {
    const {
      account,
      isFbLoggedin,
      error,
      serverError,
      sucessMessage,
    } = this.state;
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kloxet | Login & Fashion Profile Dashboard</title>
          <meta name="keywords" content="" />
          <meta name="Kloxet fashion profile page and Dashboard." content="" />
        </Helmet>
        <HeaderLogin />
        <div className="loginFormArea">
          {sucessMessage && (
            <div className="alert alert-success alert-dismissible">
              {sucessMessage}
            </div>
          )}
          {serverError && (
            <div className="alert alert-danger alert-dismissible">
              {serverError}
            </div>
          )}
          <h1>Hello Beautiful</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
              {/* <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fa fa-user" />
                </div>
              </div> */}
              <input
                type="email"
                className="form-control"
                id="username"
                name="email"
                value={account.email}
                onChange={this.handleChange}
                placeholder="Enter Email"
              />
              <div className="invalid-feedback">{error.email}</div>
            </div>

            <div className="input-group mb-2">
              {/* <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fa fa-lock" />
                </div>
              </div> */}
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={account.password}
                onChange={this.handleChange}
                placeholder="Password"
              />
              <div className="invalid-feedback">{error.password}</div>
              <div className="remembermeArea">
                <Link className="fRight" to="/forgotpassword">
                  Forgot Your Password?
                </Link>
              </div>
            </div>

            <button
              onClick={this.handleLogin}
              type="submit"
              className="btn btn-primary loginButton"
              disabled={this.validate()}
            >
              Log in
            </button>

            <p className="orText">
              <span>Or</span>
            </p>
	    <div className="socialLoginButton">
	    {/* <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_KEY}
              buttonText="Login with Google"
              onSuccess={this.handleGoogleSignUp}
              onFailure={this.handleError}
              cookiePolicy={"single_host_origin"}
              className="loginBtn"
            /> */}
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_KEY}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  className="loginBtn loginBtn--google"
                >
                  Login with Google
                </button>
              )}
              onSuccess={this.handleGoogleSignUp}
              onFailure={this.handleError}
              cookiePolicy={"single_host_origin"}
            />
              {/* {!isFbLoggedin && (
              <FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID}>
                <LoginButton
                  scope="email"
                  onCompleted={this.handleResponse}
                  onError={this.handleError}
                  className="loginBtn loginBtn--facebook"
                >
                  <span>Login with Facebook</span>
                </LoginButton>
              </FacebookProvider>
            )}  */}
            </div>
            <p className="dontHaveAccount">
              Not Subscribed? What Are You Waiting For? <Link to="/quiz">Join Now</Link>
            </p>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
