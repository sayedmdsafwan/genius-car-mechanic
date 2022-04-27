import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `https://arcane-scrubland-06380.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data);
            } catch (error) {
                console.log(error.message);
                if (
                    error.response.status === 401 ||
                    error.response.status === 403
                ) {
                    signOut(auth);
                    navigate("/login");
                }
            }
        };
        getOrders();
    }, []);

    return (
        <div>
            <h2>Orders {orders.length}</h2>
        </div>
    );
};

export default Orders;
