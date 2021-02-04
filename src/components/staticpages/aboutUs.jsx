import React, { Component } from "react";
import { Helmet } from "react-helmet";
import HeaderCommon from "../common/staticHeader";
import Footer from "../common/footer";
import markimage from "../../images/mark.webp";
import benefit_img1 from "../../images/member1.jpg";
import benefit_img2 from "../../images/member2.jpg";
import benefit_img3 from "../../images/member3.jpg";
class AboutUs extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kloxet | About Us Page</title>
          <meta name="keywords" content="" />
          <meta name="description" content="" />
        </Helmet>
        <HeaderCommon user={this.props.user} location={this.props.location} />
        <div className="container" style={{marginTop: '100px'}}>
          <div className="about-section" style={{display: "inline-block"}}>
            <h1 style={{textAlign:'center', fontSize: "25px"}}>About Us Page</h1>
            <hr/>
            <div className="column-1">
              <div className="card">
                <img src={markimage} alt="Jane" style={{ width: "100%"}} />
              </div>
            </div>
            <p style={{textAlign: 'justify'}}> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
              Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>
          <hr/>
          <br/>
          <h2 style={{ textAlign: "center", fontSize: "25px"}}>Our Team</h2>
          <div className="row membersList">
            <div className="column">
              <div className="card">
                <img src={benefit_img1} alt="Jane" style={{width:"100%"}}/>
                  <div className="member">
                    <h2>Bob Williams</h2>
                    <p className="title">CEO & Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>jane@example.com</p>
                  <p><button className="member_button">Contact</button></p>
                  </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <img src={benefit_img2} alt="Mike" style={{width:"100%"}}/>
                  <div className="member">
                    <h2>Mike Ross</h2>
                    <p className="title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>mike@example.com</p>
                    <p><button className="member_button">Contact</button></p>
                  </div>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <img src={benefit_img3} alt="John" style={{width:"100%"}}/>
                <div className="member">
                  <h2>John Doe</h2>
                  <p className="title">Designer</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>john@example.com</p>
                  <p><button className="member_button">Contact</button></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AboutUs;
