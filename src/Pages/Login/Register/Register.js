import "./Register.css";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useState } from "react";
import { async } from "@firebase/util";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = (event) => {
        navigate("/login");
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const password = event.target.password.value;
        const email = event.target.email.value;
        // const agree = event.target.terms.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate("/home");
    };

    if (user) {
        console.log("user", user);
    }

    if (loading || updating) {
        return <Loading></Loading>;
    }

    return (
        <div className="form-register w-50 mx-auto">
            <h1 className="text-center">Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="name" placeholder="name" />
                <br />
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Email"
                />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                />
                <input
                    onClick={() => setAgree(!agree)}
                    type="checkbox"
                    name="terms"
                    id="terms"
                />
                <label
                    htmlFor="terms"
                    className={`ms-2 ${agree ? "" : "text-danger"}`}
                >
                    Accept Terms and Condition
                </label>
                <input
                    className="btn-outline-primary border-primary border-1 rounded"
                    type="submit"
                    value="Submit"
                    disabled={!agree}
                />
            </form>
            <p>
                Already have an account?{" "}
                <span
                    style={{ cursor: "pointer" }}
                    className="text-primary"
                    onClick={navigateLogin}
                >
                    Please Login!
                </span>
            </p>
            <SocialLogin />
        </div>
    );
};

export default Register;
