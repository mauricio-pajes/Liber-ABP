import "./about.css"
import {Link} from "react-router-dom";


export default function About() {
    return (
        <div className={"sidebar"}>
            <div className="sidebarItem">
                <span className="sidebarTitle">SOBRE NOSOTROS</span>
                <img
                    className="sidebarImg"
                    src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    alt=""/>
                <p style={{width: 750, textAlign: "center"}}>
                    Somos un grupo el cual busca inculcar y enseñar a la gente de nuestro país, a que aprendan a valorar
                    nuestro país y aparte sepán como cuidarlo que los valores del bicentenario. Y agradecer al país que
                    nos vió nacer por estos 200 años de independecia que ha cultivado generaciones. Por eso nuestro
                    compromiso es compartir las opiniones mediante nuestras redes y este blog, para así llegar y llevar
                    a un mejor Perú.
                </p>
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