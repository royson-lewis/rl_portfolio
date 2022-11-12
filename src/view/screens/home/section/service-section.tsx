import React from "react";

import styles from "../main.module.scss";
import ServiceArts from "./service-arts";

export default function ServiceSection(props: {
  hoverOver?: React.MouseEventHandler<HTMLElement | SVGSVGElement>
  hoverOut?: React.MouseEventHandler<HTMLElement | SVGSVGElement>
}) {
  return <>
    <section className={styles.serviceSection}>
      <h2>Services</h2>
      <section className={styles.UISection}>
        <ServiceArts hoverOver={props.hoverOver} hoverOut={props.hoverOut} section='ui' />
        <h3>UI / UX Design</h3>
        <p>I create modern and minimal designs with outstanding experiences for the end-users.</p>
      </section>
      <section className={styles.frontEndSection}>
        <ServiceArts section='frontend' hoverOver={props.hoverOver} hoverOut={props.hoverOut} />
        <h3>Front-end Development</h3>
        <p>I develop custom designs to clean frontend code using technologies such as HTML, CSS/SASS/LESS, Javascript, React, Bootstrap, etc.</p>
      </section>
      <section className={styles.backEndSection}>
        <ServiceArts section='backend' hoverOver={props.hoverOver} hoverOut={props.hoverOut} />
        <h3>Back-end Development</h3>
        <p>I develop servers using Node.js/Express along with databases such as MySQL, MongoDB to create fully functional web apps and websites.</p>
      </section>
    </section>
  </>;
}
