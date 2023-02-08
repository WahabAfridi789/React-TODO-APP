import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes.jsx";
import CreateNote from "./pages/CreateNote.jsx";
import EditNotes from "./pages/EditNotes.jsx";
import dummyNotes from "./dummy_notes.js";

import {useEffect, useState} from 'react';
const App = () => {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    return (
      <main id="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes notes={notes} />} />
            <Route
              path="/create-note"
              element={<CreateNote setNotes={setNotes} />}
            />
            <Route
              path="/edit-note/:id"
                        element={<EditNotes 
                            notes={notes}
                            setNotes={setNotes}/>}
            />
          </Routes>
        </BrowserRouter>
      </main>
    );
};

export default App;
