import { useEffect, useState } from "react";

const useServiceDetail = (serviceId) => {
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(
            `https://arcane-scrubland-06380.herokuapp.com/service/${serviceId}`
        )
            .then((res) => res.json())
            .then((data) => setService(data));
    }, [serviceId]);

    return [service];
};

export default useServiceDetail;
