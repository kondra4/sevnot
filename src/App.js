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
import {parse} from "url";

// let savePosts;

function App() {
    const savePostsers = JSON.parse(localStorage.getItem('save_posts'))
    // console.log(savePostsers)

    const check = savePostsers.length == 0 ? [{title: "2", body: "1", id:324}] : savePostsers

    console.log(check)
    const [posts, setPosts] = useState(check)
    // const savePosts = localStorage.getItem('save_posts')
    // console.log(savePosts)





    // const [posts, setPosts] = useState(savePostsers)


    const [modal, setModal] = useState(false);

    // console.log(localStorage.getItem('save_posts'))

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    localStorage.setItem('save_posts', JSON.stringify(posts))

    // const savePostsers = JSON.parse(localStorage.getItem('save_posts'))
    // setPosts(savePostsers)
    //     console.log(savePostsers)

    // useEffect(() =>{
    //
    //     localStorage.setItem('save_posts', JSON.stringify(posts))
    //     // savePosts = localStorage.getItem('save_posts')
    //     // console.log(savePosts)
    // },[posts])

    const savePosts = JSON.parse(localStorage.getItem('save_posts'))

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    // console.log(posts)
    return (
        <div className="App">
            {/*<button onClick={fetchPosts}>Сохранить заметки</button>*/}
            <MyButton style={{marginTop: 30}}
                      onClick={ () => setModal(true)
                      }>
                Добавить заметку
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            {posts.length !== 0
                ? <PostList remove={removePost}
                            title="Заметки"
                            save={posts}
                />
                :
                <h1 style={{textAlign: 'center'}}>
                    No notes
                </h1>
            }
        </div>
    );
}
export default App;
