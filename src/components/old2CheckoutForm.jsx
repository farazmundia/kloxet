import React, { Component } from "react";
import { injectStripe } from "react-stripe-elements";

import Loading from "./common/loading";

import CCUtil from "../ccutil";
import order from "../services/order";
import auth from "../services/authServices";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stripeButtonInvalid: true,
      cardDetailsTouched: false,
      cardDetailsValid: false,
      cardExpTouched: false,
      cardExpValid: false,
      cvvTouched: false,
      cvvValid: false,
      submitting: false,
      complete: false,
      cardNum: "",
      ccExpiryMonth: "",
      ccExpiryYear: "",
      cvcNum: "",
    };
  }

  handleCardDetailsInput = (event, type, setDirty) => {
    this.setState({ [type]: event.currentTarget.value, [setDirty]: true });
  };

  validateCardNum = (ev) => {
    if (CCUtil.validateCreditCardNumber(this.state.cardNum)) {
      this.setState({ cardDetailsValid: true });
    } else {
      this.setState({ cardDetailsValid: false });
    }
  };

  validateCardExpiry = (ev) => {
    if (
      CCUtil.validateCardExpiry(
        this.state.ccExpiryMonth,
        this.state.ccExpiryYear
      )
    ) {
      this.setState({ cardExpValid: true });
    } else {
      this.setState({ cardExpValid: false });
    }
  };

  validateCVVNum = (ev) => {
    if (CCUtil.validateCardCVV(this.state.cvcNum)) {
      this.setState({ cvvValid: true });
    } else {
      this.setState({ cvvValid: false });
    }
  };

  payButtonValidation = () => {
    if (
      this.props.formValid === null &&
      this.state.cardDetailsValid &&
      this.state.cardExpValid &&
      this.state.cvvValid &&
      !this.state.submitting
    ) {
      return false;
    } else {
      return true;
    }
  };

  onCheckOut = async () => {
    this.setState({ submitting: true });
    this.props.enableSubmitting();

    console.log('props: ', this.props);

    const { 
      user,
      allData: {
        selectedPlan,
        couponCode,
        promoDiscountAmount,
        finalPaybleAmount,
        couponCodeApplied,
        addressDetails,
      },
      stripe,
    } = this.props;
    const cardDetails = {
      sourceNo: this.state.cardNum,
      sourceExpMonth: this.state.ccExpiryMonth,
      sourceExpYear: this.state.ccExpiryYear,
      sourceCvc: this.state.cvcNum,
    };

    try {
      const { data: orderData } = await order.createOrderSubscription(
        user,
        selectedPlan,
        addressDetails,
        couponCode,
        promoDiscountAmount,
        finalPaybleAmount,
        couponCodeApplied,
        cardDetails
      );
  
      // save orderId in localStorage
      const orderId = orderData._id;
      localStorage.setItem("OID", orderId);

      if (orderId && couponCodeApplied) {
        await order.applyPromoCode(orderId, couponCode);
        await order.updateSubscriptionOrder(orderId);
      }

      window.location.href = "/profile";
    } catch (err) {
      console.error('error: ', err);
    }

    this.setState({ submitting: false });
    this.props.disableSubmitting();
  }

  render() {
    const {
      cardDetailsValid,
      cardDetailsTouched,
      cvvValid,
      cvvTouched,
      cardExpValid,
      cardExpTouched,
    } = this.state;

    return (
      <div className="checkout">        
        <div className="row">
          <div className="form-group col">
            <label htmlFor="cardNum">Card Number</label>
            <input
              type="tel"
              onChange={(event) =>
                this.handleCardDetailsInput(
                  event,
                  "cardNum",
                  "cardDetailsTouched"
                )
              }
              onKeyUp={(event) => this.validateCardNum(event)}
              name="carNum"
              maxLength="16"
              className={
                "form-control" +
                (cardDetailsTouched && !cardDetailsValid ? " is-invalid" : "")
              }
              id="cardNum"
              disabled={this.state.submitting}
              placeholder="1234123412341234"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6 form-group">
            <label htmlFor="ccExpiryMonth">Exp.Month</label>
            <input
              type="tel"
              onChange={(event) =>
                this.handleCardDetailsInput(
                  event,
                  "ccExpiryMonth",
                  "cardExpTouched"
                )
              }
              name="ccExpiryMonth"
              id="ccExpiryMonth"
              maxLength="2"
              className={
                "form-control" +
                (cardExpTouched && !cardExpValid ? " is-invalid" : "")
              }
              disabled={this.state.submitting}
              onKeyUp={(event) => this.validateCardExpiry(event)}
              placeholder="01"
            />
          </div>
          <div className="col-6 form-group">
            <label htmlFor="ccExpiryYear">Exp.Year</label>
            <input
              type="tel"
              onChange={(event) =>
                this.handleCardDetailsInput(
                  event,
                  "ccExpiryYear",
                  "cardExpTouched"
                )
              }
              name="ccExpiryYear"
              id="ccExpiryYear"
              maxLength="4"
              className={
                "form-control" +
                (cardExpTouched && !cardExpValid ? " is-invalid" : "")
              }
              disabled={this.state.submitting}
              onKeyUp={(event) => this.validateCardExpiry(event)}
              placeholder="2023"
            />
            {/* <CardExpiryElement
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
                onReady={handleReady}
                {...createOptions(this.props.fontSize)}
              /> */}
          </div>
        </div>
        <div className="row">
          <div className="col-6 form-group">
            <label htmlFor="cvcNum">Security Code CVC</label>
            {/* <CardCVCElement
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
                onReady={handleReady}
                {...createOptions(this.props.fontSize)}
              /> */}
            <input
              type="tel"
              className={
                "form-control" + (cvvTouched && !cvvValid ? " is-invalid" : "")
              }
              onChange={(event) =>
                this.handleCardDetailsInput(event, "cvcNum", "cvvTouched")
              }
              name="cvcNum"
              maxLength="3"
              id="cvcNum"
              disabled={this.state.submitting}
              onKeyUp={(event) => this.validateCVVNum(event)}
              placeholder="last 3 digits"
            />
          </div>
        </div>
        {this.state.submitting && <Loading />}
        <button
          disabled={this.payButtonValidation() || this.state.submitting}
          onClick={this.onCheckOut}
        >
          Checkout
        </button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
