import "./login.css"
import {Link} from "react-router-dom";
import {useContext, useRef} from "react";
import {Context} from "../../context/Context";
import axios from "axios";

export default function Login() {

    const userRef = useRef()
    const passwordRef = useRef()
    const { user, dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post(process.env.REACT_APP_BACKEND_URL + "/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
        } catch (err) {
            dispatch({type: "LOGIN_FAILURE"});
        }
    };

    return (
        <div className={"login"}>
            <span className={"loginTitle"}>Sign In</span>
            <form className={"loginForm"} onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className={"loginInput"}
                    placeholder={"Ingresa tu username..."}
                    ref={userRef}
                />
                <label>Contraseña</label>
                <input
                    type="password"
                    className={"loginInput"}
                    placeholder={"Ingresa tu contraseña..."}
                    ref={passwordRef}
                />
                <button className={"loginButton"} type={"submit"} disabled={isFetching}>
                    Sign In
                </button>
            </form>
            <button className="loginRegisterButton">
                <Link to={"/register"} className={"link"}>Sing Up</Link>
            </button>
        </div>
    )
}