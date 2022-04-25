import React, {useEffect, useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyModal from "./components/UI/MyModal/MyModal";
import axios from "axios";
import PostService from "./API/PostService";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "first notice", body: "This is first notice"}
    ])
    const [modal, setModal] = useState(false);
    const [isPostLoading, setIsPostLoading] = useState(false);

    // useEffect(() =>{
    //     fetchPosts()
    // },[])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    async function fetchPosts() {
        setIsPostLoading(true);
        const posts = await PostService.getALL();
        setPosts(posts)
        setIsPostLoading(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <button onClick={fetchPosts}>Get Posts</button>
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Добавить заметку
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title="Заметки"/>
                :
                <h1 style={{textAlign: 'center'}}>
                    No notes
                </h1>
            }
        </div>
    );
}
export default App;
