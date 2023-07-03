import { NoteType } from "../types/cardType";

export default function NoteProp(props:NoteType){
    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
        </>
    )
}