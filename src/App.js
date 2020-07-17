import React from 'react';
import './App.css';
import firebase from './firebase'
import { EntryForm } from './EntryForm/EntryForm'
import { NewEntryForm } from './NewEntryForm/NewEntryForm'
import Header from './Header/Header'

function App() {

  const [entries, setEntries] = React.useState([])

  React.useEffect(() => {

    const db = firebase.firestore().collection('entries')

    db.onSnapshot(snapshot => {
      const fetchedEntries = []

      snapshot.forEach(doc => {
        fetchedEntries.push({ ...doc.data(), id: doc.id })
      })
      setEntries(fetchedEntries)
    })

  }, [])

  return (
    <div>
      <Header />
      {entries.map(entry => (
        <EntryForm entry={entry} key={entry.id} />
      ))}
      <NewEntryForm />
    </div>
  );
}

export default App;
