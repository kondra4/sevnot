import React from 'react';
import editCl from './EditModal.module.css';

const EditModal = ({children, visible, setVisible}) => {
    const rootClasses = [editCl.EditModal]
    if (visible) {
        rootClasses.push(editCl.active)
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={editCl.EditModalContent} onClick={(e => e.stopPropagation())}>
                {children}
            </div>
        </div>
    );
};

export default EditModal;
