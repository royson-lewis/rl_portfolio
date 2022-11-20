import { useEffect, useState } from 'react'

import Link from 'next/link'

import styles from './header.module.scss'
import BurgerMenu from './burger-menu'

const Header = () => {
  const [header, setHeader] = useState({
    burgerOpen: false,
    scrollingUp: false,
    scrollingDown: false,
  })

  const toggleBurger = () => {
    setHeader({
      ...header,
      burgerOpen: !header.burgerOpen,
    })
  }

  useEffect(() => {
    if (window) {
      let currentScrollPosition = 0
      window.onscroll = () => {
        const newScrollPosition = window.pageYOffset
        if (newScrollPosition > currentScrollPosition) {
          setHeader((prevHeader) => ({
            ...prevHeader,
            scrollingUp: false,
            scrollingDown: true,
          }))
        } else {
          setHeader((prevHeader) => ({
            ...prevHeader,
            scrollingUp: true,
            scrollingDown: false,
          }))
        }
        currentScrollPosition = newScrollPosition
      }
    }
  }, [])

  return (
    <>
      <header
        style={
          header.scrollingUp && !header.scrollingDown
            ? { opacity: 1, position: 'fixed' }
            : { opacity: 0, position: 'fixed' }
        }
        className={styles.headerMobile}
      >
        <button type="button" className={styles.burgerButton} onClick={toggleBurger}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23.328"
            height="17.131"
            viewBox="0 0 23.328 17.131"
          >
            <path
              id="Icon_open-menu"
              data-name="Icon open-menu"
              d="M3.091,3.438v3.19H26.419V3.438Zm0,7.113v3.19H26.419v-3.19Zm0,6.828v3.19H26.419v-3.19Z"
              transform="translate(-3.091 -3.438)"
              fill="#3f3d56"
            />
          </svg>
        </button>
        <div className={styles.logo}>
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46.442"
              viewBox="0 0 46 46.442"
            >
              <g
                id="RoysonLewis_Logo"
                data-name="RoysonLewis Logo"
                transform="translate(-5883 -379.736)"
              >
                <rect
                  id="Rectangle_36"
                  data-name="Rectangle 36"
                  width="46"
                  height="46"
                  transform="translate(5883 380)"
                  fill="rgba(255,255,255,0)"
                />
                <g id="Group_32" data-name="Group 32" transform="translate(5891.593 379.736)">
                  <path
                    id="Path_74"
                    data-name="Path 74"
                    d="M29.281-90.857a8.3,8.3,0,0,0-2.464-5.9A8.451,8.451,0,0,0,20.869-99.2H2.15A2.123,2.123,0,0,0,.017-97.081v6.421A2.123,2.123,0,0,0,2.15-88.546H18.534l.048,14.823a2.339,2.339,0,0,1-2.32,2.336l-14.118.174a2.123,2.123,0,0,0-2.106,2.1C.031-67.649.022-65.7.016-64.234a2.1,2.1,0,0,0,.621,1.5,2.143,2.143,0,0,0,1.511.622h20.2A6.822,6.822,0,0,0,29.2-68.873c.033-7.832.082-19.673.082-19.673Z"
                    transform="translate(-0.016 99.42)"
                    fill="#f0d039"
                    fillRule="evenodd"
                  />
                  <path
                    id="Path_75"
                    data-name="Path 75"
                    d="M28.065-22.675A1.634,1.634,0,0,0,29.706-24.3v-2.193a1.634,1.634,0,0,0-1.641-1.626H2.653a1.634,1.634,0,0,0-1.641,1.626V-24.3a1.634,1.634,0,0,0,1.641,1.626Z"
                    transform="translate(-0.441 69.117)"
                    fill="#35304c"
                    fillRule="evenodd"
                  />
                  <path
                    id="Path_76"
                    data-name="Path 76"
                    d="M29.282-91.457a8.167,8.167,0,0,0-8.2-8.13H2.15a2.142,2.142,0,0,0-1.508.619,2.1,2.1,0,0,0-.625,1.495v6.681A2.1,2.1,0,0,0,.642-89.3a2.143,2.143,0,0,0,1.508.619H29.282Z"
                    transform="translate(-0.016 99.588)"
                    fill="#fcf191"
                    fillRule="evenodd"
                  />
                </g>
              </g>
            </svg>
            <h3>RoysonLewis</h3>
          </Link>
        </div>
        <Link href="/#contact" className={styles.hireMeButton}>
          <button type="button">Hire Me</button>
        </Link>
      </header>
      <header
        style={
          header.scrollingUp && !header.scrollingDown
            ? { opacity: 1, position: 'fixed' }
            : { opacity: 0, position: 'fixed' }
        }
        className={styles.headerDesktop}
      >
        <Link href="/">
          <div className={styles.logo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46.442"
              viewBox="0 0 46 46.442"
            >
              <g
                id="RoysonLewis_Logo"
                data-name="RoysonLewis Logo"
                transform="translate(-5883 -379.736)"
              >
                <rect
                  id="Rectangle_36"
                  data-name="Rectangle 36"
                  width="46"
                  height="46"
                  transform="translate(5883 380)"
                  fill="rgba(255,255,255,0)"
                />
                <g id="Group_32" data-name="Group 32" transform="translate(5891.593 379.736)">
                  <path
                    id="Path_74"
                    data-name="Path 74"
                    d="M29.281-90.857a8.3,8.3,0,0,0-2.464-5.9A8.451,8.451,0,0,0,20.869-99.2H2.15A2.123,2.123,0,0,0,.017-97.081v6.421A2.123,2.123,0,0,0,2.15-88.546H18.534l.048,14.823a2.339,2.339,0,0,1-2.32,2.336l-14.118.174a2.123,2.123,0,0,0-2.106,2.1C.031-67.649.022-65.7.016-64.234a2.1,2.1,0,0,0,.621,1.5,2.143,2.143,0,0,0,1.511.622h20.2A6.822,6.822,0,0,0,29.2-68.873c.033-7.832.082-19.673.082-19.673Z"
                    transform="translate(-0.016 99.42)"
                    fill="#f0d039"
                    fillRule="evenodd"
                  />
                  <path
                    id="Path_75"
                    data-name="Path 75"
                    d="M28.065-22.675A1.634,1.634,0,0,0,29.706-24.3v-2.193a1.634,1.634,0,0,0-1.641-1.626H2.653a1.634,1.634,0,0,0-1.641,1.626V-24.3a1.634,1.634,0,0,0,1.641,1.626Z"
                    transform="translate(-0.441 69.117)"
                    fill="#35304c"
                    fillRule="evenodd"
                  />
                  <path
                    id="Path_76"
                    data-name="Path 76"
                    d="M29.282-91.457a8.167,8.167,0,0,0-8.2-8.13H2.15a2.142,2.142,0,0,0-1.508.619,2.1,2.1,0,0,0-.625,1.495v6.681A2.1,2.1,0,0,0,.642-89.3a2.143,2.143,0,0,0,1.508.619H29.282Z"
                    transform="translate(-0.016 99.588)"
                    fill="#fcf191"
                    fillRule="evenodd"
                  />
                </g>
              </g>
            </svg>
            <h3>Royson Lewis</h3>
          </div>
        </Link>
        <nav className={styles.navLinks}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#work_section">Work</Link>
            </li>
            <li>
              <Link href="/about">About Me</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://storage.googleapis.com/rl_portfolio_backend/Resume-Royson-Lewis.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <Link href="/#contact">
          <button type="button" className={styles.hireMeButton}>
            Hire Me
          </button>
        </Link>
      </header>
      <BurgerMenu open={header.burgerOpen} toggleBurger={toggleBurger} />
    </>
  )
}

export default Header
