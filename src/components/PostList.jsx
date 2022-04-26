import React, {useEffect, useState} from 'react';
import PostItem from "./PostItem";


const PostList = ({ title, remove, save}) => {




    // useEffect(() =>{
    //     localStorage.setItem('save_posts', JSON.stringify(posts))
    // },[posts])
    //
    // const save = JSON.parse(localStorage.getItem('save_posts'));
    // console.log(save)
    return (
        <div>
            <h1 style = {{textAlign: 'center'}}>
                {title}</h1>
            {/*{save !== 1*/}
            {/*    ?*/}
            {/*save.map((post, index) =>*/}
            {/*    <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>*/}
            {/*)*/}
            {/*    :*/}
            {save.map((post, index) =>
                        <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
                    )
            }
        </div>
    );
};

export default PostList;
