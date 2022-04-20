import React from "react";
import sleepy from "../../../images/sleepy.jpeg";

const NotFound = () => {
    return (
        <div>
            <h1 className="display-4">404 not found! </h1>
            <img src={sleepy} alt="" />
        </div>
    );
};

export default NotFound;
