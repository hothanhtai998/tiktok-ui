/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

/* Inside Source */
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import Following from './../../../pages/Following/index';

const cx = classNames.bind(styles);
function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <img className={cx('avatar')} src='' alt='' />
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </header>
      <section className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>Nguyen Van A</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Nguyễn Văn A</p>
        <p className={cx('analytics')}>
          <span className={cx('value')}>
            <strong>8.2M </strong>
          </span>
          <span className={cx('label')}>Followers</span>
          <span className={cx('value')}>
            <strong>8.2M </strong>
          </span>
          <span className={cx('label')}>Likes</span>
        </p>
      </section>
    </div>
  );
}

export default AccountPreview;
