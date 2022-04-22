import React from "react";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
    const [services] = useServices();

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            console.log("clicked", id);
        }
    };

    return (
        <div className="w-50 mx-auto">
            <h2 className="text-center">Services</h2>
            {services.map((service) => (
                <div key={service._id}>
                    <h4>
                        {service.name}{" "}
                        <button onClick={() => handleDelete(service._id)}>
                            X
                        </button>{" "}
                    </h4>
                </div>
            ))}
        </div>
    );
};

export default ManageServices;
