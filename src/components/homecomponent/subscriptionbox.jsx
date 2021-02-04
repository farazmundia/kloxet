import React, { Component } from "react";
import { Link } from "react-router-dom";
import women_bangle from "../../images/women_bangle.webp";
import ring from "../../images/ring.png";

class SubscriptionBoxHome extends Component {
  state = {};
  render() {
    return (
      <div className="subscriptionBoxArea">
        <div className="subscriptionWomenImage">
          <img src={women_bangle} alt="woment" />
        </div>
        <div className="subscriptionText">
          <h4>Jewelry Subscription Box</h4>
          <div className="subscriptionBoxAreaLine"> </div>
          <p>
            Hand-picked Fashion Jewelry Accessories That fits perfectly your
            Lifestyle, Taste & Budget. Our Professionals Fashion Stylists will
            select top Trending Jewelry Pieces based on your Personal Style and
            fashion look.
          </p>
          <p>
            Every Month You will receive 4 to 6 beautiful jewel pieces for a flat cost and by all means they are yours to keep and Rock!
          </p>
          {!this.props.user && (
            <Link to="/quiz">
              <button className="getStratedButton" alt="Join Now button">Join Now</button>
            </Link>
          )}
        </div>
        <div className="fixedRingArea">
          <img src={ring} alt="ring" />
        </div>
      </div>
    );
  }
}

export default SubscriptionBoxHome;
