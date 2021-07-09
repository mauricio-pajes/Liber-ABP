import "./sidebar.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get(process.env.REACT_APP_BACKEND_URL + "/categories")
            setCats(res.data)
        }
        getCats();
    }, [])
    return (
        <div className={"sidebar"}>
            <div className="sidebarItem">
                <span className="sidebarTitle">SOBRE NOSOTROS</span>
                <img
                    className="sidebarImg"
                    src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    alt=""/>
                <p>
                    Somos un grupo comprometido a inculcar los valores actuales del bicentenario y compartir a las
                    personas lo hermoso que es nuestro país tan diverso.
                </p>
            </div>
            <div className="sidebarItem">

          </div>
            <div className={"sidebarItem"}>
                <span className={"sidebarTitle"}>SIGUENOS</span>
                <div className="sidebarSocial">
                    <a className={"sidebarLink"} href={"https://www.facebook.com/Liber-103080055367563"}>
                        <i className="sidebarIcon fab fa-facebook-square"></i>
                    </a>
                    <a className={"sidebarLink"} href={"https://twitter.com/liber_2021"}>
                        <i className="sidebarIcon fab fa-twitter-square"></i>
                    </a>
                    <a className={"sidebarLink"} href={"https://www.instagram.com/liber.2021/"}>
                        <i className="sidebarIcon fab fa-instagram-square"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}