import React, { Component } from "react";
import auth from "../services/authServices";

class LogOut extends Component {
  componentDidMount() {
    auth.removeJwtToken();
    window.location.href = "/";
    //this.props.history.push("/");
  }
  render() {
    return <div className="container">Logging out</div>;
  }
}

export default LogOut;
