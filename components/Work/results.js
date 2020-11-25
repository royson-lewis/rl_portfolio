/** @format */

import styles from "../../styles/work.module.scss";

import { essence } from "../../Data/work/Essence/resultData";
import { vamyou } from "../../Data/work/Vamyou/resultData";

export default function Results(props) {
  let currentProject;
  switch (props.project) {
    case "essence":
      currentProject = essence;
      break;
    case "vamyou":
      currentProject = vamyou;
      break;

    default:
      currentProject = essence;
      break;
  }

  const { logo, projectLink, mockup, pages, color } = currentProject;
  return (
    <section style={{ backgroundColor: color.background }} className={styles.Results}>
      <h3>Results</h3>
      <div>
        {/* {logo} */}
        <img src={logo} alt='logo'></img>
        <a target='_blank' rel='noreferrer' href={projectLink}>
          <button>Launch Live Project</button>
        </a>
      </div>
      <img className={styles.mockup} src={mockup} width='100%' alt='mockup'></img>
      <section style={{ backgroundColor: color.accent }}>
        <div className={styles.imageContainer}>
          <img className={styles.page1} src={pages.page1} alt={pages.page1}></img>
          <img className={styles.page2} src={pages.page2} alt={pages.page2}></img>
          <img className={styles.page3} src={pages.page3} alt={pages.page3}></img>
          <img className={styles.page4} src={pages.page4} alt={pages.page4}></img>
        </div>
      </section>
    </section>
  );
}
