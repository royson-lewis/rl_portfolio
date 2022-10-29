/** @format */
import styles from "../../styles/work.module.scss";
import { essence } from "../../data/work/essence/infoData";
import { vamyou } from "../../data/work/vamyou/infoData";

export default function ProjectInfo(props) {
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

  const { projectInfo, techUsed } = currentProject;

  return (
    <section className={styles.projectInfo}>
      <div className={styles.projectDetails}>
        <h3>Project Info</h3>
        <table>
          <tbody>
            <tr>
              <td>Sector</td>
              <td>{projectInfo.sector}</td>
            </tr>
            <tr>
              {projectInfo.type ? (
                <>
                  <td>Type</td>
                  <td>{projectInfo.type}</td>
                </>
              ) : (
                <>
                  <td>Client</td>
                  <td>{projectInfo.client}</td>
                </>
              )}
            </tr>
            <tr>
              <td>My Role</td>
              <td>{projectInfo.myRole}</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>{projectInfo.duration}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.techUsed}>
        <h3>Technologies Used</h3>
        <section>
          {techUsed.map((category) => {
            return (
              <div key={category.catName}>
                <h4>{category.catName}</h4>
                <ul>
                  {category.techs.map((tech) => {
                    return (
                      <li key={tech.name}>
                        {tech.logo}
                        <p>{tech.name}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
}
