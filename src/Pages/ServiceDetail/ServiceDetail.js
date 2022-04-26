import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";

const ServiceDetail = () => {
    const { serviceId } = useParams();

    const [service] = useServiceDetail(serviceId);

    return (
        <div>
            <h1>Service detail {service.name}</h1>
            <Link to={`/checkout/${serviceId}`}>
                <button className="btn btn-primary d-block mx-auto">
                    Checkout
                </button>
            </Link>
        </div>
    );
};

export default ServiceDetail;
