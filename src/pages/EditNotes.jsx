import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState } from "react";
import useCreateDate from "../components/useCreateDate.jsx";
const EditNotes = ({
  notes, setNotes
}) => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    if (title && details) {
      const newNotes = notes.map((note) =>
        note.id === id ? { ...note, title, details,date } : note
      );
      setNotes(newNotes);
      navigate("/");
    }
  };

  const deleteNote = () => {

    if (window.confirm("Are you sure you want to delete this note?")) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    navigate("/");
    } 
  };




  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button onClick={handleForm} className="btn lg primary">
          Save
        </button>
        <button onClick={deleteNote} className="btn danger">
          <RiDeleteBin6Line />
        </button>
      </header>

      <form action="" className="create-note__form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          name=""
          id=""
          rows="28"
          placeholder="Take a note..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNotes;
