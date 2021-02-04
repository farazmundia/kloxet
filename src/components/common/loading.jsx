import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
  return (
    <div className="loading">
      <Loader type="Oval" color="#fb81f1" height={80} width={80} />
    </div>
  );
};

export default Loading;
