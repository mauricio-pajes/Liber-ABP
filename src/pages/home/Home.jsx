import {useEffect, useState} from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import {useLocation} from "react-router";

export default function Home(props) {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();



    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(process.env.REACT_APP_BACKEND_URL + "/posts" + search);
            setPosts(res.data);
        };
        fetchPosts();
        console.log(props.searchResults);
    }, [props.searchResults, search]);
    return (
        <>
            <Header/>
            <div className="home">
                <div>
                    <Posts posts={props.searchResults && props.searchResults.length !== 0 ? props.searchResults : posts}/>

                </div>
                <Sidebar/>
            </div>

        </>
    );
}