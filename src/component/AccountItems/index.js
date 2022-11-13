import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/component/Image';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function AccountItems({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar} alt='' />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
          )}
        </p>
        <span className={cx('user-name')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItems;
