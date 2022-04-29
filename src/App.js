import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
// import notes from "./notes";
import CreateArea from "./components/CreateArea";
import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const getNotes = async () => {
    const response = await fetch("http://localhost:5000/notes");
    const allNotes = await response.json();
    setNotes(allNotes);
  };
  useEffect(() => {
    getNotes();
  }, [notes]);
  const createNotes = (note, i) => (
    <Note
      key={i}
      id={note._id}
      title={note.title}
      content={note.content}
      deleteNote={deleteNote}
    />
  );

  const addNote = async (note) => {
    const newNote = await fetch("http://localhost:5000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ ...note }),
    });
    getNotes();
  };

  const deleteNote = async (id) => {
    const deletedNote = await fetch(`http://localhost:5000/notes?id=${id}`, {
      method: "DELETE",
    });
    getNotes();
    // setNotes((prev) => prev.filter((noteItem, index) => index !== id));
  };

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
