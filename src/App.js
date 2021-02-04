import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import history from "./create-history";
import Loading from "./components/common/loading";
import auth from "./services/authServices";
import HomePage from "./components/home";
import Login from "./components/login/login";
import AboutUs from "./components/staticpages/aboutUs";
import Faq from "./components/staticpages/faq";
import GetStarted from "./components/getStarted";
import ContactUs from "./components/contactus";
import ForgotPassword from "./components/common/forgotPassword";
import ChangePassword from "./components/common/changePassword";
import Terms from "./components/staticpages/terms";
import Policy from "./components/staticpages/policy";
import MyAccount from "./components/profile/myAccount";
import LogOut from "./components/logOut";
//import logo from "./logo.svg";
import "./App.css";
import Subscribe from "./components/subscribe";
import page404 from "./components/staticpages/page404";

class App extends Component {
  state = {
    user: {},
    pageLoading: false
  };

  async componentDidMount() {
    this.setState({ pageLoading: true });
    const user = auth.getCurrentUser();
    this.setState({ user });
    if (user) {
      try {
        await auth.getCurrentUserDetails();
      } catch (ex) {
        auth.removeJwtToken();
        window.location = "/";
      }
    }
    this.setState({ pageLoading: false });

  }

  render() {
    const { user } = this.state;

    return (
      <div>
        {this.state.pageLoading && (<Loading />)}
        {!this.state.pageLoading && (
          <React.Fragment>
            <Switch basename="/" history={history}>
              <Route path="/login" component={Login} />
              <Route path="/logout" component={LogOut} />
              <Route
                path="/aboutus"
                render={props => <AboutUs user={user} {...props} />}
              />
              

              <Route
                path="/plan-subscribe"
                render={props => {
                  if (!auth.getCurrentUser()) return <Redirect to="/login" />;
                  return <Subscribe user={user} {...props} />;
                }}
              />

              <Route path="/faq" render={props => <Faq user={user} {...props} />} />

              <Route
                path="/contactus"
                render={props => <ContactUs user={user} {...props} />}
              />

              <Route
                path="/quiz"
                render={props => <GetStarted user={user} {...props} />}
              />

              <Route
                path="/forgotpassword"
                render={props => <ForgotPassword user={user} {...props} />}
              />

              <Route
                path="/changepassword"
                render={props => <ChangePassword user={user} {...props} />}
              />
              <Route
                path="/terms"
                render={props => <Terms user={user} {...props} />}
              />
              <Route
                path="/policy"
                render={props => <Policy user={user} {...props} />}
              />

              <Route
                path="/profile"
                render={props => {
                  if (!auth.getCurrentUser()) {
                    console.log('returning login page');
                    return <Redirect to="/login" />;
                  }
                  return <MyAccount user={user} {...props} />;
                }}
              />

              

              <Route
                exact
                path="/"
                render={props => <HomePage user={user} {...props} />}
              />

              <Route
                 path="/" exact component={HomePage}/>
                <Route path="/page404" component={page404}/>
                <Route component={page404} />
               
            </Switch>
          </React.Fragment>)}
      </div>
    )
  }
}

export default App;
