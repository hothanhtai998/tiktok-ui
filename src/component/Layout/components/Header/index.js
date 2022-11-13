// import outside library
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

// import css
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';

//import logo
import images from '~/assets/images';

// import icon
import {
  faCircleXmark,
  faSearch,
  faSpinner,
  faSignIn,
  faEllipsisVertical,
  faEarthAsia,
  faKeyboard,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';

// import Button
import Button from '~/component/Button';

//
import AccountItems from '~/component/AccountItems';
import Menu from '~/component/Popper/Menu';

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcut',
  },
];

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}

        <img src={images.logo} alt='Tik-tok' />

        {/* Create prop message */}
        <Tippy
          visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex='-1' {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItems />
              </PopperWrapper>
            </div>
          )}
        >
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
        </Tippy>

        {/* navbar */}
        <div className={cx('action')}>
          <Button text>Upload</Button>
          <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
            Login
          </Button>

          <Menu items={MENU_ITEMS}>
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
