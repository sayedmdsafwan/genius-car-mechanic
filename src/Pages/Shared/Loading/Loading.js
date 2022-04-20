import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
    return (
        <div
            className="d-flex w-100 justify-content-center align-items-center"
            style={{ height: "300px" }}
        >
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;
