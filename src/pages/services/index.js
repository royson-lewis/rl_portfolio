/** @format */
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import ServiceDetails from "../../components/serviceDetails";
import styles from "../../styles/services.module.scss";

export default function index() {
  const [service, setService] = useState({
    section: "",
    loading: false,
  });
  function setSection(e) {
    let selected = e.target.id;
    setService({
      ...service,
      section: selected,
    });
  }

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  useEffect(() => {
    setService({
      ...service,
      section: getParameterByName("service"),
    });
  }, []);

  return <>
    <Head>
      <title>Services - Royson Lewis</title>
      <meta name='description' content='Checkout a list of services I provide in Fullstack Web Development and UI/UX Design' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='Services - Royson Lewis' />
      <meta property='og:description' content='Checkout a list of services I provide in Fullstack Web Development and UI/UX Design' />
      <meta property='og:url' content='http://www.roysonlewis.com/services' />
      <meta property='og:site_name' content='Royson Lewis' />
    </Head>
    <main className={styles.services}>
      <h2>Services</h2>
      <section className={styles.tabs}>
        <Link href='?service=ui'>
          <div onClick={setSection} id='ui' className={!service.section || service.section === "ui" ? styles.current : null}>
            UI / UX Design
          </div>
        </Link>
        <Link href='/services?service=front'>
          <div onClick={setSection} id='front' className={service.section === "front" ? styles.current : null}>
            Frontend Development
          </div>
        </Link>
        <Link href='/services?service=back'>
          <div onClick={setSection} id='back' className={service.section === "back" ? styles.current : null}>
            Backend Development
          </div>
        </Link>
      </section>
      <ServiceDetails currentSection={service.section} />
    </main>
  </>;
}
