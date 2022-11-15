import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import { Wrapper as PopperWrapper } from '~/component/Popper';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultFn,
}) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1]; //lấy phần tử cuối cùng của danh sách

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children; //kiểm tra xem có phần tử con hay không

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              //nếu có thì thêm phần tử đó vào state
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handlerBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  // Reset To First Page
  const handlerReset = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      hideOnClick={hideOnClick}
      delay={[0, 700]}
      interactive
      placement='bottom-end'
      offset={[12, 8]}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <Header title={current.title} onBack={handlerBack} />
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      //set về trang 1 khi thoát hover từ trang 2
      onHide={handlerReset}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
