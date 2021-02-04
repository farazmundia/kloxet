import React, { Component } from "react";
import no_extra_cost from "../../images/pricing/kloxet_no_extra_cost.webp";
import pricing_img2 from "../../images/pricing/kloxet_pricing_img2.webp";
import pricing_img3 from "../../images/pricing/kloxet_pricing_img3.webp";

class HomePricing extends Component {
  state = {};
  render() {
    return (
      <div className="pricingArea">        
        <div className="container">
          <h3>The Best Deal</h3>
          <div className="underline" />
          <div className="row">
            <div className="col-sm">
              <div className="pricingHomeSection noBorder">
                <div className="imageAreaPricing">
                  <img
                    className="opacity70"
                    src={no_extra_cost}
                    alt="no_extra_cost"
                  />
                </div>
                <div className="pricingTextArea">
                  <h4>
                    NO
                    <br />
                    EXTRA COST
                  </h4>
                  <p>There is no styling fees just one flat rate.</p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="pricingHomeSection">
                <div className="imageAreaPricing">
                  <img
                    className="opacity50"
                    src={pricing_img2}
                    alt="pricing_img2"
                  />
                </div>
                <div className="pricingTextArea">
                  <h4>
                    YOU'LL <br />
                    GET TO KEEP IT
                  </h4>
                  <p>Unlike the Others, you'll get to keep what you get!</p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="pricingHomeSection">
                <div className="imageAreaPricing">
                  <img
                    className="opacity50"
                    src={pricing_img3}
                    alt="pricing_img3"
                  />
                </div>
                <div className="pricingTextArea">
                  <h4>
                    PRICED <br />
                    FOR YOUR POCKET
                  </h4>
                  <p>Why paying so much for 1 item when you can get 5.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePricing;
