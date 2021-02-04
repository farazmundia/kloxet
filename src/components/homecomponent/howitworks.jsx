import React, { Component } from "react";
import { Element } from "react-scroll";
import how1 from "../../images/howItworks/kloxet-how11.webp";
import how2 from "../../images/howItworks/kloxet-how2.webp";
import how3 from "../../images/howItworks/tell-your-friends-about-kloxet-33.png";

class HowItWorksHome extends Component {
  state = {};

  render() {
    return (
      <Element name="howitworks" className="howItWorks">
        <div className="container steps">
          <div className="title">
            <h3 className="">How it Works</h3>
          </div>
{/*            <div className="underline" /> */}
          <div className="row">
            <div className="col-sm">
              <div className="howItWorksSection">
                {/* <p className="number">1</p> */}
                <div style={{width: '30%'}}>
                  <div className="howItWorksImageArea" style={{textAlign: "center"}}>
                    <img src={how1} alt="st1" />
                  </div>
                </div>
                <div style={{ width: '70%' }}>
                  <p className="firstText">
                    Get Started With a Fashion Style Quiz
                  </p>
                  <p className="secondText">
                    Create a fashion style profile so your personal fashioner gets
                    the best of you.
                  </p>
                </div>           
              </div>
            </div>
            <div className="col-sm">
              <div className="howItWorksSection">
                {/* <p className="number">1</p> */}
                <div style={{ width: '30%' }}>
                  <div className="howItWorksImageArea" style={{ textAlign: "center" }}>
                    <img src={how2} alt="st2" />
                  </div>
                </div>
                <div style={{ width: '70%' }}>
                  <p className="firstText">
                    Receive Five Personalized Pieces, Delivered to Your Door
                  </p>
                  <p className="secondText">
                  Try on and enjoy your hand-picked jewelry pieces! It perfectly fits your budget and style.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="howItWorksSection">
                {/* <p className="number">1</p> */}
                <div style={{ width: '30%' }}>
                  <div className="howItWorksImageArea" style={{ textAlign: "center" }}>
                    <img src={how3} alt="st3" />
                  </div>
                </div>
                <div style={{ width: '70%' }}>
                  <p className="firstText">
                    Show Off & Flash It! Let Your Friends Know About Kloxet
                  </p>
                  <p className="secondText">
                    Refer a friend and receive 10% off on your next Order!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default HowItWorksHome;
