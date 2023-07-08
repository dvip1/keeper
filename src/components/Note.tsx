import NoteProp from "./props/notesProp"
import { notesData } from "./data/notes"
import { NoteType } from "./types/cardType"

export default function Notes() {
    return (
        <div className="wrapper ">
            <main className="content container">
                {notesData.map(
                    (data: NoteType) => (
                        <NoteProp
                            key={data.key}
                            title={data.title}
                            content={data.content}
                        />
                    )
                )}
            </main>
        </div>
    )
}