import { useEffect, useState } from "react";
import SearchBox from "./SearchBox/SearchBox";
import Sidebar from "./Sidebar/Sidebar";
import Workspace from "./Workspace/Workspace";
import {
  FIELD_ID,
  addNoteApi,
  getAllNotesApi,
  removeNoteApi,
  updateNoteApi,
} from '../services/notesApi';
import Context from '../services/Context';

function App() {
  const [notes, setNotes] = useState([]);
  const [query, setQuery] = useState("");
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    getAllNotesApi().then(r => setNotes(r.records));
  }, []);

  const filterNotes = () => {
    return notes.filter(({ values }) => values[FIELD_ID].startsWith(query));
  }

  const hendleUpdateNote = (id, newValue) => {
    updateNoteApi(id, newValue).then(r =>
      setNotes(prev =>
        prev.map(item => (item.id === r.record.id ? r.record : item))
      )
    );
  };

  const hendleAddNote = () => {
    addNoteApi().then(r => setNotes(prev => [...prev, r.record]));
  };

  const removeNote = id => {
    setCurrentNote(null);
    removeNoteApi(id).then(() => {
      setNotes(prev => prev.filter(item => item.id !== id));
    });
  };

  const value = {
    filterNotes,
    setQuery,
    currentNote,
    setCurrentNote,
    hendleAddNote,
    removeNote,
    hendleUpdateNote,
  };

  return (
    <Context.Provider value={value}>
      <div className="container">
        <SearchBox />
        <div className="workSpaceContainer">
          <Sidebar />
          <Workspace />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
