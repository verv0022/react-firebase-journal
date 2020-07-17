import React from 'react'
import firebase from '../firebase'
import './EntryForm.css'

export const EntryForm = ({ entry }) => {

    const [content, setContent] = React.useState(entry.content)

    const onEdit = () => {
        const db = firebase.firestore();
        db.collection('entries').doc(entry.id).set({ ...entry, content })
    }

    const onDelete = () => {
        const db = firebase.firestore();
        db.collection('entries').doc(entry.id).delete()
    }

    return (
        <div className='entryContainer' >

            <textarea className='entry' value={content} onChange={(event) => {
                setContent(event.target.value)
            }} />
            <div className='entryOptions'>
                <button className='editBtn' onClick={onEdit}>Update</button>
                <button className='delBtn' onClick={onDelete}>Delete</button>
            </div>

        </div>
    )
}