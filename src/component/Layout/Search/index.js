import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import {
  faCircleXmark,
  faSearch,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import AccountItems from '~/component/AccountItems';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const searchInputRef = useRef();

  useEffect(() => {
    if (!searchValue.trim()) return setSearchResult([]);
    // encodeURIComponent: xử lý mã hoá
    setLoading(true);
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        searchValue
      )}&type=less`
    )
      .then((response) => response.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [searchValue]);

  const handlerClearSearch = () => {
    setSearchValue('');
    setSearchResult([]);
    searchInputRef.current.focus();
  };

  const handlerHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      visible={showResult && searchResult.length > 0}
      interactive
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex='-1' {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult !== '' &&
              searchResult.map((result) => (
                <AccountItems key={result.id} data={result} />
              ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handlerHideResult}
    >
      {/* search */}
      <div className={cx('search')}>
        <input
          ref={searchInputRef}
          value={searchValue}
          placeholder='Search accounts and video'
          spellCheck={false}
          onFocus={() => setShowResult(true)}
          onKeyDown={(e) => {
            if (searchValue.length === 0 && e.keyCode === 32) {
              e.preventDefault();
            }
          }}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handlerClearSearch}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {/* loading */}
        {loading && (
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
        )}

        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
