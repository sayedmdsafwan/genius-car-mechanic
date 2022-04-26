import { useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";

const Checkout = () => {
    const { serviceId } = useParams();

    const [service] = useServiceDetail(serviceId);

    return (
        <div className="w-50 mx-auto">
            <h1>Please Checkout {service.name}</h1>
            <form>
                <input type="text" placeholder="Name" name="name" required />
            </form>
        </div>
    );
};

export default Checkout;
