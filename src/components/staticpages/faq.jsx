import React, { Component } from "react";
import Faq from "react-faq-component";
import { Helmet } from "react-helmet";
import HeaderCommon from "../common/staticHeader";
import Footer from "../common/footer";

const data = {
  // title: "FAQ (How it works)",
  rows: [
    {
      title: "COVID-19: Expected Shipping Delay",
      content: `<br><p><strong>We hope you are staying healthy and safe in these difficult times</strong>.<br><br>Our hearts go out to those impacted by COVID-19, as well as those whose jobs, schools, and livelihoods have been impacted. We remain focused on the health and safety of our employees, customers, and communities.
      <br><br>In the same vein, we are taking important steps to continue delivering value while maintaining everybody's safety and wellbeing.</p>
      <br><br>      
      <h4>Why is there a delay in receiving my order?</h4>
      <p>Our warehouse team has been working diligently to ensure that your orders continue to ship as usual. Nevertheless, given our current circumstances of COVID-19, please know that it may take additional time for us to process and ship your orders. We are closely monitoring guidelines from the CDC, WHO, and NHS to ensure that we are following all recommended protocols.
      The United State Postal Service (USPS) is experiencing high volume and delays during the Covid-19 Pandemic, which may affect the timing delivery. Please allow 7 days for your orders to arrive once shipped.
     If any concern—we will always ensure you receive your order. Thank you so much for your patience!
     .</p><br><br>`,
    },
    {
      title: "When will my order ship?",
      content:
      `<p> Once subscribed, a personal stylist will begin working on your order and will handpick the jewelry to match your style profile. Estimated delivery dates under normal circumstances are 2-3 days after been shipped. Shipment and delivery schedules may be affected by regional and federal holidays. Given uncertainties in shipping and circumstances outside our control (labor strikes, weather, pandemic, etc.).</p>
      
      <p>When placing an order, you should receive an email confirming your order shortly after completing your transaction. If you do not receive the email, please check your spam or junk folder before contacting Kloxet. Tracking information will be posted on your profile page once the order's shipping information is generated. If you have any questions about the delivery of your order please contact us at services@kloxet.com or send us a message at Contact Kloxet.com.</p><br><br>`,
      
    },
    {
      title: "My Account",
      content: `<p><strong>Subscription Cost:</strong> Subscription is a flat montly fee with no hidden fees or extra cost, <strong>FREE SHIPPING</strong> is included.</p>
      <p><strong>Cancellation:</strong> There is no commitment or agreement, feel free to cancel at any time. To Cancel your account, please log onto your profile page and hit the “Cancel Subscription” button. If any issues, please contact us at services@kloxet.com.</p>
      <p><strong>Re-take Quiz:</strong> To change or re-take the quiz, please log onto your profile page and click “Re-take Quiz”. Profile changes must be submitted by the 10th of the month so it gives time to your stylist to work on your order before being shipped.<br></br></p>`,
    
    },
    {
      title: "Contact Us",
      content: "<p>Please email us at services@kloxet.com</p>",
    },
  ],
};
const styles = {
  // bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "blue",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};
const config = {
  // animate: true,
  // arrowIcon: "V",
};
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kloxet | FAQ & how To page</title>
          <meta name="jewelry Subscription Box" content="" />
          <meta name="Jewelry Subscription Box How to and FAQ Page" content="" />
        </Helmet>
        <HeaderCommon user={this.props.user} location={this.props.location} />
        <div className="container">
          <div className="aboutUsContent">
            <h1>FAQ</h1>
            <Faq data={data} styles={styles} config={config} />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
