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
import {Offcanvas} from "react-bootstrap";

const HeaderMain: React.FC<{isMobile: boolean}> = ({ isMobile }) => {
  return (
    <header className={styles['header-main']}>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </header>
  )
}

const HeaderDesktop = () => {
  return (
    <>
      <section className={styles['desktop']}>
        <LogoMain monotone />
        <NavLinks />
        <NavMail />
      </section>
    </>
  )
}

const HeaderMobile = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <section className={styles['mobile']}>
        <LogoMain monotone />
        <button type="button" onClick={() => setOpenMenu(!openMenu)} aria-label="menu">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Offcanvas placement="end" show={openMenu} onHide={() => setOpenMenu(false)}>
          <Offcanvas.Header closeButton>
            <LogoMain monotone />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <NavLinks setOpenMenu={setOpenMenu} mobile />
          </Offcanvas.Body>
        </Offcanvas>
      </section>
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
  return (
    <nav className={cn(styles['nav-links'], { [styles['mobile']]: mobile })}>
      <ul className={cn(styles['link-list'])}>
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
          className={activeClassNameFormatter(uris.contact)}
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

const NavMail = () => {
  return (
    <nav className={styles['nav-mail']}>
      <ul className={cn(styles['link-list'])}>
        <li className={styles['mail']}>
          <LinkMain
            to={uris.index}
            external
          >
            hello@roysonlewis.com
            <FontAwesomeIcon icon={faArrowUp} />
          </LinkMain>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderMain
