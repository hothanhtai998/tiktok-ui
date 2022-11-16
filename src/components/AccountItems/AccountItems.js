import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import styles from './AccountItems.module.scss';
import Image from '~/components/Image';
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

//kiểm tra hợp lệ của props
AccountItems.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItems;
