import React from 'react'
import firebase from '../firebase'
import './NewEntryForm.css'

export const NewEntryForm = () => {

    const [newEntry, setNewEntry] = React.useState([])

    const onCreate = () => {
        const db = firebase.firestore();
        db.collection('entries').add({ content: newEntry })
    }

    return (
        <div className='footer'>
            <div className="inputWrapper">
                <input className='postInput' value={newEntry} onChange={(event => setNewEntry(event.target.value))} />
                <button className='postBtn' onClick={onCreate}>Post</button>
            </div>
        </div>
    )

}


