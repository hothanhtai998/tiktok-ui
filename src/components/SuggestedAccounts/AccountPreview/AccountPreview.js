/* Outside Source Library */
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

/* Inside Source */
import styles from '../SuggestedAccounts.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <img className={cx('avatar')} src='' alt='' />
        <Button primary>Follow</Button>
      </header>
    </div>
  );
}

export default AccountPreview;
