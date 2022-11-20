import styles from './main.module.scss'
import {useRouter} from "next/router";
import React, {useState} from "react";
import cn from "classnames";
import uris from "../../../../config/uri";
import ButtonMain from "../../../../components/button/main";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faTimes,
  faHeadset,
  faNewspaper,
  faBuilding,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons'
import LinkMain from "../../../../components/link/main";
import LogoMain from "../../../widgets/logo/main";

const HeaderMain = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <header
        className={cn(styles['header-main'])}
      >
        <section>
          <LogoMain monotone />
          <NavLinks />
          <nav className={styles['nav-links']}>
            <ul className={cn(styles['link-list'])}>
              <li className={styles['mail']}>
                <LinkMain
                  onClick={() => setOpenMenu && setOpenMenu(false)}
                  to={uris.index}
                  external
                >
                  hello@roysonlewis.com
                  <FontAwesomeIcon icon={faArrowUp} />
                </LinkMain>
              </li>
            </ul>
          </nav>
        </section>
      </header>
      <header
        className={cn(
          styles['header-main'],
          styles.mobile,
        )}
      >
        <section>
          <div className={styles['header-left']}>
            <div className={styles['logo-section']}>
              <ButtonMain onClick={() => setOpenMenu(!openMenu)} aria-label="menu">
                <FontAwesomeIcon icon={faBars} />
              </ButtonMain>
              <LogoMain monotone />
            </div>
          </div>
          <div className={cn(styles['nav-list-mobile'], { [styles.open]: openMenu })}>
            <div className={styles['nav-links-header']}>
              <LogoMain />
              <FontAwesomeIcon onClick={() => setOpenMenu(false)} icon={faTimes} />
            </div>
            <ul className={styles['nav-links-container']}>
              <NavLinks setOpenMenu={setOpenMenu} mobile />
            </ul>
          </div>
          <button
            type="button"
            onClick={() => setOpenMenu(false)}
            className={cn(styles['nav-list-background'], { [styles.close]: !openMenu })}
          />
        </section>
      </header>
    </>
  )
}

const NavLinks: React.FC<{
  mobile?: boolean
  setOpenMenu?: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ mobile, setOpenMenu }) => {
  const { pathname } = useRouter()
  const activeClassNameFormatter = (currentPath: string) =>
    cn({ [styles['current-nav']]: pathname === currentPath })
  console.log(pathname, uris.project)
  return (
    <nav className={styles['nav-links']}>
      <ul className={cn(styles['link-list'], { [styles.mobile]: mobile })}>
        <li
          className={activeClassNameFormatter(uris.project)}
        >
          <LinkMain
            onClick={() => setOpenMenu && setOpenMenu(false)}
            to={uris.project}
          >
            {mobile && <FontAwesomeIcon icon={faHeadset} />}
            Projects
          </LinkMain>
        </li>
        <li
          className={activeClassNameFormatter(uris.about)}
        >
          <LinkMain
            onClick={() => setOpenMenu && setOpenMenu(false)}
            to={uris.about}
          >
            {mobile && <FontAwesomeIcon icon={faNewspaper} />}
            About Me
          </LinkMain>
        </li>
        <li
          className={activeClassNameFormatter(uris.index)}
        >
          <LinkMain
            onClick={() => setOpenMenu && setOpenMenu(false)}
            to={uris.contact}
          >
            {mobile && <FontAwesomeIcon icon={faBuilding} />}
            Contact
          </LinkMain>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderMain
