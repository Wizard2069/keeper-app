import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isClicked, setClick] = useState(false);

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function handleClick(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function handleClickInput() {
        setClick(true);
    }

    return (
        <div>
            <form className="create-note">
                <input name="title" placeholder="Title" onChange={handleChange} onClick={handleClickInput}
                       value={note.title}/>
                {isClicked && (<React.Fragment>
                    <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange}
                              value={note.content}/><Zoom in={true}>
                    <Fab aria-label="add" onClick={handleClick}><AddIcon/></Fab>
                </Zoom>
                </React.Fragment>)}

            </form>
        </div>
    );
}

export default CreateArea;
