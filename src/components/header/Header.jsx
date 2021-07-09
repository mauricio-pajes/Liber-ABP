import "./header.css"
import "/home/mauricio/Documents/abp liber/liber/client/src/punto.css"
import cover from "./cover.jpg"

export default function Header() {
    return (
        <div className={"header"}>
            <div className="headerTitles">
                <span className={"headerTitleSm"}>Liber<span className={"punto"}>.</span></span>
                <span className={"headerTitleLg"}>Blog</span>

            </div>
            <img className={"headerImg"} src={cover} alt={""}/>
        </div>
    )
}