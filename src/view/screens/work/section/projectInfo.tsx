import styles from "../main.module.scss";
import workInfoData from "../../../../config/work/info-data";

export default function ProjectInfo(props: { project: string }) {
  const { projectInfo, techUsed } = workInfoData[props.project]
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
          {techUsed.map((category) => (
              <div key={category.catName}>
                <h4>{category.catName}</h4>
                <ul>
                  {category.techs.map((tech) => (
                      <li key={tech.name}>
                        {tech.logo}
                        <p>{tech.name}</p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </section>
      </div>
    </section>
  );
}
