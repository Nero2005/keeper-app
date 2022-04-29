import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({ id, title, content, deleteNote }) => {
  const deleteCurrNote = (e) => {
    deleteNote(id);
  };

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={deleteCurrNote}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
