import React from "react";
import { ToastContainer } from "react-bootstrap";
import {
    useAuthState,
    useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] =
        useSendEmailVerification(auth);

    const location = useLocation();

    if (loading) {
        return <Loading></Loading>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return (
            <div>
                <h1>Your email is not verified</h1>
                <button
                    onClick={async () => {
                        await sendEmailVerification();
                        toast("Sent email");
                    }}
                >
                    Verify email
                </button>
                <ToastContainer></ToastContainer>
            </div>
        );
    }

    return children;
};

export default RequireAuth;
