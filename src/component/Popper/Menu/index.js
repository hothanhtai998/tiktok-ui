import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
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

  return (
    <Tippy
      delay={[0, 700]}
      interactive
      placement='bottom-end'
      offset={[12, 8]}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <Header
                title='Language'
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      //set về trang 1 khi thoát hover từ trang 2
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
