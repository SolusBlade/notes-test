import {useContext, useRef} from 'react';
import { formatDate } from '../../services/formatDate';
import { FIELD_ID } from '../../services/notesApi';
import { splitText, trimStr} from '../../services/formatText';
import s from './ListItem.module.scss';
import Context from '../../services/Context';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

const ListItem = ({ item }) => {
  const contentRef = useRef(null);
  const { currentNote, setCurrentNote } = useContext(Context);
  const isMob = useMediaQuery({ query: '(max-width: 767px)' });

  const { updated_at: date, values, id } = item;

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
      onClick={() =>
        setCurrentNote({
          ...item,
          values: { [FIELD_ID]: values[FIELD_ID] ? values[FIELD_ID] : '' },
        })
      }
    >
      <strong className={s.title}>{trimStr(title, isMob ? 20 : 30)}</strong>
      <p className={s.text}>
        <span className={s.date}>{formattedDate}</span>
        <span className={s.content}>{trimStr(content, isMob ? 20 : 30)}</span>
      </p>
    </li>
  );
};

export default ListItem;
