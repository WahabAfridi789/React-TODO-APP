
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import useCreateDate from '../components/useCreateDate.jsx';
const CreateNote = ({setNotes}) => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const date = useCreateDate();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && details) {
            const note = {
                id: uuid(),
                title, details,
                date: date
            };
            
            setNotes((prevNotes) => [...prevNotes, note]);
            navigate('/');
        }
        else {
            alert('Please fill out both fields');
        }
    }
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button onClick={handleSubmit} className="btn lg primary">Save</button>
      </header>

          <form action=""
              onSubmit={handleSubmit}
              className="create-note__form">
        <input
          type="text" value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          autoFocus
              />
              


        <textarea
          name=""
          id=""
          rows="20"
                  placeholder="Take a note..."
                  value={details}
                    onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
}

export default CreateNote