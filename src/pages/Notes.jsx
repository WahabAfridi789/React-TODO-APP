import React, { useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';
import {MdClose} from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NoteItem from '../components/NoteItem.jsx';
const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);

  const [searchText, setSearchText] = useState('');

  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = (e) => {
    setFilteredNotes(notes.filter(note => {
      if (note.title.toLowerCase().match(searchText.toLowerCase())) {
        return note;
      }
      
    }));
  }

  useEffect(handleSearch, [searchText, notes]);

  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>My Notes</h2>}

        {showSearch && (
          <input
            type="text"
            autoFocus
            placeholder="Keyword..."
            onChange={(e) => {
              setSearchText(e.target.value);
              handleSearch();
            }}
          />
        )}
        <button
          onClick={() => setShowSearch((prevState) => !prevState)}
          className="btn"
        >
          {showSearch ? <MdClose /> : <CiSearch />}
        </button>
      </header>

      <div className="notes__container">
        {
          filteredNotes.length === 0 && (
            <div className="empty__notes">
              <h3>No notes found</h3>
            </div>
          )
        }
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link to="/create-note" className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
}

export default Notes