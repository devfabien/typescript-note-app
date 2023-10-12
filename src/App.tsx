import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
// import { data } from "./data"
import Split from "react-split";
import { nanoid } from "nanoid";
import { notesInt } from "./components/Interfaces";

export default function App() {
  const def: notesInt[] = [];
  const [notes, setNotes] = useState( def);
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );


  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type note's title here",
    };
    setNotes((prevNotes: notesInt[]) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }


  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="flex">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-200">
          <h1>You have no notes</h1>
          <button
            className="cursor-pointer bg-gray-700 text-white rounded-sm p-4"
            onClick={createNewNote}
          >
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
