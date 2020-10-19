/** @format */
import { useState } from "react";
import ServiceDetails from "../components/serviceDetails";
import styles from "../styles/services.module.scss";

export default function services() {
  const [service, setService] = useState({
    current: "ui",
    loading: false,
  });
  function setSection(e) {
    let selected = e.target.id;
    console.log(selected);
    setService({
      ...service,
      current: selected,
    });
  }
  console.log(service);
  return (
    <main className={styles.services}>
      <h2>Services</h2>
      <section className={styles.tabs}>
        <div onClick={setSection} className={service.current === "ui" ? styles.current : null} id='ui'>
          UI / UX Design
        </div>
        <div onClick={setSection} className={service.current === "front" ? styles.current : null} id='front'>
          Frontend Development
        </div>
        <div onClick={setSection} className={service.current === "back" ? styles.current : null} id='back'>
          Backend Development
        </div>
      </section>
      <section className={styles.serviceSections}>{service.current ? <ServiceDetails currentSection={service.current} /> : null}</section>
    </main>
  );
}
