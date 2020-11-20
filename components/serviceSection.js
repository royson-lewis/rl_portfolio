/** @format */
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import ServiceArts from "./serviceArts";

export default function ServiceSection(props) {
  return (
    <>
      <section className={styles.serviceSection}>
        <h2>Services</h2>
        <section className={styles.UISection}>
          <ServiceArts hoverOver={props.hoverOver} hoverOut={props.hoverOut} section='ui' />
          <h3>UI / UX Design</h3>
          <p>I create modern and minimal designs with outstanding experiences for the end-users.</p>
          <Link href='/services?service=ui'>
            <a>
              <button>Learn More</button>
            </a>
          </Link>
        </section>
        <section className={styles.frontEndSection}>
          <ServiceArts section='frontend' hoverOver={props.hoverOver} hoverOut={props.hoverOut} />
          <h3>Front-end Development</h3>
          <p>I develop custom designs to clean frontend code using technologies such as HTML, CSS/SASS/LESS, Javascript, React, Bootstrap, etc.</p>
          <Link href='/services?service=front'>
            <a>
              <button>Learn More</button>
            </a>
          </Link>
        </section>
        <section className={styles.backEndSection}>
          <ServiceArts section='backend' hoverOver={props.hoverOver} hoverOut={props.hoverOut} />
          <h3>Back-end Development</h3>
          <p>I develop servers using Node.js/Express along with databases such as MySQL, MongoDB to create fully functional web apps and websites.</p>
          <Link href='/services?service=back'>
            <a>
              <button>Learn More</button>
            </a>
          </Link>
        </section>
      </section>
    </>
  );
}
