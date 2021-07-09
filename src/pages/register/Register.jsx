import "./register.css"
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post(process.env.REACT_APP_BACKEND_URL + "/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }
    };
    return (
        <div className={"register"}>
            <span className={"registerTitle"}>Sign Up</span>
            <form className={"registerForm"} onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    className={"registerInput"}
                    placeholder={"Ingresa tu usuario..."}
                    onChange={e=>setUsername(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="email"
                    className={"registerInput"}
                    placeholder={"Ingresa tu correo..."}
                    onChange={e=>setEmail(e.target.value)}
                />
                <label>Contraseña</label>
                <input
                    type="password"
                    className={"registerInput"}
                    placeholder={"Ingresa tu contraseña..."}
                    onChange={e=>setPassword(e.target.value)}
                />
                <button className={"registerButton"} type={"submit"}>Sign Up</button>
            </form>
            <button className="registerLoginButton">
                <Link className={"link"} to={"/login"}>Sign In</Link>
            </button>
            {error && <span style={{color: "#a14545", marginTop: "10px"}}>Algo salió mal...</span>}
        </div>
    )
}