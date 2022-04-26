import React from "react";
import "./SocialLogin.css";
import googleLogo from "../../../images/social/google.png";
import facebookLogo from "../../../images/social/facebook.png";
import githubLogo from "../../../images/social/github.png";
import auth from "../../../firebase.init";
import {
    useSignInWithGithub,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] =
        useSignInWithGithub(auth);

    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (error || errorGit) {
        errorElement = (
            <div>
                <p className="text-danger">
                    Error: {error?.message}
                    {errorGit?.message}
                </p>
            </div>
        );
    }

    if (user || userGit) {
        navigate(from, { replace: true });
    }

    if (loading || loadingGit) {
        return <Loading></Loading>;
    }

    return (
        <div className="social-login">
            <div className="d-flex justify-content-between">
                <hr />
                or
                <hr />
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline-primary w-100"
                >
                    <img className="social-logo-btn" src={googleLogo} alt="" />
                    Google SignIn
                </button>
                <button className="btn mt-3  btn-outline-primary w-100">
                    <img
                        className="social-logo-btn"
                        src={facebookLogo}
                        alt=""
                    />
                    Facebook SignIn
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className="btn mt-3  btn-outline-primary w-100"
                >
                    <img className="social-logo-btn" src={githubLogo} alt="" />
                    Github SignIn
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
