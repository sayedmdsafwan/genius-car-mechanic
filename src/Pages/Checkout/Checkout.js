import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useServiceDetail from "../../hooks/useServiceDetail";

const Checkout = () => {
    const { serviceId } = useParams();
    const [user] = useAuthState(auth);
    const [service] = useServiceDetail(serviceId);

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value,
        };
        axios.post("http://localhost:4000/order", order).then((response) => {
            const { data } = response;
            if (data.insertedId) {
                toast("Your order is booked");
                event.target.reset();
            }
        });
    };

    return (
        <div className="w-50 mx-auto">
            <h1>Please Checkout {service.name}</h1>
            <form onSubmit={handlePlaceOrder}>
                <input
                    className="w-100 mb-2 "
                    type="text"
                    value={user?.displayName}
                    placeholder="Name"
                    name="name"
                    required
                    readOnly
                />
                <br />
                <input
                    className="w-100 mb-2 "
                    type="email"
                    value={user?.email}
                    placeholder="Email"
                    name="email"
                    required
                    readOnly
                    disabled
                />
                <br />
                <input
                    className="w-100 mb-2 "
                    type="text"
                    placeholder="Service"
                    value={service.name}
                    readOnly
                    name="service"
                    required
                />
                <br />
                <input
                    className="w-100 mb-2 "
                    type="text"
                    placeholder="Address"
                    name="address"
                    required
                />
                <br />
                <input
                    className="w-100 mb-2 "
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    required
                />
                <br />
                <input type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;
