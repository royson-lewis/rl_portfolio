/** @format */
import styles from "../styles/Home.module.scss";
import ServiceArts from "./serviceArts";

export default function ServiceSection() {
  return (
    <>
      <section className={styles.serviceSection}>
        <h2>Services</h2>
        <section className={styles.UISection}>
          <ServiceArts section='ui' />
          <h3>UI / UX Design</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
          <button>Learn More</button>
        </section>
        <section className={styles.frontEndSection}>
          <ServiceArts section='frontend' />
          <h3>Front-end Development</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
          <button>Learn More</button>
        </section>
        <section className={styles.backEndSection}>
          <ServiceArts section='backend' />
          <h3>Back-end Development</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
          <button>Learn More</button>
        </section>
      </section>
    </>
  );
}
