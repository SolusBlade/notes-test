import {useContext, useRef} from 'react';
import { formatDate } from '../../services/formatDate';
import { FIELD_ID } from '../../services/notesApi';
import { splitText, trimStr} from '../../services/formatText';
import s from './ListItem.module.scss';
import Context from '../../services/Context';
import clsx from 'clsx';

const ListItem = ({ item }) => {
  const contentRef = useRef(null);
  const { currentNote, setCurrentNote } = useContext(Context);
  
  const { created_at: date, values, id } = item;

  const formattedDate = formatDate(date);
  let title = '';
  let content = '';

  if (values && values[FIELD_ID]) {
    const { title: t, content: c } = splitText(values[FIELD_ID]);
    title = t;
    content = c;
  }


  return (
    <li
      className={clsx(s.item, currentNote?.id === id && s.currentItem)}
      ref={contentRef}
      onClick={() => setCurrentNote(item)}
    >
      <strong className={s.title}>{title}</strong>
      <p className={s.text}>
        <span className={s.date}>{formattedDate}</span>
        <span className={s.content}>{trimStr(content)}</span>
      </p>
    </li>
  );
};

export default ListItem;
