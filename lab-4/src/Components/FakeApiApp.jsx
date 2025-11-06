import { useEffect, useState } from "react";
import PostsContainer from "./PostsContainer";
import PostForm from "./PostForm";

export default function FakeApiApp() {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [newPost, setNewPost] = useState({
        title: "",
        body: "",
    });

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        const result = await fetch(URL);
        const newData = await result.json();
        setData(newData);
        setIsLoading(false);
    };

    const handleOnChange = (e) => {
        setNewPost((prevPost) => {
            return { ...prevPost, [e.target.name]: e.target.value };
        });
    };

    const handleAddPost = (e) => {
        e.preventDefault();

        if (newPost.title === "" || newPost.body === "") {
            alert("Post title and body cannot be empty");
        } else {
            setData([{ ...newPost, id: data.length + 1 }, ...data]);
            setNewPost({
                title: "",
                body: "",
            });
        }
    };

    return (
        <div>
            <h1>Fake API App </h1>
            <PostForm newPost={newPost} handleOnChange={handleOnChange} handleAddPost={handleAddPost} />
            {isLoading && <h1>Loading...</h1>}
            <PostsContainer data={data} />
        </div>
    );
}
