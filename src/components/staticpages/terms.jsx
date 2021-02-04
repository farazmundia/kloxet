import React, { Component } from "react";
import { Helmet } from "react-helmet";
import HeaderCommon from "../common/staticHeader";
import Footer from "../common/footer";

class TermsAndCondition extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kloxet | Terms & Condition</title>
          <meta name="keywords" content="" />
          <meta name="description" content="" />
        </Helmet>
        <HeaderCommon user={this.props.user} location={this.props.location} />
        <div className="container">
          <div className="aboutUsContent">
            <div className="container">
              <div className="text-center">
                <h2 className="main-title">Kloxet.com TERMS OF SERVICE, USE, AND PURCHASE.</h2>
              </div>
              <hr className="mt0"/>
              <section className="first-section">
                <h4 className="title9">TERMS OF SERVICE</h4>
                <p>Welcome to Kloxet.com Accessories Subscription Club!<br/> 
                  The services on the websites located at kloxet.com and www.kloxet.com (the 'Sites') are owned and operated by <span>Kloxet, LLC (the 'Company')</span>. 
                  The Company and the Sites will jointly be stated to herein as Kloxet.com ('Kloxet Accessories Club'). 
                  Kloxet provides website features and other products and services to you when you visit, shop, or purchase items from the Sites, use Kloxet.com services, access the Sites from your mobile devices, or use software provided by Kloxet.com in association with any of the foregoing (collectively 'Kloxet.com Services').</p>
                <br/>
                <p>By using Kloxet.com Services, you understand that you are subject to the following conditions and you accept and agree to abide by these conditions. Please read them carefully.</p>
                <div className="notes">
                  <h5>
                    YOU MUST BE AT LEAST 13 YEARS OLD TO USE THE SITES OR KLOXET.COM SERVICES. 
                    BY ACCESSING OR USING THE SITES, MOBILE APPLICATION OR OTHER KLOXET.COM PRODUCT OR SERVICE ON ANY COMPUTER, MOBILE PHONE, TABLET, CONSOLE, OR OTHER DEVICE (collectively, 'DEVICE'), 
                    YOU ACKNOWLEDGE AND AGREE THAT YOU HAVE READ, UNDERSTAND, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE, USE, AND PURCHASE AND ANY OTHER APPLICABLE LAW, WHETHER OR NOT YOU ARE A REGISTERED MEMBER OF KLOXET.COM. 
                    BEFORE PLACING AN ORDER, IF YOU HAVE ANY QUESTIONS RELATING TO THESE TERMS OF SERVICE, PLEASE EMAIL OUR CUSTOMER SERVICE TEAM SERVICES@KLOXET.COM
                  <br/>
                  KLOXET.COM may change these Terms of Service at any time without notice. All changes and revisions will be posted on the KLOXET.COM website and will be effective immediately upon posting. Your continued use of the KLOXET.COM Services or enrollment as a KLOXET.COM Member shall be considered acceptance to the revised Terms of Service.
                  <br/>
                  IF YOU DO NOT AGREE WITH THESE TERMS OF SERVICE, PLEASE DISCONTINUE USE OF THE SITES OR ANY KLOXET.COM SERVICES AND IMMEDIATELY CANCEL YOUR MEMBERSHIP BY EMAILING US AT services@kloxet.com ON OR BEFORE THE 5th DAY OF THE MONTH.
                  <br/>
                  If any of these conditions shall be deemed invalid, void, or for any reason unenforceable, that condition shall be deemed severable and shall not affect the validity and enforceability of any remaining condition.
                  </h5>
                </div>
                <br/>
                <h4 className="title9">PRIVACY</h4>
                <br />
                <p>Please review our Privacy Policy, which also governs your visit to the Sites and shall be incorporated herein as part of these Terms of Service.</p>
              </section>
              <hr/>
              <section className="second-section">
                <h3 className="subtitle">1. ELECTRONIC COMMUNICATION</h3>
                <p> When you access the Site, use any <span>KLOXET.COM</span> Service, or send e-mails to us, you are communicating with us electronically. You consent to receive communications from us electronically. We will communicate with you by e-mail or by posting notices on the Sites. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.</p>
              </section>
              <hr />
              <section className="third-section">
                <h3 className="subtitle">2. HOW MEMBERSHIP WORKS</h3>
                <p>  <span>KLOXET.COM</span> offers a monthly subscription and/or membership program that grant you access to <span>KLOXET.COM</span>'s fashion monthly services, where experts will send you an individually personalized package of up to six items of KLOXET merchandise based according to your filled style quiz profile. To subscribe to the KLOXET.COM membership club, complete the personality quiz on the Site, enter your billing information, and you will be enrolled in the KLOXET.COM membership program. The first month's membership fee is charged right after you press the Submit Order button on the Secure Checkout page. This first membership charge is non-refundable. However, after that, please note by enrolling into the membership program, you are agreeing to pay and authorize <span>KLOXET.COM</span> to automatically charge your credit card a monthly membership fee of <span>$20.00</span> on the 1ST of each month until you pause or cancel. </p>
                <br />
                <p>  Upon acceptance in the <span>KLOXET.COM</span> membership program, you will receive a personalized curated package of merchandise each month based upon your specific style profile. Because our products are kept up to the minute with new and ever evolving styles, we always have a limited supply. No item/size is guaranteed to be in stock, and we make no expressed representation of availability.</p>
                <br />
                <p>  If you wish to pause your monthly membership, you must contact us via online chat or email (services@kloxet.com) via the 'contact us' link, on or before the 10th day of each month in order to not be charged for that month. You may pause your membership at any given time for up to three (3) months. After that, the monthly charge of <span>$20.00</span> to your credit card will resume.
                <br />
                 If you wish to cancel your monthly membership, you must contact us via online chat by logging into your account and messaging a live chat representative from your member dashboard between the hours of 9:00am East ' 5:00pm East Monday through Friday OR by emailing us at services@kloxet.com, on or before the 10th day of each month, in order to not be charged for that month.
                <br />
                We accept Visa, MasterCard, Paypal as forms of payment. If your payment method reaches its expiration date and you do not edit your credit card information or cancel your account, you authorize us to continue billing that credit card on file including extending the expiration date until we are notified by you or the credit card company that the account is no longer valid. We encourage you to constantly update your payment method information or cancel your account should you wish to discontinue your membership with us.</p>
              </section>
              <hr/>
              <section className="forth-section">
                <h3 className="subtitle">3. Billing</h3>
                <p>Your provided payment method will be billed on the 1ST of the Month, your first subscription package or box should arrive on the 3rd week of the month (16th-20th). For example; if you sign up on or after  April 15th you will not be billed until May 1St and the shipment won't arrive until the 3rd week of the next month. </p>
              </section>
              <hr/>
              <section>
                <h3 className="subtitle">4. Product Arrival</h3>
                <p>  Once your credit card has been billed on the 1st of the month, your first box should arrive on the 3rd week of the month. We are committed to get you your subscription box on the 15th of every month but this will vary due to shipping locations.</p>
              </section>
              <hr/>
              <section>
                <h3 className="subtitle">5. RETURNS AND EXCHANGES</h3>
                <p>You may not return your monthly subscription box. Refunds will not be issued for any returned items that were part of the subscription box. If you have an issue with any item in the subscription box please contact us. Your satisfaction is very important to us at Kloxet.com.
                <br />
                  You may return any individually purchased items from the website. Only unworn and unused accessories or any other product will be accepted for a refund. You will receive a refund for the price of the item in your original form of payment. You will not be refunded for shipping and you will be responsible for the cost of the return shipping.
                <br />
                  In order to qualify for a refund you must return the item within 14 days of purchase, with all original packaging, the receipt and a brief description of the reason for return. Please do not forget to reference your order number in the return. A 20% restocking fee will apply to all orders returned without the appropriate paperwork. Items not postmarked within 14 days of the ship date will not be accepted. Please understand there are no exceptions to this policy Kloxet cannot accept merchandise for a refund if the items received are damaged, scratched or show visible wear. Any merchandise received by Kloxet that does not meet these guidelines will be returned to the customers. Kloxet reserves the right to refuse a refund for any reason including excessive exchanges.
                <br />
                  If any received item is damaged, please contact us at services@kloxet.com before returning the accessory.
                <br />
                  Any sale item marked as 'final sale' may not be returned for a refund.
                <br />
                  Since we offer limited time sales and items with limited stock we are unable to accept exchanges. If you are not happy with the item simply return it for a refund.</p>
              </section>
              <hr/>
              <section>
                <h3 className="subtitle">6. REFERRAL CREDITS</h3>
                <p>  As a Client, by referring your friends to KLOXET.COM, you may participate in the KLOXET.COM Referral Program (the 'Program'). If you are accepted into the Program, you will receive a referral code toward future purchases (a 'Referral Credit') when you make a Qualifying Referral. In order to receive a Referral Credit, each of the following requirements must be met (collectively, a "Qualifying Referral"): (i) you must send a referral code that is unique to you to a friend; (ii) the referred friend must enter the code correctly during the sign-up process; and (iv) you must be a paying and active Client of the KLOXET.COM Services. <br />
                  Due to the manner in which referrals are processed, please take extra care to correctly enter your code during registration. We will not be able to apply your referral code to your account after you have signed up and registered. Purchases using KLOXET.COM Gift Cards are not Qualifying Referrals.
                <br />
                    Referral codes or referral links obtained from a public forum, coupon site, or third-party affiliate site will be considered invalid and we will not be able to apply such referral credits to your purchase.
                <br />
                      The amount of the Referral Credit will be the amount specified at the time the referred friend signs up with the referral code to KLOXET.COM. You may be required to pay taxes, and we may be required to withhold taxes, on the value of redeemed Referral Credits if the value exceeds certain thresholds. Referral Credits will be reflected in your Account in a commercially reasonable amount of time after the Qualifying Referral has been completed. In any event, the maximum amount of Referral Credits that you can receive at any given time is $100
                <br />
                  Referral Credits can be accrued solely by you and you may not earn Referral Credits by (i) permitting another individual to use your Account; (ii) creating multiple or fake Accounts; (iii) posting your unique referral link on any public forum, coupon site, or other third party affiliate site or; (iv) any other restriction we impose participants in the Program upon notice.
                <br />
                  By acquiring Referral Credits, you agree and acknowledge that KLOXET.COM is granting you a limited, revocable license to a digital item, and that Referral Credits are not your personal property. You may not obtain any cash or money in exchange for Referral Credits. Except as explicitly provided herein, Referral Credits are non-transferable. You are responsible for notifying KLOXET.COM of any discrepancy between the number of Referral Credits in your Account and the number you believe should be in there.
                <br />
                  We reserve the right to modify, suspend or terminate the Program and to void any Referral Credits at any time and for any reason upon notice to you, including when you (i) pause your account; (ii) cancel your account; or (iii) are banned from your account by KLOXET. We may provide such notice in any way compliant with applicable law-including via email to the last email address you provided to us-by amending these Terms of Service. All Referral Credits are voided immediately upon termination of this Agreement. </p>
           
              <br/>
              <p>REFERRAL CREDIT AND GIFT CARD LIMITATION OF LIABILITY</p>
              <div className="notes">
              <h5> KLOXET.COM MAKES NO WARRANTIES, EXPRESS OR IMPLIED, WITH RESPECT TO REFERRAL CREDITS OR GIFT CARDS INCLUDING, WITHOUT LIMITATION, ANY EXPRESS OR IMPLIED WARRANTY OR MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. IN THE EVENT THAT A MEMBERSHIP CREDIT OR GIFT CARD IS NON-FUNCTIONAL, YOUR SOLE REMEDY, AND OUR SOLE LIABILITY, SHALL BE THE REPLACEMENT OF SUCH MEMBERSHIP CREDIT OR GIFT CARD. CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OR CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR LIMITATIONS MAY NOT APPLY TO YOU.
                <br/>
                  If you have any questions regarding our referral credits or gift card policies please send all inquiries to SERVICES@KLOXET.COM.</h5><br/>
                </div>
              </section>
              <hr/>
              <section>
                <h3 className="subtitle">7. ACCOUNT CONFIDENTIALITY AND ACCESS</h3>
                <p>   You represent that you are a human, as accounts registered by automated methods are not permitted. If you use the Sites, you are responsible for maintaining the confidentiality of your account and password, as well as for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. KLOXET.COM shall not be liable or responsible for any loss or damage arising from any unauthorized use, access, or any other breach of security of your Account, including but not limited to your member sign-in service. You agree to notify us immediately of any unauthorized use of your account and/or password, or other personal information, and agree that we shall not be liable for any loss or damage arising out of your failure to comply with this obligation. </p><br />
                <p>  KLOXET.COM reserves the right to refuse service, terminate accounts, remove or edit content, or cancel orders at our sole discretion. You further agree not to access any other person's or member's account or account information without their express permission.</p>
              </section>
              <hr/>
              <section>
                <h4 className="title9">COPYRIGHT</h4>
                <p>  All content, text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, code, and software used on or incorporated into the Sites and/or any KLOXET.COM Service, and the arrangement or integration of all such content, text, graphics, logos, button icons, images, audio clips, digital downloads, data compilation, code, and software property are owned by KLOXET.COM or content suppliers, and are subject to copyrights held by or licensed to KLOXET.COM and all rights thereto are specifically reserved and protected by all applicable laws of the United States of America and international copyright laws.</p>
              </section>
              <hr />
              <section>
                <h4 className="title9">TRADEMARKS</h4>
                <p>  KLOXET, and other marks indicated on our site are trademarks or registered trademarks of KLOXET Group, LLC in the United States of America and other countries. KLOXET.COM graphics, logos, page headers, button icons, scripts, and service names are trademarks of and/or are the fully owned intellectual property of KLOXET. The foregoing trademarks and intellectual property may not be used in connection with any product or service that is not KLOXET.COM's, in any manner that is likely to cause confusion among customers or in any manner that disparages or discredits KLOXET.COM. All other trademarks and intellectual property not owned by KLOXET.COM or its affiliates that appear on the KLOXET.COM site are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by KLOXET.COM </p>
              </section>
              <hr />
              <section>
                <h4 className="title9">LICENSE AND SITE ACCESS</h4>
                <p>  Except as otherwise provided herein, use of the KLOXET.COM Services does not grant you a license to any materials, content, or features you may access on the Sites or through the KLOXET.COM Services. You may not modify, lease, loan, sell distribute, or create derivative works of such materials and content, features or materials, in whole or in part. You may not download (other than page caching) or save a copy of any of the materials and content or screens for any purpose without the express written consent of KLOXET.COM. Any resale or commercial use of the Sites or its contents is strictly prohibited. Any collection and use of any product listings, descriptions, or prices, downloading or copying of account information for the benefit of another merchant, or any use of data mining, robots, or similar data-gathering and extraction tools is strictly prohibited.<br />
                  You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of KLOXET.COM without express written consent. You may not use any meta tags or any other "hidden text" utilizing KLOXET's name or trademarks without the express written consent of KLOXET.COM. Any unauthorized use terminates the permission or license granted by KLOXET.COM. You are granted a limited, revocable, and nonexclusive right to create a hyperlink to the kloxet.com's home page, so long as the link does not portray KLOXET.COM or our products or services in a false, misleading, derogatory, or otherwise offensive matter. You may not use any KLOXET.COM logos or other proprietary graphic or trademark as part of the link without express written permission.</p>
                  </section>
              <hr />
              <section>
                <h4 className="title9">INTERNATIONAL SITE ACCESS</h4>
                <p>  This site, www.kloxet.com, can be accessed from countries other than the United States and Canada. KLOXET.COM may offer products or references to products that are not available outside of the United States and Canada. Any such products or references to products do not imply that such products will be made available outside the United States and Canada. If you access and use www.KLOXET.COM outside the United States and Canada you are responsible for complying with your local laws and regulations. CANADIAN CUSTOMER please be aware that there is a standard USD $25.00 surcharge for all orders emanating from Canada. UNITED KINGDOM CUSTOMERS please be aware that there is a standard USD $30.00 surcharge for all orders emanating from United Kingdom.</p>
              </section>
              <hr />
              <section>
                <h4 className="title9">RISK OF LOSS</h4>
                <p>  All items purchased from KLOXET.COM are made pursuant to a shipment contract. This means that the risk of loss and title for such items passes to you upon our delivery to the carrier.</p>
              </section>
              <hr />
              <section>
                <h4 className="title9">PRODUCT DESCRIPTIONS</h4>
                <p>  KLOXET.COM has made every effort to display as accurately as possible the colors of our products that appear on the website. However, as the actual colors you see will depend on your monitor, we cannot guarantee that your monitor's display of any color will accurately reflect the color of the product on delivery.<br />
                  <br />
                  All sizes and measurements are approximate and allow for a compensated margin of error, however we do make every effort to ensure they are as accurate as possible. We will take all reasonable care to ensure that all details, descriptions and prices of products appearing on the website are correct at the time when the relevant information was entered onto the system. We reserve the right to refuse orders where product information has been incorrectly published, including prices and promotions.
              <br />
                KLOXET.COM attempts to be as accurate as possible. However, KLOXET.COM does not warrant that product descriptions or other content of the www.KLOXET.COMwebsite are accurate, complete, reliable, current, or error-free. If a product offered by KLOXET.COM is not as described, please contact our customer service department at SERVICES@KLOXET.COM</p>
              </section>
              <hr/>
              <section>
                <h4 className="title9">PROHIBITED USES</h4>
                <p> Any and all KLOXET.COM Services may be used for lawful purposes only and are available for your personal, noncommercial use, which shall be limited to viewing the Sites, purchasing products, providing information to KLOXET.COM, and downloading product information for your personal review. You are responsible for your own communications, including transmission, posting, and uploading of information and are responsible for the consequences of such communications. KLOXET.COM specifically prohibits its user's from any use of the KLOXET.COM services for any of the following:<br />
                  Posting, transmitting, uploading, distributing or publishing any content that is libelous, defamatory, blasphemous, fraudulent, invasive of another's privacy, tortuous, obscene, pornographic, abusive, infringing or otherwise illegal, as determined in the sole discretion of KLOXET.COM.</p><br />
                <li>Creating multiple for the same user;</li>
                <li>Creating fraudulent accounts;</li>
                <li>Engaging in conduct that would constitute a criminal offense, give rise to civil liability, or otherwise violate any city, state, national, or international law or regulation;</li>
                <li>Communicating, transmitting, or posting material that is infringing of a third party's intellectual property, privacy, or publicity right;</li>
                <li>Attempting to interfere in any way with the Sites' network security, or attempting to use this Sites' services to gain unauthorized access to any other accounts or computer system.</li>
                <li>You agree to comply with all other restrictions applicable local, provincial, federal and international laws, regulations and treaties while using this site. In addition, while using the website in accordance with these terms as modified from time to time, you agree to comply with generally accepted internet standards and shall refrain from any abusive use of the Sites.</li>
              </section>
              <hr />
              <section>
                <h4 className="title9">USER CONTENT</h4>
                <p> Any and all content, comments, feedback, suggestions, ideas, concepts, photos, questions or other communications (collectively, 'User Content') that you submit or post through any KLOXET.COM Services or channels shall be deemed non-confidential and non-proprietary. By submitting or posting any User Content, you grant to KLOXET.COM and its affiliates a perpetual, irrevocable, royalty-free, worldwide, sublicensable and transferable license to copy, publish, translate, modify, create derivative works form, distribute, reproduce, display, or use the User Content in any commercial or non-commercial manner whatsoever, including but not limited to developing, manufacturing, and marketing products that incorporate or otherwise rely upon such information. KLOXET.COM shall have no obligation to compensate you for submitting User Content, or respond to any User Content. KLOXET.COM retains the right, in its sole discretion and without prior notice, to remove, revise, or refuse to post any User Content for any reason or no reason.<br />
                    By connecting to KLOXET.COM with a third-party service (i.e. Facebook or Instagram), you give us permission to access and use your information from that service as permitted by that service, and to store your log-in credentials for that service. You agree that by KLOXET.COM is not responsible for any content or information related to your account once it is shared and posted on Facebook, Instagram, Twitter, or any other third-party service.<br />
                    By submitting User Content, you represent and warrant that the User Content does not (i) contain false or misleading information, (ii) infringe on the intellectual property rights of any third party, (iii) contain any libelous, defamatory, obscene, offensive, threatening, or otherwise harassing content, (iv) contain any addresses, email addresses phone numbers or any contact information, or (v) contain computer viruses or other harmful files. You are solely responsible for the User Content and you hereby agree to indemnify and hold KLOXET.COM and its employees, agents, and affiliates harmless from any and all damages, claims, expenses, costs, or fees arising from or in connection with a breach of any of the foregoing representations or your violation of any law or rights of a third party.
                </p>
                <br />
                <p>DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY</p>
                <div className="notes">
                    <h5>  THE KLOXET.COM SITE IS PROVIDED BY KLOXET ON AN "AS IS" AND "AS AVAILABLE" BASIS. KLOXET.COM MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THIS SITE OR THE INFORMATION, CONTENT, MATERIALS, OR PRODUCTS INCLUDED ON THIS SITE. YOU EXPRESSLY AGREE THAT YOUR USE OF THIS SITE IS AT YOUR SOLE RISK.<br/>

                    TO THE FULL EXTENT PERMISSIBLE BY APPLICABLE LAW, KLOXET.COM DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. KLOXET.COM DOES NOT WARRANT THAT THE KLOXET.COMWEBSITE, ITS SERVERS, OR E-MAILS SENT FROM KLOXET OR KLOXET.COMARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. KLOXET.COM, ITS PARTNERS, AFFILIATES AND SUPPLIERS AND EACH OF THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, CONSULTANTS, AGENTS, REPRESENTATIVES AND SUPPLIERS WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF THE WWW.KLOXET.COMWEBSITE, OR THE RELATED SERVICE, INCLUDING, BUT NOT LIMITED TO, DIRECT, INDIRECT, INCIDENTAL, PUNITIVE (INCLUDING, WITHOUT LIMITATION, THOSE DAMAGES RESULTING FROMLOST PROFITS, LOST DATA OR BUSINESS INTERRUPTION), AND CONSEQUENTIAL DAMAGES.<br/>

                    THE LAWS OF CERTAIN JURISDICTIONS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR LIMITATIONS MIGHT NOT APPLY TO YOU, AND YOU MIGHT HAVE ADDITIONAL RIGHTS.</h5><br/>
                </div>
              </section>
              <hr/>
              <section>
                <h4 className="title9">LINKS TO OTHER WEBSITES</h4>
                <p>  Links to third party Websites on this site are provided solely as a convenience to you. If you use these links, a new browser will be lodged to access linked Websites. KLOXET.COM has not reviewed these third party Websites and does not control and is not responsible for any of these Websites or their content. KLOXET.COM does not endorse or make any representations about them, or any information, or other products or materials found there, or any results that may be obtained from using them. If you decide to access any of the third party Websites linked to this site, you do this entirely at your own risks.</p>
              </section>
              <hr/>
              <section>
                <h4 className="title9">TERMINATION OF ACCOUNT</h4>
                <p>  You acknowledge and agree that KLOXET.COM, in its sole and absolute discretion may, without notice to you, suspend or terminate your use of, or access to the Website, for any services and remove and discard any related materials for any reason, including where KLOXET believes that you have violated any of these terms, and at any time without notice. You agree that KLOXET (including its parents, subsidiaries, affiliates, directors, officers, agents, and representatives) shall not be liable to you or to any person as a result of any such suspension or termination. If you are unsatisfied with any of these terms, please discontinue using this Website. Conversely, you are free to cancel your membership to the KLOXET.COM at any time. In order to avoid incurring a charge of the membership fee for that month, you must cancel on or before the 10th of the month. If you cancel your account after the 10th of the month, you will be charged the membership fee for that month and your cancellation shall not take effect until the month following the month in which such cancellation occurs.</p>
              </section>
              <hr/>
              <section>
                <h4 className="title9">DISCLAIMER</h4>
                <p>  You acknowledge that you are using this site including its materials at your own risks. KLOXET.COM and its partners, affiliates and suppliers do not guarantee error-free or uninterrupted operations of this site. The products, services and information provided on this site are provided 'as is' without any warranties of any kind including warranties of merchantable quality, fitness for particular purpose, or non-infringement of intellectual property. KLOXET and its suppliers do not warrant the accuracy and completeness of materials available on or throughout this site. The materials on this site may be out of date, and KLOXET makes no commitment to update the materials. Information published on this site may refer to products, programs or services that are not available on your jurisdiction. Applicable law may not allow the exclusion of implied warranties, so the above exclusions may not apply to you.</p>
              </section>
              <hr />
              <section>
                <h4 className="title9">INDEMNIFICATION</h4>
                <p>  You shall indemnify, defend, and forever hold harmless KLOXET, KLOXET.COM, and their partners, affiliates, parents, subsidiaries, and suppliers and each of their respective directors, officers, employees, consultants, and agents from and against any and all claims, demands, actions, suits, losses, costs, charges, expenses, damages and liabilities (including reasonable attorney's fees) which arise out of, may be incurred by reason of, or are in connection with your use of the Sites or any related KLOXET.COM Service, including but not limited to information or content submitted, transmitted, or otherwise made available on or through the Sites or any breach or attempted breach of these Terms of Service.</p>
              </section>
              <hr />
              <section>
                <h4 className="title9">GOVERNING LAW</h4>
                <p>  By visiting the KLOXET.COM website, you agree that these Terms of Use and any action, controversy, claim, or dispute arising out of or relating in any way to your use of the KLOXET.COM Services shall be governed by United States federal law, and (to the extent not inconsistent with or pre-empted by federal law) the laws of California, without regard to conflict of laws principles.<br />       
                     Notice and Informal Dispute Resolution. Before either party may seek arbitration, the party must first send to the other party a written Notice of Dispute ('Notice') describing the nature and basis of the claim or dispute, and the requested relief. A Notice to KLOXET.COM. If the parties do not resolve the claim or dispute within sixty (60) days after the Notice is received, either party may begin an arbitration proceeding.<br/>
                     Arbitration. Any claims arising out of, relating to, or connected with these Terms of Service and use of KLOXET.COM Services that cannot be resolved informally must be asserted individually in binding arbitration administered by the American Arbitration Association ('AAA') in accordance with its Commercial Arbitration Terms and the AAA Supplementary Procedures for Consumer-Related Disputes (including, without limitation, utilizing desk, phone or video conference proceedings where appropriate and permitted to mitigate costs of travel). The arbitration shall be conducted by a single, neutral arbitrator. The arbitrator shall not conduct any form of class or collective arbitration nor join or consolidate claims by or for individuals. The arbitrator, and not any federal, state, or local court or agency, shall have exclusive authority to resolve any dispute relating to the interpretation, applicability, enforceability or formation of these Terms, including, any claim that all or any part of these Terms is void or voidable or a particular claim is subject to arbitration. Judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. Unless otherwise agreed to, all arbitration proceedings will be held in English. This Arbitration Agreement applies to you and us, and to any subsidiaries, affiliates, agents, employees, predecessors in interest, successors, assigns, suppliers and licensors as well as all authorized or unauthorized users or beneficiaries of the Services.
                <br/>
                  Award. For matters where the relief sought is over $5,000, the arbitrator's decision will include the essential findings and conclusions upon which the arbitrator based the award. The arbitrator will decide the substance of all claims in accordance with applicable law, including recognized principles of equity, and will honor all claims of privilege recognized by law. The arbitrator's award of damages must be consistent with the terms of the 'Limitation of Liability' section as to the types and the amounts of damages for which a party may be held liable. The arbitrator shall not be bound by rulings in prior arbitrations involving different users, but is bound by rulings in prior arbitrations involving the same KLOXET.COM user to the extent required by applicable law. The arbitrator's award shall be final and binding and judgment on the award rendered by the arbitrator may be entered in any court having jurisdiction thereof. THE ARBITRATOR MAY AWARD RELIEF (INCLUDING MONETARY, INJUNCTIVE, AND DECLARATORY RELIEF) ONLY IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF AND ONLY TO THE EXTENT NECESSARY TO PROVIDE RELIEF NECESSITATED BY THAT PARTY'S INDIVIDUAL CLAIM(S). ANY RELIEF AWARDED CANNOT AFFECT OTHER USERS.
                <br/>
                  Non-Appearance Based Arbitration. A non-appearance based arbitration will be conducted by telephone, online, and/or based solely on written submissions. The specific manner will be chosen by the party initiating the arbitration. The arbitration will not involve any personal appearance by the parties or witnesses, unless otherwise agreed by the parties.
                <br/>
                  If either party pursues arbitration, the arbitration action must be initiated and/or demanded within the statute of limitations (i.e., the legal deadline for filing a claim) and within any deadline imposed under the Arbitration Rules for the pertinent claim.
                <br/>
                  Authority of Arbitrator. If arbitration is initiated, the arbitrator will decide the rights and liabilities, if any, of the parties, and the dispute will not be consolidated with any other matters or joined with any other cases or parties. The arbitrator will have the authority to grant motions dispositive of all or part of any claim. The arbitrator will have the authority to award monetary damages, and to grant any non-monetary remedy or relief available to an individual under applicable law, the Arbitration Rules, and the Terms of Use. The arbitrator will issue a written award and statement of decision describing the essential findings and conclusions on which the award is based, including the calculation of any damages awarded. The arbitrator has the same authority to award relief on an individual basis that a judge in a court of law would have. The award of the arbitrator is final and binding upon the parties.
                <br/>
                    Waiver of Trial by Jury. THE PARTIES HEREBY WAIVE THEIR CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY, instead electing that all claims and disputes will be resolved by arbitration under this Arbitration Agreement. Arbitration procedures are typically more limited, more efficient and less costly than rules applicable in a court and are subject to very limited review by a court. In the event any litigation should arise between the parties in any state or federal court in a suit to vacate or enforce an arbitration award or otherwise, THE PARTIES WAIVE ALL RIGHTS TO A JURY TRIAL, instead electing that the dispute be resolved by a judge.
                <br/>
                  Waiver of Class or Consolidated Actions. ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT MUST BE ARBITRATED OR LITIGATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS BASIS, AND CLAIMS OF MORE THAN ONE CUSTOMER OR USER CANNOT BE ARBITRATED OR LITIGATED JOINTLY OR CONSOLIDATED WITH THOSE OF ANY OTHER CUSTOMER OR USER.
                <br/>
                  Confidentiality. All aspects of the arbitration proceeding, including but not limited to the award of the arbitrator and compliance therewith, will be strictly confidential. The parties agree to maintain confidentiality unless otherwise required by law. This paragraph will not prevent a party from submitting to a court of law any information necessary to enforce this Agreement, to enforce an arbitration award, or to seek injunctive or equitable relief.
                <br/>
                  Severability. If any part or parts of this Arbitration Agreement are found under the law to be invalid or unenforceable by a court of competent jurisdiction, then such specific part or parts will be of no force and effect and will be severed and the remainder of this Arbitration Agreement will continue in full force and effect.
                <br/>
                    Opt-Out. If you are a new KLOXET.COM user, you may elect to opt out (exclude yourself) from the final, binding arbitration procedure and the class actions waiver specified in these Terms of Service by submitting an Opt-Out Notice to KLOXET.COM directed to Arbitration Opt Out. The opt-out notice must be received no later than thirty (30) days after the date you open an account and accept these terms for the first time. If you are not a new KLOXET.COM User, you have until thirty (30) days after the posting of the new terms to submit an arbitration opt-out notice.
                <br/>
                  Survival. This Arbitration Agreement will survive the termination of your relationship with us.
                <br/>
                  Small Claims Court. Notwithstanding the foregoing, either party may bring an individual action in small claims court.
                <br/>
                  Claims Not Subject to Arbitration. Notwithstanding the foregoing, claims of defamation, violation of the Computer Fraud and Abuse Act, and infringement or misappropriation of the other party's patent, copyright, trademark or trade secrets will not be subject to this Arbitration Agreement.
                <br/>
                  Courts. In any circumstances where the foregoing Arbitration Agreement permits the parties to litigate in court, the parties hereby agree to submit to the personal jurisdiction of the courts located within Florida for such purpose and agree that the laws of the State of Florida will govern the litigated dispute.</p>
              </section>
              <hr/>
              <section>
                <h4 className="title9">REVISION OF TERMS</h4>
                <p>  KLOXET.COM may revise these terms at any time by updating this posting. You should visit this page from time to time to review the then-current terms because they are binding on you and your continued use of this site signifies your acceptance of these revised terms.</p>
              </section>
              <hr/>
              <section>
                <h4 className="title9">ENTIRE AGREEMENT</h4>
                <p>   These Terms of Service together with KLOXET.COM's Privacy Policy constitute the complete and entire agreement between you and KLOXET.COM pertaining to the use of the Sites and supersede any prior agreements, whether written or oral.</p>
              </section>
              <hr/>
              <section>
                <h4 className="title9">WAIVER</h4>
                <p>   KLOXET will not be considered to have waived any of its rights or remedies described in these terms unless the waiver is in writing and signed by KLOXET. No delay or omission by KLOXET in exercising its rights or remedies will impair or be considered as a waiver of its rights to enforce such rights at any time.</p>
              </section>
              <hr/>
              <section>
                <h4 className="title9">INTERNATIONAL CUSTOMERS</h4>
                <p> Please note that currently all prices quoted on this site are listed in U.S. Dollars, and that all Member packages will be billed as such. Accordingly, a Member's bank, credit card company, or other financial institution may charge a Member certain transaction fee(s) related to currency conversion and such transaction fee(s) may appear as one (1) singular charge along with your monthly membership fee. KLOXET Group has no control over such fees, and thus, we shall not be responsible for, and hereby expressly disclaim responsibility for, any such transaction fees.<br />
                    Import duties, customs charges, and related taxes and fees are not included in the price or shipping costs, and any such duties, charges, taxes, and/or fees are the Member's responsibility. Check with your country's customs office to determine what these additional charges may be in advance of your purchase.
                </p>
              </section>
              <hr/>
              <section>
                <h2 className="title9">Supplemental UK Terms</h2> 
                <h4 className="title9">PLEASE READ THESE TERMS CAREFULLY BEFORE COMPLETING A PURCHASE</h4><br/>

                <p>  The Terms and Conditions, together with our Privacy Policy and Terms of Website Use, are a legal agreement which sets out terms on which we sell the Products to you and govern all associated Contracts. Please read the Terms and Conditions carefully and make sure that you understand them before ordering any Products from our Website and/or entering into any Contract. Please note that before placing an order you will be asked to agree to the Terms and Conditions. If you do not accept the Terms and Conditions, you will not be able to order any Products from our Website. You should print a copy of the Terms and Conditions or save them to your computer for future reference. We may amend these Terms and Conditions from time to time as set out in clause 7. Every time you wish to order Products or enter into a Contract, please check these Terms and Conditions to ensure you understand the terms which will apply to that transaction. By accepting these Terms and Conditions you warrant that you are an individual aged eighteen or over and that you will be purchasing Products from KLOXET as a Consumer</p>.<br/>
                <h3 className="subtitle">1. DEFINITIONS</h3>
                  <p> 1.1 In this Agreement the following definitions will apply (except where the context otherwise requires):<br/>
                      'Business Day' means a day which is not a Saturday or Sunday, and which is not a public or bank holiday in the UK.<br/>
                      'Consumer' means an individual who buys Products from us for his/her own personal use.<br/>
                      'Contract' means an agreement made under these Terms and Conditions for the regular delivery of Products by KLOXET in return for monthly payments of the Price by you.<br/>
                      'Delivery' means a delivery of Products to you provided by KLOXET under the terms of a Contract.<br/>
                      'KLOXET' 'we', 'us', 'our', 'ours' means the company KLOXET Group LLC, a company incorporated in the State of Florida.<br/>
                      'Force Majeure Event' means any act or event beyond our reasonable control, including without limitation strikes, lock-outs or other industrial action by third parties, civil commotion, riot, invasion, terrorist attack or threat of terrorist attack, war (whether declared or not) or threat or preparation for war, fire, explosion, storm, flood, earthquake, subsidence, epidemic or other natural disaster, or failure of public or private telecommunications networks or impossibility of the use of railways, shipping, aircraft, motor transport or other means of public or private transport.<br/>
                      'Month' means a calendar month and 'monthly' shall be construed accordingly.<br/>
                      'Price' means the sum to be paid in advance for a monthly Delivery, the value of which shall be published on the Website.<br/>
                      'Product' means an item of clothing advertised on the Website or provided to the Customer in a Delivery.<br/>
                      'Terms and Conditions' means the contents of this agreement, as well as the Privacy Policy and Terms of Website Use.<br/>
                      'VAT' means value added tax charged on goods in the United Kingdom.<br/>
                      'Website' means our website https://www.kloxet.com. <br/>
                      'you' and 'yours' refer to you, the individual entering into this agreement with KLOXET.
                    </p> 
                  <br/>
                <h3 className="subtitle">2. CONTACTING KLOXET AND CANCELLATION OF CONTRACTS</h3>

                  <p> 2.1 To cancel a Contract in accordance with your legal right to do so as set out in clause 8, you need to let us know that you have decided to cancel. The easiest way to do this is to complete the [cancellation form] on our Website. If you use this method we will e-mail you to confirm we have received your cancellation. [You can also e-mail us at SERVICEs@KLOXET.COMor contact our Customer Services.. If you are emailing us or writing to us please include details of your order and order number to help us to identify it.<br/>
                      2.2 If you wish to contact us for any reason, including because you have any complaints, you can contact us by e-mailing us at SERVICES@KLOXET.COM<br/>
                      2.3 If we have to contact you or give you notice in writing, we may do so by e-mail, via the Website, or by post to the address you provide to us via your account on the Website. By accepting these Terms and Conditions you agree that KLOXET may contact you via any of the methods set out above and that all such methods shall be considered to be 'written notice' for the purposes of these Terms and Conditions and their subject matter.</p><br/>
                  <h3 className="subtitle">3. OUR PRODUCTS</h3>

                  <p> 3.1 When you enter into a Contract to receive Products from us you are agreeing to receive regular instalments of Products which have been personalized based upon your specific style profile, as set up by you on the Website. In entering into a Contract you agree to receive regular, monthly Deliveries of Products selected for you by KLOXET. You accept that KLOXET makes no warranty that any specific item or combination of items will be provided in any particular Delivery or Deliveries.<br/>
                      3.2 Any images of Products on our Website are provided for illustrative purposes only. Although we have made every effort to display the colours and finish of all Products accurately, we cannot guarantee that your computer's display of the colours or finish accurately reflects the colour or finish of any Products you will receive. Products may vary slightly from images of them displayed on your computer.<br/>
                      3.3 Although we have made every effort to be as accurate as possible, all sizes, weights, capacities, dimensions and measurements, and descriptions of Product specifications are provided purely for your assistance.<br/>
                      3.4 The packaging of Products may vary from that shown on the Website.
                  </p>
                  <br />
                  <h3 className="subtitle">4. USE OF THE WEBSITE AND USE OF PERSONAL INFORMATION</h3>

                  <p> You agree that your use of the Website is governed by the Terms of Website Use and Privacy Policy. Please take the time to read these, as they include important terms which apply to you.</p><br/>
                  <h3 className="subtitle">5. ENTERING INTO A CONTRACT</h3>
                  <p> 5.1 By entering into a Contract via the Website you agree to pay the Price monthly to KLOXET in consideration of which you will receive a monthly Delivery. Your right to cancel your subscription is set out in clauses 2, 6 and 8.<br/>
                      5.2 The Price for Deliveries will be specified on the Website at the time that you enter into the Contract. Please see clause 10.2 for information on what will happen if the Price is changed during a Contract.<br/>
                      5.3 Our Website will guide you through the steps you need to take to place an order with us and to begin receiving regular Deliveries from us. Our order process allows you to customise your style profile and to check and amend any errors before submitting your order to us. Please take the time to read and check your order at each stage of the order process.<br/>
                      5.4 After you place an order, you will receive an e-mail from us acknowledging that we have received your order. However, please note that this does not mean that your order has been accepted or that a Contract has been formed. Our acceptance of your order will take place as described in this clause 5.<br/>
                      5.5 We will confirm our acceptance of your order by sending you an e-mail confirming that the first shipment of Products has been dispatched to you (the 'Dispatch Confirmation'). The Contract between us will only be formed when we send you the Dispatch Confirmation.<br/>
                      5.6 If we are unable to accept your order we will inform you of this by e-mail and we will not process your order. If you have already paid for Products before we send this e-mail, we will refund you the full amount including any delivery costs charged as soon as possible.</p><br/>
                  <h3 className="subtitle">6. TERM AND TEMINATION OF CONTRACTS</h3>

                  <p> 6.1 After you receive your first Delivery, KLOXET will charge you the Price for subsequent scheduled Deliveries on a monthly basis. The Contract will run until it is terminated by either party as per the terms of this agreement.<br/>
                      6.2 In addition to your right to cancel a Contract, as detailed in clauses 2 and 8, you may elect to terminate a Contract by providing us with 30 days' notice. Notice of your intention to terminate a Contract and to cease receiving Deliveries in this way must be provided in writing to the physical or e-mail address set out in clause 2.1, or communicated verbally via the telephone number set out in that same clause. KLOXET reserves the right to decline to accept notifications of termination provided in any other manner or format.<br/>
                      6.3 By entering into a Contract via the Website you consent to KLOXET retaining your credit or debit card details (or the details of any other method that you may use to pay for Products) in order to enable us to automatically charge you for monthly payments.
                      6.4 KLOXET reserves the right to terminate any Contract at any time and for any reason. In the event that a Contract with You is cancelled in this way then you will be notified by e-mail and any payments which you have made in respect of Products which have not yet been dispatched by KLOXET will be refunded.</p><br/>
                  <h3 className="subtitle">7. OUR RIGHT TO VARY THESE TERMS</h3>

                  <p> 7.1 We reserve the right to amend these Terms and Conditions from time to time. New versions of the Terms and Conditions will be effective from the date on which they are posted on the Website.<br/>
                      7.2 Updated Terms and Conditions will apply to all Products and Deliveries which you order or receive from us after the date on which the updated Terms and Conditions appear on the Website.<br/>
                      7.3 Notwithstanding clauses 7.1 and 7.2, we may revise these Terms and Conditions as they apply to your order where we are required to do so by relevant laws and regulatory requirements.<br/>
                      7.4 If we have to significantly revise these Terms and Conditions as they apply to your order or if the Price changes, we will contact you to give you reasonable advance notice of the changes and let you know how to terminate the Contract if you are not happy with the changes. If you opt to terminate, you will cease to receive future Deliveries but will not, unless otherwise specified in this agreement or by a relevant statute, be entitled to a refund for any Products which you have already received from us.</p><br/>
                  <h3 className="subtitle">8. YOUR RIGHTS OF RETURN AND REFUND</h3>

                  <p> 8.1 If you are a Consumer, you have a legal right to cancel a Contract during the period set out below in clause 8.2. This means that during the relevant period if you change your mind or decide for any other reason that you do not want to keep the Products that you have received, or to keep receiving Deliveries, you can notify us of your decision to cancel the Contract and receive a refund.<br/>
                      8.2 Your legal right to cancel a Contract starts from the date of the Dispatch Confirmation which is when the Contract between us is formed. Your deadline for cancelling the Contract is fourteen days from the date on which you receive your first Delivery of Products.</p><br/>
                  <p> 8.3 To cancel a Contract, you need to inform us that you have decided to cancel. The easiest way to do this is to complete the cancellation form. If you use this method we will e-mail you to confirm we have received your cancellation.<br/>
                      8.4 If you cancel your Contract we will:
                      <br/>
                      (a) refund you the price that you paid for the Products. However, please note that we are permitted by law to reduce your refund to reflect any reduction in the value of the Products if this has been caused by your handling them in a way which would not be permitted in a shop. If we refund you the price paid before we are able to inspect the Products and later discover you have handled them in an unacceptable way, you must pay us an amount equal to the diminution in their value that your handling of them has caused.<br/>
                      (b) refund any delivery costs you have paid, although, as permitted by law, the maximum refund will be the costs of delivery by the least expensive delivery method we offer (provided that this is a common and generally acceptable method).<br/>
                      (c) make any refunds due to you as soon as possible and in any event within the deadlines indicated below:<br/>
                      (i) if you have received Products and we have not offered to collect them from you: 14 days after the day on which we receive the Products back from you or, if earlier, the day on which you provide us with evidence that you have sent the Products back to us;<br/>
                      (ii) if you have not received Products or you have received them and we have offered to collect them from you: 14 days after you inform us of your decision to cancel the Contract.<br/>
                      8.5 If you return Products to us under this clause 8 because they are faulty or mis-described, we will refund the price of the Products in full, together with any applicable delivery charges, and any reasonable costs you incur in returning the Products to us.<br/>
                      8.6 We will refund you on the credit card or debit card used by you to pay. If you used vouchers or a similar promotional method to pay for the Product we reserve the right to refund you in kind.<br/>
                      8.7 If a Product has been delivered to you before you decide to cancel the Contract you must return it to us without undue delay and in any event not later than 14 days after the day on which you inform us that you wish to cancel the Contract. You can return goods to us at our returns address, which is listed in clause 2.1.<br/>
                      8.8 In the event that a Product which you receive from KLOXET is the wrong size and /or does not fit you may return it to KLOXET within fourteen days of receipt. Items returned in this fashion must be unworn and undamaged. On receipt of an item returned under this clause 8.8 KLOXET shall either supply you with a replacement item in a different size, or discount the Price of your next Delivery. While KLOXET endeavors to provide replacement items wherever possible, KLOXET shall have sole discretion in deciding whether to supply you with a replacement or a reduction in the Price of your next instalment of Products.<br/>
                      8.9 Because you are a Consumer, we are under a legal duty to supply Products that are in conformity with these Terms and Conditions. As a Consumer, you have legal rights in relation to Products that are faulty or not as described. Your statutory rights are not affected by these Terms and Conditions and in the event of any conflict your legal rights as a Consumer prevail.</p><br/>
                  <h3 className="subtitle">9. DELIVERY</h3>
                  <p> 9.1 We will deliver Products to the UK address of which you notify us when you subscribe to receive Deliveries, or to any updated UK address of which you may notify us via the Website.<br/>
                      9.2 All Products will be your responsibility from the time that they are delivered to you.<br/>
                      9.3 You shall own Products once we have received a payment from you which covers the Delivery in which those Products are provided to you, and once that Delivery has been physically received by you. You will cease to own the Products in the event of cancellation of a Contract.</p><br/>
                  <h3 className="subtitle">10. PRICE OF PRODUCTS AND DELIVERY CHARGES.</h3>

                  <p> 10.1 Subject to clause 10.2, the Price will be as quoted on our Website at the time you submit your order.<br/>
                      10.2 The Price for Deliveries of Products may change from time to time, any changes will apply to all Deliveries of Products for which you are charged after the date on which the change takes place. Please see clause 7.4 for information on how we will communicate with you to notify you if the Price changes.<br/>
                      10.3 Without prejudice to clause 11.3 all prices quoted on the Website include VAT (where applicable) at the applicable then current rate chargeable in the UK. If the rate of VAT changes during a Contract, we will adjust the VAT you pay, unless you have already paid for a Delivery in full before the change in the rate of VAT takes effect.</p><br/>
                  <h3 className="subtitle">11. HOW TO PAY</h3>

                  <p> 11.1 You can only pay for Products using a debit card or credit card specified on the Website. The list of cards which we accept will be listed after you have confirmed your order and proceeded to provide your payment details.</p><br/>
                      11.2 We reserve the right to charge you for any credit card fees or charges which we may incur as a result of processing your order.<br/>
                      11.3 Payment for Deliveries of Products and all applicable delivery charges shall be in advance. <p></p><br/>
                  <h3 className="subtitle">12. LIMITATION OF LIABILITY</h3>

                  <p> 12.1 If we fail to comply with these Terms and Conditions, we are responsible for loss or damage you suffer that is a foreseeable result of our breach of these Terms and Conditions or our negligence, but we are not responsible for any loss or damage that is not foreseeable. Loss or damage is foreseeable if it is an obvious consequence of our breach or if it was contemplated by you and us at the time we entered into this Contract.<br/>
                      12.2 We only supply Products to you for domestic and private use. You agree not to use the Products for any commercial or business purposes, or to resell or redistribute the Products. You agree that we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity that may arise as a result of your use of the Products.<br/>
                      12.3 We do not in any way exclude or limit our liability for:<br/>
                      (a) death or personal injury caused by our negligence;<br/>
                      (b) fraud or fraudulent misrepresentation;<br/>
                      (c) any breach of the terms implied by section 12 of the Sale of Goods Act 1979 (title and quiet possession);<br/>
                      (d) any breach of the terms implied by section 13 to 15 of the Sale of Goods Act 1979 (description, satisfactory quality, fitness for purpose and samples); <br/>
                      (e) defective products under the Consumer Protection Act 1987.</p><br/>
                  <h3 className="subtitle">13. EVENTS OUTSIDE OUR CONTROL</h3>

                  <p> 13.1 We will not be liable or responsible for any failure to perform, or delay in performance of, any of our obligations under a Contract that is caused by a Force Majeure Event.<br/>
                      13.2 If a Force Majeure Event takes place that affects the performance of our obligations under a contract:<br/>
                      (a) we will contact you as soon as reasonably possible to notify you; and<br/>
                      (b) our obligations under a Contract will be suspended and the time for performance of our obligations will be extended for the duration of the Force Majeure Event. Where the Force Majeure Event affects our delivery of Products to you, we will attempt to arrange a new delivery date with you after the Force Majeure Event is over.<br/>
                      13.3 You may cancel a Contract affected by a Force Majeure Event which has continued for more than 30 days. To cancel please contact us using the details provided in clause 2.</p><br/>
                  <h3 className="subtitle">14. COMMUNICATIONS BETWEEN US</h3>

                  <p> 14.1 The term "in writing" shall include communications sent by e-mail, but not other electronic written communications such as instant messenger applications, text message, 'Twitter', or any other similar mediums.</p><br/>
                  <h3 className="subtitle">15. OTHER IMPORTANT TERMS</h3>

                  <p> 15.1 We may transfer our rights and obligations under a Contract to another organisation, but this will not affect your rights or our obligations under these Terms and Conditions.<br/>
                      15.2 You may only transfer your rights or your obligations under these Terms to another person if we agree in writing.<br/>
                      15.3 Where the Terms and Conditions, or any part of them, are translated into any language other than English, then the terms of the original English version shall prevail over the terms of the translated version irrespective of the language of the version of the Terms and Conditions agreed by either party.<br/>
                      15.4 This Contract is between you and us. No other person shall have any rights to enforce any of its terms, whether under the Contracts (Rights of Third Parties) Act 1999 or otherwise.<br/>
                      15.5 Each of the paragraphs of these Terms and Conditions operates separately. If any court or relevant authority decides that any of them are unlawful or unenforceable, the remaining paragraphs will remain in full force and effect.<br/>
                      15.6 If we fail to insist that you perform any of your obligations under these Terms and Conditions, or if we do not enforce our rights against you, or if we delay in doing so, that will not mean that we have waived our rights against you and will not mean that you do not have to comply with those obligations. If we do waive a default by you, we will only do so in writing, and that will not mean that we will automatically waive any later default by you.<br/>
                      15.7 These Terms and Conditions are governed by English law. This means a Contract for the purchase of Products through our Website and any dispute or claim arising out of or in connection with it will be governed by English law. You and we both agree that the courts of England and Wales will have non-exclusive jurisdiction. However, if you are a resident of Northern Ireland you may also bring proceedings in Northern Ireland, and if you are a resident of Scotland, you may also bring proceedings in Scotland.</p><br/>
              </section> 
              <section>
                <h4 className="title9"> COMMUNICATIONS AND NOTICES</h4>
                <p> By accepting the Terms of Website Use you acknowledge that you consent to receive all communications or notices pertaining to the Terms of Website Use by e-mail or via the Website, and that for the purposes of this agreement all such communications from KLOXET to you shall be considered to be written communications. </p><br />
                <h5>Created: August 12th, 2016</h5>
                <h5>Updated: Jan 3rd, 2021</h5>
              </section>
                  
            </div>
            </div>
            </div>
            <Footer />
      </React.Fragment>
    );
  }
}

export default TermsAndCondition;
