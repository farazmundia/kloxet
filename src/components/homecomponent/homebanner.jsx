import React, { Component } from "react";
import { Link } from "react-router-dom";
import banner_homepage from "../../images/kloxet_subscription_box_bg.webp";

class HomeBanner extends Component {
  state = {};
  render() {
    return (
      <div className="bannerHome">
        <div className="container" style={{display: "flex"}}>
          <div className="leftTextArea">
            <p className="monthlyPrice">
              <span>Receive 5 Jewelry Pieces | Only $20</span>
              <span>Join Today & Get FREE Gift</span>
            </p>
            <p className="bestJewelry">
              The Best Jewelry
              <span>Subscription Box!</span>
            </p>
            {!this.props.user && (
              <Link to="/quiz">
                <button className="getStratedButton fix-margin-bannerbtn" alt="get started"><span>Get Started</span></button>
              </Link>
            )}
          </div>
          <div className="bannerImageArea">
            <img src={banner_homepage} alt="kloxet home banner"/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeBanner;
