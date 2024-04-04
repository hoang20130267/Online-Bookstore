import axios from 'axios';
import {
    logoutFailure,
    logoutStart, logoutSuccess,
    registerFailure,
    registerStart,
    registerSuccess
} from "./authSlice";

export const loginUser = async (username, password) => {
    const url = "http://localhost:8080/api/auth/signin";
    const requestBody = {
        username: username,
        password: password
    };
    try {
        return await axios.post(url, requestBody);
        console.log("Login success")
    } catch (err) {
        console.error("Error during loginUser:", err);
        throw err;
    }
}
export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        const res = await axios.post("http://localhost:8080/api/auth/logout", user);
        dispatch(registerSuccess(res.data));
        navigate("/sign-in");
        console.log("Register success")
    } catch (err) {
        dispatch(registerFailure());
    }
}
export const logOut = async (dispatch, id, navigate, token) => {
    dispatch(logoutStart());
    try {
        await axios.post("http://localhost:8080/api/auth/logout", id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        dispatch(logoutSuccess());
        navigate("/");
        window.location.reload();
        console.log("Logout success")
    } catch (err) {
        dispatch(logoutFailure());
    }
}
export const sendEmail = async (props:any) => {
    const url = "http://localhost:8080/api/auth/forgot-password";
    try {
        return await axios.post(url, {
            email: props.email
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}
export const changeForgotPass = async (props:any) => {
    const url = "http://localhost:8080/api/auth/reset-password";
    try {
        return await axios.post(url, {
            email: props.email,
            otp: props.otp,
            newPassword: props.newPassword
        });
        console.log("Change forgot pass success")
    } catch (err) {
        console.error("Error fetching users:", err);
        throw err;
    }
}