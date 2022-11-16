import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

// import * as request from '~/utils/request';
import * as searchService from '~/services/searchService';

import { SearchIcon } from '~/components/Icons';

import AccountItems from '~/components/AccountItems';

import styles from './Search.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const searchInputRef = useRef();

  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debouncedValue.trim()) return setSearchResult([]);
    // encodeURIComponent: xử lý mã hoá
    setLoading(true);

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchService.searchApi(debouncedValue);
      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();
    // //cách 1: gọi request dùng async / await
    // const fetchApi = async () => {
    //   try {
    //     const res = await request.get('users/search', {
    //       params: {
    //         q: debouncedValue,
    //         type: 'less',
    //       },
    //     });
    //     setSearchResult(res.data);
    //     setLoading(false);
    //   } catch (error) {
    //     setLoading(false);
    //   }
    // };

    // fetchApi();

    //cách 2: gọi request bằng axios
    // request
    //   .get('users/search', {
    //     params: {
    //       q: debouncedValue,
    //       type: 'less',
    //     },
    //   })
    //   .then((res) => {
    //     setSearchResult(res.data);
    //     setLoading(false);
    //   })
    //   .catch(() => setLoading(false));
  }, [debouncedValue]);

  const handlerClearSearch = () => {
    setSearchValue('');
    setSearchResult([]);
    searchInputRef.current.focus();
  };

  const handlerHideResult = () => {
    setShowResult(false);
  };

  const handlerChangeInput = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) setSearchValue(e.target.value);
  };

  return (
    <>
      <HeadlessTippy
        appendTo={() => document.body}
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
            // onKeyDown={(e) => {
            //   if (searchValue.length === 0 && e.keyCode === 32) {
            //     e.preventDefault();
            //   }
            // }}
            onChange={handlerChangeInput}
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

          <button
            className={cx('search-btn')}
            onMouseDown={(e) => {
              e.preventDefault();
            }}
          >
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </>
  );
}

export default Search;
