import { useCallback, useContext, useRef } from 'react';
import s from './Workspace.module.scss';
import Context from '../../services/Context';
import { FIELD_ID } from '../../services/notesApi';
import { formatDateInNote } from '../../services/formatText';
import debounce from 'lodash.debounce';

const Workspace = () => {
  const { currentNote, setCurrentNote, hendleUpdateNote } = useContext(Context);
  const { id, updated_at: date, values } = currentNote || {};

  const debouncedUpdateRef = useRef(
    debounce((id, value) => {
      hendleUpdateNote(id, value);
    }, 500)
  );

  const handleChangeText = useCallback(
    e => {
      const value = e.target.value;
      setCurrentNote(prev => {
        return { ...prev, values: { [FIELD_ID]: value } };
      });
      debouncedUpdateRef.current(id, value);
    },
    [id, setCurrentNote]
  );

  return (
    <div className={s.container}>
      {currentNote && (
        <>
          <p className={s.date}>{formatDateInNote(date)}</p>
          <textarea
            className={s.text}
            value={values[FIELD_ID]}
            onChange={handleChangeText}
          ></textarea>
        </>
      )}
    </div>
  );
};

export default Workspace;
