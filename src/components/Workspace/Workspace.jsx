import { useContext, useState } from 'react';
import s from './Workspace.module.scss';
import Context from '../../services/Context';
import { FIELD_ID } from '../../services/notesApi';
import { formatDateInNote } from '../../services/formatText';

const Workspace = () => {
  const { currentNote } = useContext(Context);
  const { created_at: date, values } = currentNote || {};
  const [fieldValue, setFieldValue] = useState((values && values[FIELD_ID]));

  return (
    <div className={s.container}>
      {currentNote && (
        <>
          <p className={s.date}>{formatDateInNote(date)}</p>
          <textarea value={fieldValue} onChange={setFieldValue}></textarea>
        </>
      )}
    </div>
  );
};

export default Workspace;
