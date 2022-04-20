import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };

    let errorElement;
    if (error) {
        errorElement = (
            <div>
                <p className="text-danger">Error: {error?.message}</p>
            </div>
        );
    }

    const resetYourPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Sent email");
        } else {
            toast("Please enter your email address");
        }
    };

    const navigateRegister = () => {
        navigate("/register");
    };

    user && navigate(from, { replace: true });

    if (loading || sending) {
        return <Loading></Loading>;
    }

    return (
        <div className="w-50 mx-auto py-5">
            <h1>Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        ref={emailRef}
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button
                    className="w-100"
                    variant="outline-primary"
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
            {errorElement}
            <p>
                Forget Password?{" "}
                <span
                    style={{ cursor: "pointer" }}
                    className="text-primary"
                    onClick={resetYourPassword}
                >
                    Click here to reset password!
                </span>
            </p>
            <p>
                New to genius car?{" "}
                <span
                    style={{ cursor: "pointer" }}
                    className="text-primary"
                    onClick={navigateRegister}
                >
                    Please Register!
                </span>
            </p>
            <SocialLogin />
            <ToastContainer />
        </div>
    );
};

export default Login;
