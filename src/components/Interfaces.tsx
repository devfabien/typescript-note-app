export interface notesInt{
    id:string,
    body:string
}
export interface props{
    notes: notesInt[],
    currentNote: notesInt,
    setCurrentNoteId: (id: string) => void,
    newNote:()=> void
    deleteNote:(id:string)=>void
}