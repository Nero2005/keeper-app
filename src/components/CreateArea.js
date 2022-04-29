import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

const CreateArea = ({ addNote }) => {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const [note, setNote] = useState({});
  const [clicked, setClicked] = useState(false);
  const handleChange = (e) => {
    setNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <div>
      <form>
        {clicked && (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          onClick={() => setClicked(true)}
          placeholder="Take a note..."
          value={note.content}
          rows={clicked ? 3 : 1}
          onChange={handleChange}
        />
        {clicked && (
          <Zoom in={clicked}>
            <Fab className="form-button" onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
};

export default CreateArea;
