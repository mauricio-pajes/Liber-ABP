import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar";
import {useContext, useState} from "react";
import {Context} from "../../context/Context";
import axios from "axios";

export default function Settings() {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const {user, dispatch} = useContext(Context);
    const PF = `${process.env.REACT_APP_BACKEND_URL}images/`

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "UPDATE_START"});
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axios.post(process.env.REACT_APP_BACKEND_URL + "upload/", data);
            } catch (err) {
            }
        }
        try {
            const res = await axios.put(process.env.REACT_APP_BACKEND_URL + "/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({type: "UPDATE_SUCCESS", payload: res.data});
        } catch (err) {
            dispatch({type: "UPDATE_FAILURE"});
        }
    };
    return (
        <div className={"settings"}>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingUpdateTitle">Actualiza tu cuenta</span>
                    <span className="settingDeleteTitle">Elimina tu cuenta</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Foto de Perfil</label>
                    <div className="settingsPP">
                        <img
                            className={"settingsImage"}
                            src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                            alt=""/>

                        <label htmlFor={"fileInput"}>
                            <i className=" settingsPPIcon far fa-user-circle"/>
                        </label>
                        <input
                            type="file"
                            id={"fileInput"}
                            style={{display: "none"}}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder={user.username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder={user.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="settingsSubmit" type={"submit"}>Actualizar</button>
                    {success &&
                    <span style={{color: "green", textAlign: "center", marginTop: "20px"}}>Tu perfil a sido actualizado...</span>}
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}