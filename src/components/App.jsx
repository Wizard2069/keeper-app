import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreareArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((item, index) => {
                return id !== index;
            })
        })
    }

    return (
        <div>
            <Header/>
            <CreateArea onAdd={addNote}/>
            {notes.map((item, index) => {
                return <Note key={index} id={index} title={item.title} content={item.content} onDelete={deleteNote}/>;
            })}
            <Footer/>
        </div>
    );
}

export default App;