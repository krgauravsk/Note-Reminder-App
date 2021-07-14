import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import styles from './Note.module.scss';
const buttonStyles = makeStyles(() => ({
    root: {
        cursor: 'pointer',
        background: 'yellow',
        border: 'hidden',
        marginLeft: '66px',
        borderRadius: '100%',
        height: '50px',
        width: '50px',
        left: '450px'
    },
}));


const Note = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.id);
    };

    const buttonClass = buttonStyles();

    return (
        <div className={styles.noteBox}>
            <div className={styles.bodyBox}>
                <div className={styles.textBox}>
                    <h1 className={styles.titleBox}>{props.title}</h1>
                    <br />
                    <p className={styles.contentBox}>{props.content}</p>
                </div>
                <button className={buttonClass.root} onClick={deleteNote}>
                    <div className={styles.deleteBag} />
                    <DeleteOutlineIcon className={styles.deleteIcon} />
                </button>
            </div>
        </div>
    )
}
export default Note;
