import NoteProp from "./props/notesProp"
import { notesData } from "./data/notes"

function createNotes(data: any) {
    return (
        <NoteProp
            key={data.key}
            title={data.title}
            content={data.content}
        />
    )
}

export default function Notes() {
    return (
        <>
            {notesData.map(createNotes)}
        </>
    )
}