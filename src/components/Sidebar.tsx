import { notesInt, props } from "./Interfaces";

export default function Sidebar(
  props: props,

) {
   
  const noteElements = props.notes.map((note: notesInt) => (
    <div key={note.id}>
      <div
        className={`overflow-hidden w-full cursor-pointer py-4 flex justify-between items-center ${
          note.id === props.currentNote.id ? "bg-gray-700 text-white" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        
        <h4 className="text-gray-300 font-bold">{note.body.split("\n")[0]}</h4>
      </div>
    </div>
  ));

  return (
    <section className="overflow-y-auto w-1/5 h-screen">
      <div className="flex justify-around items-center text-lg">
        <h3>Notes</h3>
        <button
          className="cursor-pointer bg-gray-700 text-white rounded-sm h-8 w-8"
          onClick={props.newNote}
        >
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
