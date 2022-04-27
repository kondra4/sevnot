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


    const savePosts = JSON.parse(localStorage.getItem('save_posts'))

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
