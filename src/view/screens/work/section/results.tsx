import styles from "../main.module.scss";
import workResultData from "../../../../config/work/result-data";

export default function Results(props: { project: string, height?: number }) {
  const { logo, projectLink, mockup, pages, color } = workResultData[props.project];
  return (
    <section style={{ backgroundColor: color.background }} className={styles.Results}>
      <h3>Results</h3>
      <div>
        {/* {logo} */}
        <img src={logo} alt='logo' />
        <a target='_blank' rel='noreferrer' href={projectLink}>
          <button>Launch Live Project</button>
        </a>
      </div>
      <img className={styles.mockup} src={mockup} width='100%' alt='mockup' />
      <section style={{ backgroundColor: color.accent }}>
        <div className={styles.imageContainer}>
          <img className={styles.page1} src={pages.page1} alt={pages.page1} />
          <img className={styles.page2} src={pages.page2} alt={pages.page2} />
          <img className={styles.page3} src={pages.page3} alt={pages.page3} />
          <img className={styles.page4} src={pages.page4} alt={pages.page4} />
        </div>
      </section>
    </section>
  );
}
