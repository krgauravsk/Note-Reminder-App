import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import styles from './CreateNote.module.scss';

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
        // console.log(note);
    };
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    };
    const expandIt = () => {
        setExpand(true);
    };
    const backToNormal = () => {
        setExpand(false);
    };
    return (
        <div className={styles.container} onClick={backToNormal}>
            <form>
                <div className={styles.textField} >
                    { //expand?
                        (
                            <input
                                className={styles.inputText}
                                type="text"
                                name="title"
                                value={note.title}
                                onChange={InputEvent}
                                placeholder="Title"
                                autoComplete="off"
                            />
                        )//:null
                    }
                    <textarea
                        className={styles.textArea}
                        rows=""
                        column=""
                        name="content"
                        value={note.content}
                        onChange={InputEvent}
                        placeholder="Write a note..."
                    //onClick={expandIt}
                    />
                </div>
                {
                    //expand?
                    (
                        <Button className={styles.buttonText} onClick={addEvent}>
                           
                                <div className={styles.circlePlus} />
                                <IconButton />
                                <AddIcon className={styles.addSign} />
                           
                        </Button>

                    )//:null

                }

            </form>
        </div>
    );
};
export default CreateNote;