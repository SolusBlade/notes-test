import Icon from "../Icon/Icon";
import s from "./SearchBox.module.scss";
import { useContext } from "react";
import Context from "../../services/Context";

const SearchBox = () => {
	const { currentNote, hendleAddNote, removeNote } = useContext(Context);
	
	return (
    <div className={s.box}>
      <div className={s.btnWrap}>
        <button className={s.btn} onClick={hendleAddNote}>
          <Icon name={'icon-plus'} width={20} height={20} className={s.icon} />
        </button>
        <button
          className={s.btn}
          onClick={() => removeNote(currentNote.id)}
          disabled={currentNote === null ? true : false}
        >
          <Icon name={'icon-bin'} width={20} height={20} className={s.icon} />
        </button>
        <button
          className={s.btn}
          disabled={currentNote === null ? true : false}
        >
          <Icon
            name={'icon-pencil'}
            width={20}
            height={20}
            className={s.icon}
          />
        </button>
      </div>
      <label>
        <Icon name={'icon-search'} width={20} height={20} className={s.icon} />
        <input name="search" type="text" />
      </label>
    </div>
  );
};

export default SearchBox;
