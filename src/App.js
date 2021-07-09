import Home from "./pages/home/Home"
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useContext, useState} from "react";
import {Context} from "./context/Context";
import axios from "axios";

function App() {
    const {user} = useContext(Context);
    const [posts, setPosts] = useState([]);
    const searchHandler = (e) => {
        console.log(e.target.value);
        const fetchPosts = async () => {
            const res = await axios.get(process.env.REACT_APP_BACKEND_URL + "/search?title=" + e.target.value);
            setPosts(res.data);
        };
        fetchPosts();
    };
    return (
        <Router>
            <TopBar onSearch={searchHandler}/>
            <Switch>
                <Route exact path={"/"}>
                    <Home searchResults={posts}/>
                </Route>
                <Route path={"/register"}>
                    {user ? <Home/> : <Register/>}
                </Route>
                <Route path={"/login"}>
                    {user ? <Home/> : <Login/>}
                </Route>
                <Route path={"/write"}>
                    {user ? <Write/> : <Write/>}
                </Route>
                <Route path={"/settings"}>
                    {user ? <Settings/> : <Settings/>}
                </Route>
                <Route path={"/about"}>
                    {user ? <About/> : <About/>}
                </Route>
                <Route path={"/post/:postId"}>
                    <Single/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
