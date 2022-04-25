import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import EditModal from "./UI/MyModal/EditModal";
import PostForm from "./PostForm";
import PostFormEdit from "./PostFormEdit";
import MyInput from "./UI/input/MyInput";


const PostItem = (props) => {
    const [edModal, setEdModal] = useState(false);
    const [selectedPost, setSelectedPost] = useState({});
    const handleSelectPost = (edPost) => {
        // console.log(edPost)
        setSelectedPost(edPost);
    };



    const [valueTitle, setValueTitle] = useState(props.post.title);
    const [valueTitleState, setValueTitleState] = useState(valueTitle);
    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.number}. {valueTitleState}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post_btns">
                <MyButton onClick={() => {
                    setEdModal(true);
                    handleSelectPost(props)
                }}>
                    Редактировать
                </MyButton>
                <EditModal visible={edModal} setVisible={setEdModal}  >
                    <form>
                        <MyInput value={valueTitle} onChange={(e) => {setValueTitle(e.target.value)}}
                        />
                        <MyInput
                        />
                        <MyButton
                            onClick={(e) => {
                                e.preventDefault();
                                setValueTitleState(valueTitle)

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
