import http from "./httpService";
import config from "../config.json";
import auth from "./authServices";

export function validatePromoCode(userDetails, promoCode) {
  console.log(userDetails, promoCode);

  return http.post(config.apiEndPoint + "/check-coupon", {
    promocode: promoCode,
    applicableFor: "subscription",
    userEmail: userDetails.email,
  });
}

export function applyPromoCode(promoCode) {
  console.log(promoCode);
  const orderId = localStorage.getItem("OID");
  return http.post(config.apiEndPoint + "/apply-promo", {
    usedPromocode: promoCode,
    orderId: orderId,
  });
}

export function createOrderSubscription(
  userDetails,
  selectedPlan,
  addressDetails,
  promoDiscountAmount,
  promocode,
  finalPaybleAmount,
  couponCodeApplied,
  cardDetails
) {
  let promoCodeUsed = "";

  if (couponCodeApplied) {
    promoCodeUsed = "YES";
  } else {
    promoCodeUsed = "NO";
  }
  console.log("userDetails inside create order", userDetails);
  let orderPayload = {
    orderType: "subscription",
    customer: userDetails._id,
    userEmail: userDetails.email,
    subscriptionId: selectedPlan.subscriptionId,
    shippingName:
      addressDetails.shippingFirstName + " " + addressDetails.shippingLastName,
    shippingAddress: addressDetails.shippingAddress,
    shippingCity: addressDetails.shippingCity,
    shippingPostcode: addressDetails.shippingPostcode,
    shippingState: addressDetails.shippingState,
    shippingCountry: addressDetails.shippingCountry,
    billingName:
      addressDetails.billingFirstName + " " + addressDetails.billingLastName,
    billingAddress: addressDetails.billingAddress,
    billingCity: addressDetails.billingCity,
    billingPostcode: addressDetails.billingPostcode,
    billingState: addressDetails.billingState,
    billingCountry: addressDetails.billingCountry,
    useValidPromocode: promoCodeUsed,
    usedPromocode: promocode,
    cartTotalAmount: selectedPlan.price,
    promoDiscountAmount: promoDiscountAmount,
    finalPaybleAmount: finalPaybleAmount,
    totalPurchaseItems: "1",
    orderGroup: userDetails.orderGroup
  };

  if (cardDetails) {
    orderPayload = Object.assign({}, orderPayload, cardDetails);
  }

  if (userDetails.stripeCustId) {
    orderPayload = Object.assign({}, orderPayload, {
      stripeCustId: userDetails.stripeCustId,
    });
  }
  return http.post(config.apiEndPoint + "/create-order", orderPayload);
}

export function getCurrentUserOrder() {
  const user = auth.getCurrentUser();
  return http.get(config.apiEndPoint + "/get-orders/" + user._id);
}

export function updateSubscriptionOrder() {
  const orderId = localStorage.getItem("OID");
  return http.post(config.apiEndPoint + "/update-order", {
    orderId: orderId,
    orderStatus: "CONFIRMED",
  });
}

export function cancelSubscriptionOrder(stripeSubcriptionId, orderId) {
  return http.post(
    config.apiEndPoint + "/cancel-subscription/" + stripeSubcriptionId,
    {
      orderId: orderId,
    }
  );
}

export function addSource(payload, orderDetails) {
  return http.post(config.apiEndPoint + "/add-sources", {
    payload,
    stripeCustomerAndOrderDetails: orderDetails,
  });
}

export function deleteSource(stripeCustId, stripeSourceCardId) {
  return http.post(config.apiEndPoint + "/delete-sources/" + stripeCustId, {
    stripeSourceCardId,
  });
}
export default {
  validatePromoCode,
  applyPromoCode,
  createOrderSubscription,
  getCurrentUserOrder,
  updateSubscriptionOrder,
  cancelSubscriptionOrder,
  addSource,
  deleteSource,
};
