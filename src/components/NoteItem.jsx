import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({note}) => {
    return (
      <Link to={`/edit-note/${note.id}`} className="note"> 
          <h3>{note.title.length>50?(note.title.substr(0,50))+'...':note.title}</h3>
          <p>{note.date}</p>
          <p>{note.category}</p>
        </Link>
      
  )
}

export default NoteItem