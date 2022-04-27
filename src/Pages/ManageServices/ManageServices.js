import React from "react";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `https://arcane-scrubland-06380.herokuapp.com/service/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remaining = services.filter((s) => s._id !== id);
                    setServices(remaining);
                });
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
