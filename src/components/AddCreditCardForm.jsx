import React, { Component } from "react";
import Loading from "./common/loading";
import { injectStripe } from "react-stripe-elements";
import CCUtil from "../ccutil";
import auth from "../services/authServices";
import order from "../services/order";

class AddCreditCardForm extends Component {
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
    this.submit = this.submit.bind(this);
  }

  handleCardDetailsInput = (event, type, setDirty) => {
    this.setState({ [type]: event.currentTarget.value, [setDirty]: true });
  };

  validateCardNum = (event) => {
    if (CCUtil.validateCreditCardNumber(this.state.cardNum)) {
      this.setState({ cardDetailsValid: true });
    } else {
      this.setState({ cardDetailsValid: false });
    }
  };
  validateCardExpiry = (event) => {
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

  validateCVVNum = (event) => {
    if (CCUtil.validateCardCVV(this.state.cvcNum)) {
      this.setState({ cvvValid: true });
    } else {
      this.setState({ cvvValid: false });
    }
  };

  payButtonValidation = () => {
    if (
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

  async submit(ev) {
    console.log("submitting");
    this.setState({ submitting: true });
    console.log(this.state.submitting);
    try {
      console.log("Order Details : ", this.props.orderDetails);
      const cardDetails = {
        sourceNo: this.state.cardNum,
        sourceExpMonth: this.state.ccExpiryMonth,
        sourceExpYear: this.state.ccExpiryYear,
        sourceCvc: this.state.cvcNum,
      };
      const { data } = await order.addSource(
        cardDetails,
        this.props.orderDetails
      );
      console.log("add card data : ", data);
      this.setState({ submitting: false });
      window.location.href = "/profile";
    } catch (ex) {
      this.setState({ submitting: false });
      console.log("submit ", ex);
    }
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
            <label htmlFor="cardNum">Card number</label>
            <input
              type="tel"
              onChange={(event) =>
                this.handleCardDetailsInput(
                  event,
                  "cardNum",
                  "cardDetailsTouched"
                )
              }
              onBlur={(event) => this.validateCardNum(event)}
              name="carNum"
              maxLength="16"
              className={
                "form-control" +
                (cardDetailsTouched && !cardDetailsValid ? " is-invalid" : "")
              }
              id="cardNum"
              placeholder="1111 1111 1111 1111"
            />
            <small id="cardHelp" className="form-text text-muted">
              We do not storage your card information in our servers, Payments are processed thru stripe.com.              
            </small>
          </div>
        </div>
        <div className="row">
          <div className="col-4 form-group">
            <label htmlFor="ccExpiryMonth">Month</label>
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
              onBlur={(event) => this.validateCardExpiry(event)}
              placeholder="01"
            />
          </div>
          <div className="col-4 form-group">
            <label htmlFor="ccExpiryYear">Year</label>
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
              onBlur={(event) => this.validateCardExpiry(event)}
              placeholder="2040"
            />
          </div>

          <div className="col-4 form-group">
            <label htmlFor="cvcNum">CVC</label>
            <input
              type="text"
              className={
                "form-control" + (cvvTouched && !cvvValid ? " is-invalid" : "")
              }
              onChange={(event) =>
                this.handleCardDetailsInput(event, "cvcNum", "cvvTouched")
              }
              name="cvcNum"
              maxLength="3"
              id="cvcNum"
              onBlur={(event) => this.validateCVVNum(event)}
            />
          </div>
        </div>
        {this.state.submitting && <Loading />}
        <button
          className={
            this.payButtonValidation() || this.state.submitting
              ? "reTakeQuizButton disableButton"
              : "reTakeQuizButton"
          }
          disabled={this.payButtonValidation() || this.state.submitting}
          onClick={this.submit}
        >
          Add Credit Card
        </button>
      </div>
    );
  }
}

export default injectStripe(AddCreditCardForm);
