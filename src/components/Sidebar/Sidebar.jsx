import { useContext } from 'react';
import ListItem from '../ListItem/ListItem';
import s from './Sidebar.module.scss';
import Context from '../../services/Context';

const Sidebar = () => {
  const { filterNotes } = useContext(Context);
  const filteredNotes = filterNotes();

  return (
    <ul className={s.sidebar}>
      {filteredNotes
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .map(item => (
          <ListItem key={item.id} item={item} />
        ))}
    </ul>
  );
};

export default Sidebar;
