import React from "react";
import { Helmet } from "react-helmet";
import HeaderCommon from "../common/staticHeader";
import Footer from "../common/footer";

const PrivacyPolicy = props => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kloxet | Privacy Policy Page</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
      </Helmet>
      <HeaderCommon user={props.user} location={props.location} />
      <div className="container">
        <div className="aboutUsContent">
          <section>
            <h2 className="main-title">Privacy Policy</h2>
            <hr/>
            <p>
              At Kloxet.com your privacy matters, we are committed to protecting your privacy.<br/>
              Kloxet is a fashion club that brings skilled fashioning, top technology and a truly unique personalized product.
              The Company and the Sites will collectively be referred to referred to herein as "Kloxet, Kloxet Club or Kloxet Subscription Box", "we", "our", or "us". 
              By visiting, using, accessing the Sites and/or providing your information to us, you agree to accept the practices and terms of this Privacy Policy and also agree to the Terms and Conditions of Five Four.
              In this Privacy policy you will find our best practices regarding the personal information collected form the kloxet.com site users or potential clients.
              This Privacy Policy explains what information we collect from you, how we collect it, how we use it and how we protect it.
              We want you to feel safe in our community, so we use industry-standard safeguards and procedures, secured by SSL technology.
              You will be also in control of how much personal information you will be sharing with us and only us.
            </p>
          </section>
          <br/>
          <section>
            <h3 className="subtitle">INFORMATION COLLECTED</h3>
            <hr/>
            <p>
              We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.
              We group the collection of user information into two categories: Personal and Non-Personal.
              Personal information is collected upon orders or registering on the Sites and consists of the following:
            </p>
            <p>First and last name;</p>
            <p> E-mail address;</p>
            <p>Mailing/billing address;</p>
            <p>Phone number; or Credit/debit card information (We do not storage credit card or debit information)</p>
         </section>
          <br/>
          <section>
            <h3 className="subtitle">HOW DO WE USE YOUR INFORMATION?</h3>
            <hr/>
            <p>
              We collect information from you on this Site to provide an eloquent, safe, proficient, and personalized experience. We use this information to:
            </p>
            <ul style={{fontSize:"14px"}}>
              <li>Make the site an easy experience and stress-free to use.</li>
              <li>Enable us to send you information about your orders, billing and payment.</li>
              <li>Verify your identity when you make a purchase on our Site.</li>
              <li>Service you faster when searching for information on kloxet"s products.</li>
              <li>Provide targeted online marketing for the Site.</li>
              <li>Content creation more relevant to you.</li>
              <li>Alert or Email you about products, services and special deals that might specifically interest you.</li>
              <li>To choose and deliver your shipment;</li>
              <li>respond to comments, requests and questions and provide customer service;</li>
              <li>facilitate the creation of and secure your Account on our network;</li>
              <li>identify you as a user in our system;</li>
              <li>provide, process and deliver the Services you request;</li>
              <li>improve the quality of experience when you interact with our Services, including the testing of different page designs to see which performs better;</li>
              <li>send you administrative e-mail notifications, such as security or support and maintenance advisories;</li>
              <li>resolve disputes and/or troubleshoot problems;</li>
              <li>develop and improve marketing and advertising for the Services;</li>
              <li>process and deliver orders;</li>
              <li>respond to your inquiries related to employment opportunities or other requests;</li>
              <li>send newsletters, surveys, offers, and other promotional materials related to our Services and for other marketing purposes.</li>
            </ul>
            <br/>
            <div className="notes">
              <p><span style={{fontWeight:"bold"}}>Note:</span> If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.</p>
            </div>
           
          </section>
          <br/>
          <section>
            <h3 className="subtitle">Information You Provide to Us.</h3>
            <ul style={{ fontSize: "14px" }}>
              <li>
                a.  When You Join Kloxet.com. 
                In order to join kloxet you must fill-out a personal fashion quiz or questionnaire that asks for fashion accessories profile information like what type of earrings, necklaces, fashion style, rings, and fashion products you love, and where you usually shop for fashion accessories products. 
                We use the personalized fashion profile information to personalize your experience. 
                If you subscribe to our fashion club then we will use the Fashion Quiz Profile information to send you fashion accessories that fits your unique profile, alerts about fashion accessories products, services, and other fashion news that might interest you.
                At the end of the Fashion Quiz, in order to join kloxet you must choose a username and password. 
                Your username will be visible to other users when they visit the Site, so please choose carefully. 
                You also must provide a valid email address and your date of birth. 
                We use your email to communicate with you about our Site and your registration. We ask for your date of birth to make sure you're old enough to use our Site and services. And, of course, we also like to wish you a happy birthday.
                If you provide us your email address but choose not to become a member, then we will retain your email address for a period to invite you back to the Site.
              </li>
              <li>
                b.	When You Order from Us.
                If you subscribe to our Fashion Club or order any Kloxet products from us, you must provide your: name, shipping address, billing address, and credit card information.
                We use this information, along with your email, for billing purposes, to fulfill your orders, and to communicate with you about your orders.
                We collect your credit card information through our Site. The credit card information is encrypted, and transmitted for storage to a high security vault according to strict industry standards. Once the data reaches the vault it is "tokenized". No credit card information is retained in kloxet's own systems or servers. Instead we retain a token associated with your account that has no intrinsic value. Your credit card information is not exposed anywhere in our own systems. Please do not send your credit card information to our team directly. Please use our secure, online system to enter your credit card information.
              </li>
            </ul>
          </section>
          <br />
          <section>
            <h3 className="subtitle">Information We Automatically Collect or Receive.</h3>
            <ul style={{fontSize:"14px"}}>
              <li>
                a.	Log Files. 
                Like every site out there, kloxet automatically receives and stores in log files certain information from your browser when you visit the Site. 
                This information includes your Internet protocol ("IP") address, browser type, Internet service provider, the referring/exit pages, your operating system, and the date/time stamp of your Site visit. 
                We use this information, which doesn't identify individual Site visitors, to analyze and understand how the Site works for you so we can improve it, to administer the Site, and to gather demographic information about Site visitors for targeted online marketing purposes. 
                We may link this automatically collected information to your personal information.</li>
              <li>
                b.	Cookies and Other Tracking Technologies Policy.
                Introduction
                We use a variety of technologies to help us understand how you use Kloxet.com (the "Site") and our services. 
                This guide explains the tracking technologies kloxet uses and is part of our commitment to a high standard of transparency in our privacy practices.
              </li>
            </ul>
          </section>
          <br />
          <section>
            <h3 className="subtitle">Tracking Technology Lifespans</h3>
            <li>Single-session tracking technology: lasts only as long as your site visit. Single-session cookies expire and delete themselves when you leave the site or close your browser. They are used for technical purposes such as enabling better navigation through a site or generating aggregated statistics about how a site is used. Single-session cookies do not publicly expose your personal information.</li>
            <li>Multi-session or persistent tracking technology: remains on your browser or mobile device until you choose to delete it or the cookie expires. Persistent cookies are used to recognize a computer that has previously visited a site. This can improve the user's experience, for example by continuing preference settings from previous visits and by allowing users to login without entering a password with every site visit.</li>
          </section>
          <br/>

          <section>
            <h3 className="subtitle">Marketing Companies</h3>
            <p>We work with a number of marketing companies that assist in marketing our services to you on third party websites. These companies may collect information about online activities conducted on a particular computer, browser or device over time and across third-party websites or online services for the purpose of delivering advertising that is likely to be of greater interest to you. While not a comprehensive list, some of these marketing companies we work with are Facebook, Google AdWords, Instagram, youtube.com and Yahoo ads.</p>
          </section>
          <br/>
          <section>  
            <h3 className="subtitle">Analystic Companies</h3>
            <p>We work with a number of third party analytics companies that collect information anonymously and report website trends without identifying individual visitors. These services allow us to view a variety of reports about how visitors interact with the Services so we can improve our website and understand how people find and navigate it. Currently, we work with Google Analytics a google company. This is not intended to be a comprehensive list and we may stop working with this company (s) and work with others without notice. 
              You can learn more about how these companies collect, use and share information about you by visiting their websites.</p>
          </section>
          <br />
          <section>
            <h3 className="subtitle">HOW YOU CAN CONTROL YOUR PERSONAL INFORMATION</h3><hr/>
            <p>A--&gt; Login into Your Account. You can change the personal information you provide to us and remove any content you post publicly on our Site, including reviews, looks style and videos, by logging into your kloxet account and making the appropriate changes.</p>
            <br />
            <p>B--&gt; Contact Us. You can request that we take down any of your personal content on the Site by emailing us at services@kloxet.com. We will remove your public posts from view, but we may retain personal information about you solely for the purposes authorized under this Privacy Policy. For example, we may retain information to prevent, investigate, or identify possible wrongdoing in connection with the Site or to comply with legal obligations.</p>
            <br />
            <p>Opt-Out. You can always "opt-out" of having your personal information used for certain purposes. At your request, we will stop sending you certain emails or even deactivate your account to prevent any future purchases through it. You can submit these requests at any time by emailing us at services@kloxet.com</p>
            <br />
            <p>Block Cookies and Targeted Advertising. You can prevent Kloxet.com and its third-party partners from setting and accessing cookies on your computer by setting your Internet browser to block cookies.</p>
            <br />
            <p>Our Site does not act on "do not track" request headers, but you can still limit tracking by taking these steps.</p>
            <br />
            <p>Cancel Your Subscription or Deactivate Your Account. You may cancel your Kloxet Fashion Club Subscription by logging into your account, clicking on "My Account" and choosing "cancel subscription". You may deactivate your user account by emailing us at services@kloxet.com with the subject line: "Account Deactivation Request."</p>
            <br />
          </section>
          <br />
          <section>
            <h3 className="subtitle">YOUR PERSONAL INFORMATION IS PROCTECTED:</h3>

            <p>At Kloxet, we take data security seriously. We use technical, physical and administrative protections. Online or the WebApp, we encrypt your personal information using Secure Sockets Layer ("SSL"). SSL allows for a private, reliable Site connection where your identity is authenticated with cryptography. Offline, we restrict access to your personal information to only Kloxet web administrators who need it to perform a specific job function. We also hold our vendors who need access to your personal information to strict confidentiality requirements. Third-party service providers assist us with the physical security of some of our computer hardware. When you visit our Site, you access servers that we backup constantly. Our servers are hosted at locations which are private and secure data center facilities, behind physical and virtual firewalls.<br /><br />
            But please remember, while we use industry-standard precautions to safeguard your personal information, we can't guarantee absolute security. We wish we could, but 100% security just doesn't exist anywhere online or off.</p>
            <br />
          </section>
          <br />
          <section>
            <h3 className="subtitle">Minors</h3>
            <p>We respect children's privacy. This Site is not intended for persons under the age of 13. If you're under 18 years old, please do not submit any personal information to us without the consent and supervision of a responsible parent or legal guardian</p>
            <br />
          </section>
          <br />
          <section>
            <h3 className="subtitle">CHANGES TO THIS PRIVACY POLICY</h3>

            <p>This Privacy Policy is subject to occasional revision, and if we make any material changes in the way we use your personal information, we will notify you by sending you an e-mail to the last e-mail address you provided to us and/or by prominently posting notice of the changes on the Services and updating the "Last Updated" date above. Any changes to this Privacy Policy will be effective upon the earlier of thirty (30) calendar days following our dispatch of an e-mail notice to you or thirty (30) calendar days following our posting of notice of the changes on the Services. These changes will be effective immediately for new users of our Service. Please note that at all times you are responsible for updating your personal information to provide us with your most current e-mail address. In the event that the last e-mail address that you have provided us is not valid, or for any reason is not capable of delivering to you the notice described above, our dispatch of the e-mail containing such notice will nonetheless constitute effective notice of the changes described in the notice. If you do not wish to permit changes in our use of your personal information, you must notify us prior to the effective date of the changes that you wish to deactivate your Account with us. Continued use of our Services, following notice of such changes shall indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes.</p>
           </section>
           <br/>
           <section> 
            <h3 className="subtitle">International Users</h3>
            <p>Kloxet Club is exclusively hosted in the United States. If you are accessing kloxet from the European Union, Australia, Asia, or any other region with laws or regulations governing personal data collection, uses, and disclosure, that differ from United States laws, please note that you are transferring your personal data to the United States which does not have the same data protection laws as such other regions. User information (including Personal Information or "personal data" as defined by foreign laws) collected through Kloxet may be stored and processed in the United States, and by using kloxet, you consent to any such transfer of information outside of your home country.</p>
          </section>
          <br />
          <section>
            <h3 className="subtitle">Online Privacy Policy Only</h3>
            <p style={{textAlign:"center"}}>This online privacy policy applies only to information collected through our website and not to information collected offline.</p>
          </section>
            <br />
          <section>
            <h3 className="subtitle">Your Consent</h3>
            <p style={{textAlign:"center"}}>By using our site, you consent to our web site Privacy Policy.</p>
          </section>
          <br />
          <section>
            <h3 className="subtitle">Contacting Us</h3>
            <p style={{textAlign:"center"}}>If there are any questions regarding this privacy policy you may contact us via email, or by using the information below.</p>
          </section>
          <br/>
          <section style={{ textAlign: 'center' }}>
            <span style={{fontWeight:'bolder'}}>Kloxet, LLC</span>
          </section>
          <section style={{ textAlign: 'center' }}>
            <a href="mailto:services@kloxet.com" style={{ textAlign: 'center' }}>services@kloxet.com</a>
          </section>          
          <br />
          <p style={{textAlign:'center'}}>Created: August 1, 2016
          Last Updated: Jamuary 3rd, 2021
          </p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default PrivacyPolicy;
