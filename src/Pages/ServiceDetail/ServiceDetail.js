import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/service/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    return (
        <div>
            <h1>Service detail {service.name}</h1>
            <Link to="/checkout">
                <button className="btn btn-primary d-block mx-auto">
                    Checkout
                </button>
            </Link>
        </div>
    );
};

export default ServiceDetail;
