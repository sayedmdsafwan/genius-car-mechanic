import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <h1>Service detail {serviceId}</h1>
            <Link to="/checkout">
                <button>Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;
