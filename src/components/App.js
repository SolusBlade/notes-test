import { useEffect, useState } from "react";
import SearchBox from "./SearchBox/SearchBox";
import Sidebar from "./Sidebar/Sidebar";
import Workspace from "./Workspace/Workspace";
import { addNoteApi, getAllNotesApi, removeNoteApi } from "../services/notesApi";
import Context from "../services/Context";



function App() {
  const [notes, setNotes] = useState([])
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    getAllNotesApi().then(r=> setNotes(r.records));
  }, [])

  const hendleAddNote = () => {
    addNoteApi().then(r => setNotes((prev) => [...prev, r.record]));
  }
  const removeNote = (id) => {
    removeNoteApi(id).then(() => {
      setNotes(prev => prev.filter(item => item.id !== id));
      setCurrentNote(null);
    });
  }

  const value = {
    notes,
    currentNote,
    setCurrentNote,
    hendleAddNote,
    removeNote,
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
