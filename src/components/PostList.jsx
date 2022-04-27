import React, {} from 'react';
import PostItem from "./PostItem";


const PostList = ({ title, remove, save, onEditPost}) => {

const onChangePost =(title, body, id) => {
    onEditPost(title, body, id)
    }

    return (
        <div>
            <h1 style = {{textAlign: 'center'}}>
                {title}</h1>
            {save.map((post, index) =>
                        <PostItem remove={remove} number={index + 1} post={post} key={post.id} onChangePost={onChangePost}/>
                    )
            }
        </div>
    );
};

export default PostList;
