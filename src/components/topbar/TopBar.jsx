import './topbar.css'
import {Link} from "react-router-dom";
import {Context} from "../../context/Context";
import {useContext} from "react";

export default function TopBar(props) {
    const {user, dispatch} = useContext(Context);
    const PF = `${process.env.REACT_APP_ASSET_URL}images/`


    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
    }
    return (
        <div className={"top"}>
            <div className={"topLeft"}>
                <a href={"https://www.facebook.com/Liber-103080055367563"}>
                    <i className="topIcon fab fa-facebook-square"></i>
                </a>
                <a href={"https://twitter.com/liber_2021"}>
                    <i className="topIcon fab fa-twitter-square"></i>
                </a>
                <a href={"https://www.instagram.com/liber.2021/"}>
                    <i className="topIcon fab fa-instagram-square"></i>
                </a>
            </div>
            <div className={"topCenter"}>
                <ul className={"topList"}>
                    <li className={"topListItem"}>
                        <Link to={"/"} className={"link"}>INICIO</Link>
                    </li>
                    <li className={"topListItem"}>
                        <Link to={"/about"} className={"link"}>SOBRE</Link>
                    </li>
                    <li className={"topListItem"}>
                        <Link to={"/write"} className={"link"}>ESCRIBE</Link>
                    </li>
                    <li className={"topListItem"} onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className={"topRight"}>


            <div className={"topSearch"}>
                <i className="topSearchIcon fas fa-search"/>
                <input onChange={props.onSearch} type={"text"} className={"topSearchInput"} />
            </div>
                {
                    user ? (
                            <Link to={"/settings"}>
                                <img className={"topImage"} src={PF + user.profilePic} alt=""/>
                            </Link>
                        )
                        : (
                            <ul className={"topList"}>
                                <li className={"topListItem"}>
                                    <Link className={"link"} to={"/login"}>
                                        Sign In
                                    </Link>
                                </li>
                                <li className={"topListItem"}>
                                    <Link className={"link"} to={"/register"}>
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                        )
                }
            </div>
        </div>
    )
}