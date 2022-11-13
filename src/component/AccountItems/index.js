import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItems() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src='' alt='' />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('user-name')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItems;
