import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Component = 'button';

  const props = {
    onClick,
    ...passProps, //những prop được tự động thêm vào sau
  };

  if (disabled) {
    delete props.onClick;
  }

  if (to) {
    props.to = to;
    Component = Link; //nếu chứa từ khoá to='' thì sẽ thành link nội bộ
  } else if (href) {
    props.href = href;
    Component = 'a'; //nếu chứa từ khoá href='' thì sẽ thành link a
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    text,
    rounded,
    disabled,
    small,
    large,
  });

  return (
    //mặc định là button
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  );
}

export default Button;
