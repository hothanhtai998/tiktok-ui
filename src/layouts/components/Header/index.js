// import outside library
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

// import css
import styles from './Header.module.scss';

//import logo
import images from '~/assets/images';

// import icon
import {
  faSignIn,
  faEllipsisVertical,
  faEarthAsia,
  faKeyboard,
  faCircleQuestion,
  faCloudUpload,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';

// import Button
import Button from '~/component/Button';

//
import Menu from '~/component/Popper/Menu';
import Image from '~/component/Image';
import Search from '~/layouts/Search';
import config from '~/config';

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcut',
  },
];

const cx = classNames.bind(styles);

function Header() {
  const currentUser = true;

  // handler logic
  const handlerMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        return;
      default:
        throw new Error('Invalid case');
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@name',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coins',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Logout',
      to: '/logout',
      separate: true,
    },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}

        <Link to={config.routes.home}>
          <img className={cx('logo-link')} src={images.logo} alt='Tik-tok' />
        </Link>

        {/* Search */}
        <Search />
        {/* Kiểm tra đăng nhập */}
        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy content='Upload video' placement='bottom' delay={[0, 200]}>
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Login
              </Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handlerMenuChange}
            // hideOnClick={true}
          >
            {currentUser ? (
              <Image
                src='data:image/svg+xml;base64,CjxzdmgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1OCA1OCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBpZD0iUGFnZS0xIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGlkPSIwMDYtLS1BUi1QaG9uZS1Qcm9qZWN0aW9uIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTAgNTJ2NGMwIDEuMTA0NTY5NS44OTU0MzA1IDIgMiAyaDU0YzEuMTA0NTY5NSAwIDItLjg5NTQzMDUgMi0ydi00eiIgZmlsbD0iIzI5ODBiYSIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTU4IDUyYy0uMDE1NjgzMy41NDY0MjM3LS4yNDc5MDkxIDEuMDY0MjA4Mi0uNjQ1NTM3OSAxLjQzOTMyOTgtLjM5NzYyODkuMzc1MTIxNS0uOTI4MDUxOS41NzY4MTctMS40NzQ0NjIxLjU2MDY3MDJoLTUzLjc2Yy0uNzQ1NTAyNzQuMDM5OTQtMS40NTA4NjMyOC0uMzM5OTEzOS0xLjgyNzgyNDU2LS45ODQzMjgxLS4zNzY5NjEyOC0uNjQ0NDE0My0uMzYyMzY0NzItMS40NDU0MTk1LjAzNzgyNDU2LTIuMDc1NjcxOWw3LjMxLTExLjA2Yy44MDc4NDAwMy0xLjE4NjYyMTIgMi4xNTQ1NDM3MS0xLjg5MTg1ODggMy41OS0xLjg4aDQuNzdsNSA3aDE2bDUtN2g0Ljc3YzEuNDM1NDU2My0uMDExODU4OCAyLjc4MjE2LjY5MzM3ODggMy41OSAxLjg4IDcuOTEgMTEuOTcgNy42NCAxMS4zMiA3LjY0IDEyLjEyeiIgZmlsbD0iI2IwZDNmMCIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTU4IDUyYy0uMDE1NjgzMy41NDY0MjM3LS4yNDc5MDkxIDEuMDY0MjA4Mi0uNjQ1NTM3OSAxLjQzOTMyOTgtLjM5NzYyODkuMzc1MTIxNS0uOTI4MDUxOS41NzY4MTctMS40NzQ0NjIxLjU2MDY3MDJoLTM4LjcyYzIuMTMxMzE1Ni0zLjQ0NTM0MTggNC44NDg5NDgxLTYuNDkxMjU2MiA4LjAzLTloMTEuODFsNS03aDQuNzdjMS40MzU0NTYzLS4wMTE4NTg4IDIuNzgyMTYuNjkzMzc4OCAzLjU5IDEuODggNy45MSAxMS45NyA3LjY0IDExLjMyIDcuNjQgMTIuMTJ6IiBmaWxsPSIjOTBiYWUxIi8+PHBhdGggaWQ9IlNoYXBlIiBkPSJtMzcgNDZoLTE2Yy0uMzM3NTc2OS0uMDAwMDQ0OC0uNjUyMzQ1NS0uMTcwNDAzNC0uODM3LS40NTNsLTE3LTI2Yy0uMjAxODY3MDctLjI5OTA2MjctLjIyNjk3MzQ1LS42ODM2ODExLS4wNjU2OTcwMS0xLjAwNjQ0ODMuMTYxMjc2NDUtLjMyMjc2NzMuNDgzOTIyOTktLjUzMzYyNDcuODQ0MjgzNzgtLjU1MTc2MDIuMzYwMzYwOC0uMDE4MTM1NC43MDI1NDY2Ny4xNTkyNjM4Ljg5NTQxMzIzLjQ2NDIwODVsMTYuNzA0IDI1LjU0N2gxNC45MThsMTYuNy0yNS41NDdjLjE5Mjg2NjYtLjMwNDk0NDcuNTM1MDUyNC0uNDgyMzQzOS44OTU0MTMyLS40NjQyMDg1LjM2MDM2MDguMDE4MTM1NS42ODMwMDc0LjIyODk5MjkuODQ0MjgzOC41NTE3NjAyLjE2MTI3NjUuMzIyNzY3Mi4xMzYxNzAxLjcwNzM4NTYtLjA2NTY5NyAxLjAwNjQ0ODNsLTE3IDI2Yy0uMTgzODc2Ny4yODE0MTI0LS40OTY4NDI4LjQ1MTYwODktLjgzMy40NTN6IiBmaWxsPSIjZjllYWIwIi8+PHBhdGggaWQ9IlNoYXBlIiBkPSJtNDIgNy4zdjEzLjRjLjAwMDUwMDEuMTgzMjI3LS4wOTkyNTk4LjM1MjA1MTQtLjI2LjQ0bC0xMS43NCA2LjMyLS43Ni40MWMtLjE1LjA4LS4zMy4wOC0uNDggMGwtLjc2LS40MS0xMS43NC02LjMyYy0uMTYwNzQwMi0uMDg3OTQ4Ni0uMjYwNTAwMS0uMjU2NzczLS4yNi0uNDR2LTEzLjRjLS4wMDA1MDAxLS4xODMyMjY5Ny4wOTkyNTk4LS4zNTIwNTE0MS4yNi0uNDRsLjc5LS40MyAxMS43MS02LjNjLjE1LS4wOC4zMy0uMDguNDggMGwxMS43MSA2LjMuNzkuNDNjLjE2MDc0MDIuMDg3OTQ4NTkuMjYwNTAwMS4yNTY3NzMwMy4yNi40NHoiIGZpbGw9IiNmZjUzNjQiLz48ZyBmaWxsPSIjZGY0ZDYwIj48cGF0aCBpZD0iU2hhcGUiIGQ9Im0zMi41MjYgMTAuOTY5LTMuNTI2IDEuODk2LTMuNTI2LTEuOWMtLjQ4NjU2MjktLjI2MTc4My0xLjA5MzIxNy0uMDc5NTYyOS0xLjM1NS40MDdzLS4wNzk1NjI5IDEuMDkzMjE3LjQwNyAxLjM1NWwzLjQ3NCAxLjg3M3YyLjRjMCAuNTUyMjg0Ny40NDc3MTUzIDEgMSAxczEtLjQ0NzcxNTMgMS0xdi0yLjRsMy40NzQtMS44NjdjLjQ4NjU2MjktLjI2MTc4My42Njg3ODMtLjg2ODQzNzEuNDA3LTEuMzU1cy0uODY4NDM3MS0uNjY4NzgzLTEuMzU1LS40MDd6Ii8+PHBhdGggaWQ9IlNoYXBlIiBkPSJtMjAuODggOS42MmMtLjEyMzMzMzUuMjM0NzEwMTgtLjMzNTU3NzQuNDEwMjA5Ni0uNTg5Mjc2OS40ODcyNTkxLS4yNTM2OTk0LjA3NzA0OTQtLjUyNzY5NDMuMDQ5MjIyNS0uNzYwNzIzMS0uMDc3MjU5MWwtMy41My0xLjl2LS44M2MtLjAwMDUwMDEtLjE4MzIyNjk3LjA5OTI1OTgtLjM1MjA1MTQxLjI2LS40NGwuNzktLjQzIDMuNDIgMS44NGMuNDg0OTI3OC4yNjA0NjIwMS42NjgxOC44NjM4NTM0Mi40MSAxLjM1eiIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTQyIDcuM3YuODRsLTMuNTMgMS44OWMtLjQ3OTU3NC4yMTUyNzk1LTEuMDQzOTUyMy4wMjI0OTc3LTEuMjkxNjAzMy0uNDQxMTg5MTYtLjI0NzY1MDktLjQ2MzY4Njg1LS4wOTQwMTQ1LTEuMDM5OTUzOC4zNTE2MDMzLTEuMzE4ODEwODRsMy40Mi0xLjg0Ljc5LjQzYy4xNjA3NDAyLjA4Nzk0ODU5LjI2MDUwMDEuMjU2NzczMDMuMjYuNDR6Ii8+PHBhdGggaWQ9IlNoYXBlIiBkPSJtMzAgMjN2NC40NmwtLjc2LjQxYy0uMTUuMDgtLjMzLjA4LS40OCAwbC0uNzYtLjQxdi00LjQ2YzAtLjU1MjI4NDcuNDQ3NzE1My0xIDEtMXMxIC40NDc3MTUzIDEgMXoiLz48L2c+PHBhdGggaWQ9IlNoYXBlIiBkPSJtNTggNTJjLS4wMTU2ODMzLjU0NjQyMzctLjI0NzkwOTEgMS4wNjQyMDgyLS42NDU1Mzc5IDEuNDM5MzI5OC0uMzk3NjI4OS4zNzUxMjE1LS45MjgwNTE5LjU3NjgxNy0xLjQ3NDQ2MjEuNTYwNjcwMmgtMy44OGwtMS44OS00LjMxaC0uMTFsLTIuOTItLjQ5Yy0uNzMxMjAxMy0uMTIxMjQ1LTEuMzM1MzkyOS0uNjM2OTI0NS0xLjU3LTEuMzRsLTEuMDctMy4yMWMtLjMyMDE4Ni0uOTQ2MDY2NS4xMDY2Njg3LTEuOTgzMzIzNCAxLTIuNDNsMS4wNi0uNTNoLjExbC0xLjYxLTMuNjloMS43N2MxLjQzNTQ1NjMtLjAxMTg1ODggMi43ODIxNi42OTMzNzg4IDMuNTkgMS44OCA3LjkxIDExLjk3IDcuNjQgMTEuMzIgNy42NCAxMi4xMnoiIGZpbGw9IiMzYjk3ZDMiLz48cGF0aCBpZD0iU2hhcGUiIGQ9Im0xNCAzNy45OTk4NTI4LTcgMTYuMDAwMTQ3MmgtNC44OGMtLjc0NTUwMjc0LjAzOTk0LTEuNDUwODYzMjgtLjMzOTkxMzktMS44Mjc4MjQ1Ni0uOTg0MzI4MS0uMzc2OTYxMjgtLjY0NDQxNDMtLjM2MjM2NDcyLTEuNDQ1NDE5NS4wMzc4MjQ1Ni0yLjA3NTY3MTlsNy4zMS0xMS4wNmMuODA3ODQwMDMtMS4xODY2MjEyIDIuMTU0NTQzNzEtMS44OTE4NTg4IDMuNTktMS44OHoiIGZpbGw9IiMzYjk3ZDMiLz48L2c+PC9nPjwvc3ZnPg=='
                alt=''
                className={cx('user-avatar')}
                fallback='data:image/svg+xml;base64,CjxzdmcgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1OCA1OCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBpZD0iUGFnZS0xIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGlkPSIwMDYtLS1BUi1QaG9uZS1Qcm9qZWN0aW9uIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTAgNTJ2NGMwIDEuMTA0NTY5NS44OTU0MzA1IDIgMiAyaDU0YzEuMTA0NTY5NSAwIDItLjg5NTQzMDUgMi0ydi00eiIgZmlsbD0iIzI5ODBiYSIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTU4IDUyYy0uMDE1NjgzMy41NDY0MjM3LS4yNDc5MDkxIDEuMDY0MjA4Mi0uNjQ1NTM3OSAxLjQzOTMyOTgtLjM5NzYyODkuMzc1MTIxNS0uOTI4MDUxOS41NzY4MTctMS40NzQ0NjIxLjU2MDY3MDJoLTUzLjc2Yy0uNzQ1NTAyNzQuMDM5OTQtMS40NTA4NjMyOC0uMzM5OTEzOS0xLjgyNzgyNDU2LS45ODQzMjgxLS4zNzY5NjEyOC0uNjQ0NDE0My0uMzYyMzY0NzItMS40NDU0MTk1LjAzNzgyNDU2LTIuMDc1NjcxOWw3LjMxLTExLjA2Yy44MDc4NDAwMy0xLjE4NjYyMTIgMi4xNTQ1NDM3MS0xLjg5MTg1ODggMy41OS0xLjg4aDQuNzdsNSA3aDE2bDUtN2g0Ljc3YzEuNDM1NDU2My0uMDExODU4OCAyLjc4MjE2LjY5MzM3ODggMy41OSAxLjg4IDcuOTEgMTEuOTcgNy42NCAxMS4zMiA3LjY0IDEyLjEyeiIgZmlsbD0iI2IwZDNmMCIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTU4IDUyYy0uMDE1NjgzMy41NDY0MjM3LS4yNDc5MDkxIDEuMDY0MjA4Mi0uNjQ1NTM3OSAxLjQzOTMyOTgtLjM5NzYyODkuMzc1MTIxNS0uOTI4MDUxOS41NzY4MTctMS40NzQ0NjIxLjU2MDY3MDJoLTM4LjcyYzIuMTMxMzE1Ni0zLjQ0NTM0MTggNC44NDg5NDgxLTYuNDkxMjU2MiA4LjAzLTloMTEuODFsNS03aDQuNzdjMS40MzU0NTYzLS4wMTE4NTg4IDIuNzgyMTYuNjkzMzc4OCAzLjU5IDEuODggNy45MSAxMS45NyA3LjY0IDExLjMyIDcuNjQgMTIuMTJ6IiBmaWxsPSIjOTBiYWUxIi8+PHBhdGggaWQ9IlNoYXBlIiBkPSJtMzcgNDZoLTE2Yy0uMzM3NTc2OS0uMDAwMDQ0OC0uNjUyMzQ1NS0uMTcwNDAzNC0uODM3LS40NTNsLTE3LTI2Yy0uMjAxODY3MDctLjI5OTA2MjctLjIyNjk3MzQ1LS42ODM2ODExLS4wNjU2OTcwMS0xLjAwNjQ0ODMuMTYxMjc2NDUtLjMyMjc2NzMuNDgzOTIyOTktLjUzMzYyNDcuODQ0MjgzNzgtLjU1MTc2MDIuMzYwMzYwOC0uMDE4MTM1NC43MDI1NDY2Ny4xNTkyNjM4Ljg5NTQxMzIzLjQ2NDIwODVsMTYuNzA0IDI1LjU0N2gxNC45MThsMTYuNy0yNS41NDdjLjE5Mjg2NjYtLjMwNDk0NDcuNTM1MDUyNC0uNDgyMzQzOS44OTU0MTMyLS40NjQyMDg1LjM2MDM2MDguMDE4MTM1NS42ODMwMDc0LjIyODk5MjkuODQ0MjgzOC41NTE3NjAyLjE2MTI3NjUuMzIyNzY3Mi4xMzYxNzAxLjcwNzM4NTYtLjA2NTY5NyAxLjAwNjQ0ODNsLTE3IDI2Yy0uMTgzODc2Ny4yODE0MTI0LS40OTY4NDI4LjQ1MTYwODktLjgzMy40NTN6IiBmaWxsPSIjZjllYWIwIi8+PHBhdGggaWQ9IlNoYXBlIiBkPSJtNDIgNy4zdjEzLjRjLjAwMDUwMDEuMTgzMjI3LS4wOTkyNTk4LjM1MjA1MTQtLjI2LjQ0bC0xMS43NCA2LjMyLS43Ni40MWMtLjE1LjA4LS4zMy4wOC0uNDggMGwtLjc2LS40MS0xMS43NC02LjMyYy0uMTYwNzQwMi0uMDg3OTQ4Ni0uMjYwNTAwMS0uMjU2NzczLS4yNi0uNDR2LTEzLjRjLS4wMDA1MDAxLS4xODMyMjY5Ny4wOTkyNTk4LS4zNTIwNTE0MS4yNi0uNDRsLjc5LS40MyAxMS43MS02LjNjLjE1LS4wOC4zMy0uMDguNDggMGwxMS43MSA2LjMuNzkuNDNjLjE2MDc0MDIuMDg3OTQ4NTkuMjYwNTAwMS4yNTY3NzMwMy4yNi40NHoiIGZpbGw9IiNmZjUzNjQiLz48ZyBmaWxsPSIjZGY0ZDYwIj48cGF0aCBpZD0iU2hhcGUiIGQ9Im0zMi41MjYgMTAuOTY5LTMuNTI2IDEuODk2LTMuNTI2LTEuOWMtLjQ4NjU2MjktLjI2MTc4My0xLjA5MzIxNy0uMDc5NTYyOS0xLjM1NS40MDdzLS4wNzk1NjI5IDEuMDkzMjE3LjQwNyAxLjM1NWwzLjQ3NCAxLjg3M3YyLjRjMCAuNTUyMjg0Ny40NDc3MTUzIDEgMSAxczEtLjQ0NzcxNTMgMS0xdi0yLjRsMy40NzQtMS44NjdjLjQ4NjU2MjktLjI2MTc4My42Njg3ODMtLjg2ODQzNzEuNDA3LTEuMzU1cy0uODY4NDM3MS0uNjY4NzgzLTEuMzU1LS40MDd6Ii8+PHBhdGggaWQ9IlNoYXBlIiBkPSJtMjAuODggOS42MmMtLjEyMzMzMzUuMjM0NzEwMTgtLjMzNTU3NzQuNDEwMjA5Ni0uNTg5Mjc2OS40ODcyNTkxLS4yNTM2OTk0LjA3NzA0OTQtLjUyNzY5NDMuMDQ5MjIyNS0uNzYwNzIzMS0uMDc3MjU5MWwtMy41My0xLjl2LS44M2MtLjAwMDUwMDEtLjE4MzIyNjk3LjA5OTI1OTgtLjM1MjA1MTQxLjI2LS40NGwuNzktLjQzIDMuNDIgMS44NGMuNDg0OTI3OC4yNjA0NjIwMS42NjgxOC44NjM4NTM0Mi40MSAxLjM1eiIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTQyIDcuM3YuODRsLTMuNTMgMS44OWMtLjQ3OTU3NC4yMTUyNzk1LTEuMDQzOTUyMy4wMjI0OTc3LTEuMjkxNjAzMy0uNDQxMTg5MTYtLjI0NzY1MDktLjQ2MzY4Njg1LS4wOTQwMTQ1LTEuMDM5OTUzOC4zNTE2MDMzLTEuMzE4ODEwODRsMy40Mi0xLjg0Ljc5LjQzYy4xNjA3NDAyLjA4Nzk0ODU5LjI2MDUwMDEuMjU2NzczMDMuMjYuNDR6Ii8+PHBhdGggaWQ9IlNoYXBlIiBkPSJtMzAgMjN2NC40NmwtLjc2LjQxYy0uMTUuMDgtLjMzLjA4LS40OCAwbC0uNzYtLjQxdi00LjQ2YzAtLjU1MjI4NDcuNDQ3NzE1My0xIDEtMXMxIC40NDc3MTUzIDEgMXoiLz48L2c+PHBhdGggaWQ9IlNoYXBlIiBkPSJtNTggNTJjLS4wMTU2ODMzLjU0NjQyMzctLjI0NzkwOTEgMS4wNjQyMDgyLS42NDU1Mzc5IDEuNDM5MzI5OC0uMzk3NjI4OS4zNzUxMjE1LS45MjgwNTE5LjU3NjgxNy0xLjQ3NDQ2MjEuNTYwNjcwMmgtMy44OGwtMS44OS00LjMxaC0uMTFsLTIuOTItLjQ5Yy0uNzMxMjAxMy0uMTIxMjQ1LTEuMzM1MzkyOS0uNjM2OTI0NS0xLjU3LTEuMzRsLTEuMDctMy4yMWMtLjMyMDE4Ni0uOTQ2MDY2NS4xMDY2Njg3LTEuOTgzMzIzNCAxLTIuNDNsMS4wNi0uNTNoLjExbC0xLjYxLTMuNjloMS43N2MxLjQzNTQ1NjMtLjAxMTg1ODggMi43ODIxNi42OTMzNzg4IDMuNTkgMS44OCA3LjkxIDExLjk3IDcuNjQgMTEuMzIgNy42NCAxMi4xMnoiIGZpbGw9IiMzYjk3ZDMiLz48cGF0aCBpZD0iU2hhcGUiIGQ9Im0xNCAzNy45OTk4NTI4LTcgMTYuMDAwMTQ3MmgtNC44OGMtLjc0NTUwMjc0LjAzOTk0LTEuNDUwODYzMjgtLjMzOTkxMzktMS44Mjc4MjQ1Ni0uOTg0MzI4MS0uMzc2OTYxMjgtLjY0NDQxNDMtLjM2MjM2NDcyLTEuNDQ1NDE5NS4wMzc4MjQ1Ni0yLjA3NTY3MTlsNy4zMS0xMS4wNmMuODA3ODQwMDMtMS4xODY2MjEyIDIuMTU0NTQzNzEtMS44OTE4NTg4IDMuNTktMS44OHoiIGZpbGw9IiMzYjk3ZDMiLz48L2c+PC9nPjwvc3ZnPg=='
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
