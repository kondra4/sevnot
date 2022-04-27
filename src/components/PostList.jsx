import React, {} from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";


const PostList = ({ title, remove, save, onEditPost}) => {

const onChangePost =(title, body, id) => {
    onEditPost(title, body, id)
    }

    return (
        <div>
            <h1 style = {{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {save.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                        >
                    <PostItem remove={remove} number={index + 1} post={post} key={post.id} onChangePost={onChangePost}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
