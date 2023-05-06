import { useContext } from 'react';
import ListItem from '../ListItem/ListItem';
import s from './Sidebar.module.scss';
import Context from '../../services/Context';

const items = [
  { id: '1', title: '1231', date: '11/05/2023', text: 'asfasfasfasfasfasfa' },
  { id: '1', title: '1231', date: '11/05/2023', text: 'asfasfasfasfasfasfa' },
  { id: '1', title: '1231', date: '11/05/2023', text: 'asfasfasfasfasfasfa' },
  { id: '1', title: '1231', date: '11/05/2023', text: 'asfasfasfasfasfasfa' },
  { id: '1', title: '1231', date: '11/05/2023', text: 'asfasfasfasfasfasfa' },
  { id: '1', title: '1231', date: '11/05/2023', text: 'asfasfasfasfasfasfa' },
  { id: '1', title: '1231', date: '11/05/2023', text: 'asfasfasfasfasfasfa' },
  { id: '1', title: '1231', date: '11/05/2023', text: 'asfasfasfasfasfasfa' },
  { id: '1', title: '1231', date: '11/05/2023', text: 'asfasfasfasfasfasfa' },
  { id: '1', title: '1231', date: '11/05/2023', text: 'asfasfasfasfasfasfa' },
  { id: '1', title: '1231', date: '11/05/2023', text: 'asfasfasfasfasfasfa' },
  { id: '1', title: '1231', date: '11/05/2023', text: 'asfasfasfasfasfasfa' },
  { id: '1', title: '1231', date: '11/05/2023', text: 'asfasfasfasfasfasfa' },
  { id: '1', title: '1231', date: '11/05/2023', text: 'asfasfasfasfasfasfa' },
];

const Sidebar = () => {
  const { notes } = useContext(Context);

  return (
    <ul className={s.sidebar}>
      {notes
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .map(item => (
          <ListItem key={item.id} item={item} />
        ))}
    </ul>
  );
};

export default Sidebar;
