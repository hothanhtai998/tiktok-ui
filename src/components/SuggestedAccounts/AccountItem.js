/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

/* Inside Source */
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex='-1' {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        interactive
        offset={[-24, 0]}
        delay={[800, 0]}
        render={renderPreview}
        placement='bottom'
      >
        <div className={cx('account-item')}>
          <img className={cx('avatar')} src='./sda' alt='avatar1' />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>Nguyen Van A</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Nguyễn Văn A</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
