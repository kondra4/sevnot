import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({props}, {selectedPost}, changeStateInput) => {

    const [valueTitle, setValueTitle] = useState(props.title);
    console.log(valueTitle)

    return (
        <form>
            <MyInput value={valueTitle} onChange={(e) => {setValueTitle(e.target.value)}}
            />
            <MyInput
            />
            <MyButton>Сохранить изменения</MyButton>
        </form>
    );
};

export default PostForm;
