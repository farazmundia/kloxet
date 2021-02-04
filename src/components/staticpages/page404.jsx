
import React from "react";
import { Helmet } from "react-helmet";
import HeaderCommon from "../common/staticHeader";
import Footer from "../common/footer";

const page404 = props => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kloxet | 404 Page</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
      </Helmet>
      <HeaderCommon user={props.user} location={props.location} />
      <div className="container">
        <div className="aboutUsContent">
        <h1>404 Error Page</h1>
<p class="zoom-area"><b>THIS PAGE CANNOT BE FOUND.</b></p>
<section class="error-container">
  <span class="four"><span class="screen-reader-text">4</span></span>
  <span class="zero"><span class="screen-reader-text">0</span></span>
  <span class="four"><span class="screen-reader-text">4</span></span>
</section>
<div class="link-container">
  <a target="_blank" href="https://kloxet.com/" class="more-link">Visit the home page</a>
</div>
            
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default page404;
















