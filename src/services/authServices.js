import http from "./httpService";
import jwtDecode from "jwt-decode";
import config from "../config.json";

const tokenKey = "token";
http.setJwt(getJWT());

export function login(email, password) {
  console.log("Auth service called!");
  return http.post(config.apiEndPoint + "/login", { email, password });
}

export function socialLogin(fbData) {
  console.log("social service called!");
  let socialData;
  if (fbData.googleId) {
    socialData = {
      accessToken: fbData.tokenObj.access_token,
      data_access_expiration_time: fbData.tokenObj.expires_in,
      email: fbData.profileObj.email,
    }
  } else {
    socialData = {
      accessToken: fbData.tokenDetail.accessToken,
      data_access_expiration_time: fbData.tokenDetail.data_access_expiration_time,
      email: fbData.profile.email
    }
  }
  return http.post(config.apiEndPoint + "/socialLogin", socialData);
}

export function signUp({ account, dob, socialAvatarUrl, mobile }, quizdata) {
  console.log("Sign up called!");

  console.log(account, dob, quizdata);

  return http.post(config.apiEndPoint + "/signup", {
    password: account.password,
    confPassword: account.password,
    firstName: account.firstName,
    lastName: account.lastName,
    email: account.email,
    dob: dob,
    gender: "F",
    qna: quizdata,
    mobile: mobile,
    socialAvatarUrl: socialAvatarUrl
  });
}

export function socialSignUp(fbData, quizdata) {
  console.log("Sign up called!");
  console.log(fbData, quizdata);
  let socialData;

  if (fbData.googleId) {
    socialData = {
      password: fbData.profileObj.googleId,
      confPassword: fbData.profileObj.googleId,
      firstName: fbData.profileObj.givenName,
      lastName: fbData.profileObj.familyName,
      email: fbData.profileObj.email,
      gender: "F",
      qna: quizdata,
      socialAvatarUrl: fbData.profileObj.imageUrl,
    }
  }
  else {
    socialData = {
      password: fbData.profile.id,
      confPassword: fbData.profile.id,
      firstName: fbData.profile.first_name,
      lastName: fbData.profile.last_name,
      email: fbData.profile.email,
      gender: "F",
      qna: quizdata,
      socialAvatarUrl: fbData.profile.picture.data.url
    }
  }
  return http.post(config.apiEndPoint + "/signup", socialData);
}

export function updateQuizData(userData, quizData) {
  return http.post(
    config.apiEndPoint + "/account/" + userData.username + "/update-qna",
    {
      qna: quizData
    }
  );
}

export function updateCurrentUserData(userData, mobile, dob) {
  const user = getCurrentUser();
  console.log(user);
  const formData = new FormData();
  formData.append("avatar", userData.avatar);
  formData.append("firstName", userData.firstName);
  formData.append("email", user.email);
  formData.append("lastName", userData.lastName);
  formData.append("dob", dob);
  formData.append("mobile", mobile);
  //formData.append('qna', user.qna || []);

  return http.post(
    config.apiEndPoint + "/account/" + user.username,
    formData /* {
    firstName: userData.firstName,
    email: user.email,
    lastName: userData.lastName,
    dob: dob,
    mobile: userData.mobile,
    qna: user.qna
   }*/
  );
}

export function updateCurrentUserShipADD(
  shippingDetails,
  currentUserOrderDetails
) {
  //const user = getCurrentUser();
  return http.post(config.apiEndPoint + "/update-order-address", {
    customerId: currentUserOrderDetails.customer._id,
    orderId: currentUserOrderDetails._id,
    shippingName: shippingDetails.name,
    shippingAddress: shippingDetails.address,
    shippingCity: shippingDetails.city,
    shippingPostcode: shippingDetails.pin,
    shippingState: shippingDetails.state,
    shippingCountry: shippingDetails.country,
    billingName: currentUserOrderDetails.billingName,
    billingAddress: currentUserOrderDetails.billingAddress,
    billingCity: currentUserOrderDetails.billingCity,
    billingPostcode: currentUserOrderDetails.billingPostcode,
    billingState: currentUserOrderDetails.billingState,
    billingCountry: currentUserOrderDetails.billingCountry
  });
}

export function getJWT() {
  return localStorage.getItem(tokenKey);
}

export function getCurrentUserDetails() {
  const user = getCurrentUser();
  return http.get(config.apiEndPoint + "/account/" + user.username);
}

export function initiateForgotPassword(data) {
  return http.post(config.apiEndPoint + "/forgot-password", data);
}
export function resetPassword(data) {
  return http.post(config.apiEndPoint + "/recover-password", data);
}
// export function getCurrentUserSubscribtion() {
//   const user = getCurrentUser();
//   return http.get(config.apiEndPoint + "/get-subscriptions/" + user.stripeCustId);
// }

// export function getCurrentUserCustomer() {
//   const user = getCurrentUser();
//   console.log(user.stripeCustId);
//   return http.get(config.apiEndPoint + "/get-customer/" + user.stripeCustId);
// }

export function getCurrentUserSubscribtion() {
  const user = getCurrentUser();
  return http.get(config.apiEndPoint + "/get-subscriptions/" + user.username);
}

export function getCurrentUserCustomer() {
  const user = getCurrentUser();
  return http.get(config.apiEndPoint + "/get-customer/" + user.username);
}

export function getCurrentUser() {
  try {
    const token = localStorage.getItem(tokenKey);
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
}

export function saveJwtToken(token) {
  localStorage.setItem(tokenKey, token);
}

export function removeJwtToken() {
  localStorage.removeItem(tokenKey);
}

export default {
  login,
  socialLogin,
  signUp,
  socialSignUp,
  getCurrentUser,
  getCurrentUserDetails,
  getCurrentUserSubscribtion,
  getCurrentUserCustomer,
  updateQuizData,
  updateCurrentUserData,
  updateCurrentUserShipADD,
  saveJwtToken,
  removeJwtToken,
  getJWT,
  initiateForgotPassword,
  resetPassword
};
