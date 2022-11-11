import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//
import styles from './Header.module.scss';

//import logo
import images from '~/assets/images';
import {
  faCircleXmark,
  faSearch,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <div className={cx('logo')}>
          <img src={images.logo} alt='Tik-tok' />
        </div>
        {/* search */}
        <div className={cx('search')}>
          <input placeholder='Search accounts and video' spellCheck={false} />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          {/* loading */}
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        {/* navbar */}
        <div className={cx('action')}></div>
      </div>
    </header>
  );
}

export default Header;
