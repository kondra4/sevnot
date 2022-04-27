import React, {useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import PostForm from "./components/PostForm";
import MyModal from "./components/UI/MyModal/MyModal";


function App() {
    const savePostsers = JSON.parse(localStorage.getItem('save_posts')) ||  [{title: "First notice", body: "This is first notice", id:1}]
    console.log(savePostsers)

    const check = savePostsers && savePostsers.length === 0 ?
        [{title: "First notice", body: "This is first notice", id:1}]
        :
        savePostsers

    console.log(check)
    const [posts, setPosts] = useState(check)



    const [modal, setModal] = useState(false);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    localStorage.setItem('save_posts', JSON.stringify(posts))

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const onChangePost = (title, body, id)=> {
        const indexForChange = posts.findIndex((item) => item.id == id);
        posts[indexForChange].title = title
        posts[indexForChange].body = body
        localStorage.setItem('save_posts', JSON.stringify(posts))
    }


    return (
        <div className="App">
            <MyButton style={{marginTop: 30}}
                      onClick={ () => setModal(true)
                      }>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            {posts.length !== 0
                ? <PostList remove={removePost}
                            title="Notes"
                            save={posts}
                            onEditPost={onChangePost}
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
