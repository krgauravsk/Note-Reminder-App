import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
 
const App = () => {
     const [addItem, setAddItem] = useState([]);
     const addNote =(note) => {
         setAddItem([...addItem, note]);
     };
     const onDelete = (id) => {
         setAddItem(
             addItem.filter((currdata,indx)=>{
                return indx!==id;
            }));
     };
    return (
        <>
        <Header />
        <CreateNote passNote={addNote} />

        {addItem.map((val, index)=> {
            return (
                <Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deleteItem={onDelete}
                />
            );
          })
        }

        <Footer />
        </>
    );
};

export default App;