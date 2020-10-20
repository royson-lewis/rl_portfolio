/** @format */
import { useEffect, useState } from "react";
import styles from "../styles/header.module.scss";
import Link from "next/link";

export default function BurgerMenu(props) {
  const [nav, setNav] = useState({
    open: false,
  });

  useEffect(() => {
    setNav({ open: props.open });
  }, [props]);
  return (
    <>
      <nav className={styles.burgerMenuOpen} style={nav.open ? { transform: "translateX(100vw)" } : null}>
        <div className={styles.navHeader}>
          <svg onClick={props.toggleBurger} className={styles.closeNav} xmlns='http://www.w3.org/2000/svg' width='18.837' height='18.626' viewBox='0 0 18.837 18.626'>
            <path id='Icon_open-menu' data-name='Icon open-menu' d='M3.7,4.957l-2.62,2.4L17.392,23.583l2.523-2.406Zm-2.62,16.22L3.7,23.583,19.9,7.355l-2.5-2.4Z' transform='translate(-1.078 -4.957)' fill='#3f3d56' />
          </svg>
          <svg className={styles.logoMenu} xmlns='http://www.w3.org/2000/svg' width='32.743' height='32.765' viewBox='0 0 31.743 31.765'>
            <g transform='translate(-4.375 -4.375)'>
              <path id='Path_231' data-name='Path 231' d='M31.646,9.248,18.741,3.461a1,1,0,0,0-.814,0L5.014,9.248a.606.606,0,0,0-.029,1.066l12.876,6.78a.982.982,0,0,0,.937,0l12.876-6.78A.606.606,0,0,0,31.646,9.248Z' transform='translate(1.032 1)' fill='#3f3d56' />
              <path id='Path_232' data-name='Path 232' d='M19.721,33.062,32.7,26.195a.582.582,0,0,0,.259-.49V12.382a.537.537,0,0,0-.771-.512L19.21,18.557a.569.569,0,0,0-.3.512v13.5A.544.544,0,0,0,19.721,33.062Z' transform='translate(2.41 2.234)' fill='#fed200' stroke='#fed200' stroke-width='1.5' />
              <path id='Path_233' data-name='Path 233' d='M3.375,12.382V25.7a.582.582,0,0,0,.259.49l12.977,6.867a.531.531,0,0,0,.807-.49v-13.5a.569.569,0,0,0-.3-.512L4.146,11.87A.539.539,0,0,0,3.375,12.382Z' transform='translate(1 2.234)' fill='#3f3d56' />
            </g>
          </svg>
          <h3>Royson Lewis</h3>
        </div>
        <ul>
          <li>
            <svg xmlns='http://www.w3.org/2000/svg' width='23.784' height='20.217' viewBox='0 0 23.784 20.217'>
              <path id='home' data-name='home' d='M12.514,24.717V17.581h4.757v7.135h5.946V15.2h3.568L14.892,4.5,3,15.2H6.568v9.514Z' transform='translate(-3 -4.5)' fill='#3f3d56' />
            </svg>
            <Link href='/'>
              <a onClick={props.toggleBurger}>Home</a>
            </Link>
          </li>
          <li>
            <svg xmlns='http://www.w3.org/2000/svg' width='23.946' height='20.953' viewBox='0 0 23.946 20.953'>
              <path id='project' data-name='project' d='M0,0V20.953H2.993V0ZM20.953,0V20.953h2.993V0ZM5.987,2.993V5.987h5.987V2.993ZM8.98,8.98v2.993h5.987V8.98Zm2.993,5.987V17.96H17.96V14.967Z' fill='#3f3d56' />
            </svg>
            <Link href='/services'>
              <a onClick={props.toggleBurger}>Services</a>
            </Link>
          </li>
          <li>
            <svg xmlns='http://www.w3.org/2000/svg' width='21.945' height='21.945' viewBox='0 0 21.945 21.945'>
              <path id='group-work' data-name='group-work' d='M13.973,3A10.973,10.973,0,1,0,24.945,13.973,10.977,10.977,0,0,0,13.973,3ZM9.584,20.008a2.743,2.743,0,1,1,2.743-2.743A2.744,2.744,0,0,1,9.584,20.008ZM11.229,9.584a2.743,2.743,0,1,1,2.743,2.743A2.744,2.744,0,0,1,11.229,9.584Zm7.132,10.424A2.743,2.743,0,1,1,21.1,17.264,2.744,2.744,0,0,1,18.362,20.008Z' transform='translate(-3 -3)' fill='#3f3d56' />
            </svg>
            <Link href='/work'>
              <a onClick={props.toggleBurger}>Work</a>
            </Link>
          </li>
          <li>
            <svg xmlns='http://www.w3.org/2000/svg' width='24.893' height='18.67' viewBox='0 0 24.893 18.67'>
              <path id='profile' data-name='profile' d='M27.614,10.379H25.873V7.767l-3.593-.055.019,2.667H11.5l.074-2.667-3.519.055v2.667l-1.778-.055A1.779,1.779,0,0,0,4.5,12.157V24.6a1.779,1.779,0,0,0,1.778,1.778H27.614A1.779,1.779,0,0,0,29.392,24.6V12.157A1.779,1.779,0,0,0,27.614,10.379ZM23.168,8.6h1.778v3.556H23.168ZM11.611,14.657a2.314,2.314,0,0,1,1.945,2.556,2.314,2.314,0,0,1-1.945,2.556,2.314,2.314,0,0,1-1.945-2.556,2.314,2.314,0,0,1,1.945-2.556ZM8.944,8.6h1.778v3.556H8.944ZM7.759,22.779s.211-1.691.69-2.01a6.818,6.818,0,0,1,1.858-.532s.894.956,1.275.956,1.274-.956,1.274-.956a6.8,6.8,0,0,1,1.859.532c.563.375.7,2.01.7,2.01H7.759Zm18.077-.843h-8v-.889h8Zm0-1.778h-8V19.27h8Zm0-1.778h-8v-.889h8Zm0-1.778h-8v-.889h8Z' transform='translate(-4.499 -7.712)' fill='#3f3d56' />
            </svg>
            <Link href='/about'>
              <a onClick={props.toggleBurger}>About Me</a>
            </Link>
          </li>
          <li>
            <svg xmlns='http://www.w3.org/2000/svg' width='21.244' height='25.493' viewBox='0 0 21.244 25.493'>
              <path id='contacts' data-name='contacts' d='M22.12,0h-17V2.124h17Zm-17,25.493h17V23.369h-17Zm17-21.244h-17A2.131,2.131,0,0,0,3,6.373V19.12a2.131,2.131,0,0,0,2.124,2.124h17a2.131,2.131,0,0,0,2.124-2.124V6.373A2.131,2.131,0,0,0,22.12,4.249Zm-8.5,2.921a2.39,2.39,0,1,1-2.39,2.39A2.394,2.394,0,0,1,13.622,7.17Zm5.311,10.888H8.311V16.464c0-1.774,3.537-2.656,5.311-2.656s5.311.882,5.311,2.656Z' transform='translate(-3)' fill='#3f3d56' />
            </svg>
            <Link href='/contact'>
              <a onClick={props.toggleBurger}>Contact</a>
            </Link>
          </li>
          <li>
            <svg xmlns='http://www.w3.org/2000/svg' width='23.721' height='23.721' viewBox='0 0 23.721 23.721'>
              <path id='resume' data-name='resume' d='M13.674,20.791h2.372V13.674H13.674ZM14.86,3a11.86,11.86,0,1,0,11.86,11.86A11.865,11.865,0,0,0,14.86,3Zm0,21.349a9.488,9.488,0,1,1,9.488-9.488A9.5,9.5,0,0,1,14.86,24.349ZM13.674,11.3h2.372V8.93H13.674Z' transform='translate(-3 -3)' fill='#3f3d56' />
            </svg>
            <Link href='/resume'>
              <a onClick={props.toggleBurger}>Resume</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div onClick={props.toggleBurger} style={nav.open ? { opacity: 1, pointerEvents: "all" } : null} className={styles.menuBackground}></div>
    </>
  );
}
