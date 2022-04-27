import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import EditModal from "./UI/MyModal/EditModal";
import MyInput from "./UI/input/MyInput";


const PostItem = (props) => {
    const [edModal, setEdModal] = useState(false);

    const [valueTitle, setValueTitle] = useState(props.post.title);
    const [valueTitleState, setValueTitleState] = useState(valueTitle);

    const [valueBody, setValueBody] = useState(props.post.body);
    const [valueBodyState, setValueBodyState] = useState(valueBody);

    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.number}. {valueTitleState}</strong>
                <div>
                    {valueBodyState}
                </div>
            </div>
            <div className="post_btns">
                <MyButton onClick={(e) => {
                    setEdModal(true);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
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
                                props.onChangePost(valueTitle, valueBody, props.post.id)
                                setValueTitleState(valueTitle);
                                setValueBodyState(valueBody)
                                props.post.title = valueTitle
                                props.post.body = valueBody
                                setEdModal(false)
                            }}
                        >Сохранить изменения</MyButton>
                    </form>
                </EditModal>
                <MyButton onClick={() => props.remove(props.post)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
