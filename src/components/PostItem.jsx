import React, {useEffect, useState} from 'react';
import MyButton from "./UI/button/MyButton";
import EditModal from "./UI/MyModal/EditModal";
import PostForm from "./PostForm";
import PostFormEdit from "./PostFormEdit";
import MyInput from "./UI/input/MyInput";


const PostItem = (props) => {
    const [edModal, setEdModal] = useState(false);

    const [valueTitle, setValueTitle] = useState(props.post.title);
    const [valueTitleState, setValueTitleState] = useState(valueTitle);

    const [valueBody, setValueBody] = useState(props.post.body);
    const [valueBodyState, setValueBodyState] = useState(valueBody);

    // useEffect(() =>{
    //     localStorage.setItem('save_posts', JSON.stringify(props.post))
    // },[props])
    //
    // const savePosts = JSON.parse(localStorage.getItem('save_posts'))

    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.number}. {valueTitleState}</strong>
                <div>
                    {valueBodyState}
                </div>
            </div>
            <div className="post_btns">
                <MyButton onClick={() => setEdModal(true)}>
                    Редактировать
                </MyButton>
                <EditModal visible={edModal} setVisible={setEdModal}  >
                    <form>
                        <MyInput value={valueTitle} onChange={(e) => {setValueTitle(e.target.value)}}
                        />
                        <MyInput value={valueBody} onChange={(e) => {setValueBody(e.target.value)}}
                        />
                        <MyButton
                            onClick={(e) => {
                                e.preventDefault();
                                setValueTitleState(valueTitle);
                                setValueBodyState(valueBody)
                                props.post.title = valueTitle
                                props.post.body = valueBody
                                // console.log(props.post)
                            }}
                        >Сохранить изменения</MyButton>
                    </form>
                </EditModal>
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
