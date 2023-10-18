import {useState} from "react"
import ReactMde from "react-mde"
import Showdown from "showdown"
import { notesInt} from "./Interfaces"

export default function Editor({ currentNote, updateNote }:{currentNote:notesInt,updateNote:(text:string)=>void}) {
    const [selectedTab, setSelectedTab] = useState<"write"|"preview">("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })  

    return (
        <section className="overflow-y-auto w-4/5 h-screen">
            <ReactMde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    )
}