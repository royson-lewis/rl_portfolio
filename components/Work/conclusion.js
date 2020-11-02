/** @format */
import Styles from "../../styles/work.module.scss";
import Link from "next/link";

export default function Conclusion(props) {
  const essence = {
    conclusion: "After a clear sitemap has been prepared, I used it as a reference to create a low-fi Prototype with wireframes using Adobe XD, which later got tested by a small number of people which further helped in improving the overall user experience of the prototype. ",
    nextProject: "/work/vamyou",
    color: {
      background: "#36354A",
      accent: "#58d06f",
    },
  };
  const vamyou = {
    conclusion: "After a clear sitemap has been prepared, I used it as a reference to create a low-fi Prototype with wireframes using Adobe XD, which later got tested by a small number of people which further helped in improving the overall user experience of the prototype. ",
    nextProject: "/work/essence",
    color: {
      background: "#111D4A",
      accent: "#fc326f",
    },
  };

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

  const { conclusion, nextProject, color } = currentProject;

  return (
    <section className={Styles.conclusion}>
      <h3>Conclusion</h3>
      <p>{conclusion}</p>
      <hr></hr>
      <div>
        <Link href='/'>
          <a>
            <button className={Styles.return}>
              <svg xmlns='http://www.w3.org/2000/svg' width='8.987' height='14.554' viewBox='0 0 8.987 14.554'>
                <path id='Icon_material-navigate-next' data-name='Icon material-navigate-next' d='M20.162,9l1.71,1.71-5.555,5.567,5.555,5.567-1.71,1.71-7.277-7.277Z' transform='translate(-12.885 -9)' fill='#fff' />
              </svg>
              Return Home
            </button>
          </a>
        </Link>
        <Link href={nextProject}>
          <a>
            <button style={{ backgroundColor: color.accent }} className={Styles.next}>
              Next Project
              <svg xmlns='http://www.w3.org/2000/svg' width='8.987' height='14.554' viewBox='0 0 8.987 14.554'>
                <path id='Icon_material-navigate-next' data-name='Icon material-navigate-next' d='M14.6,9l-1.71,1.71,5.555,5.567-5.555,5.567,1.71,1.71,7.277-7.277Z' transform='translate(-12.885 -9)' fill='#fff' />
              </svg>
            </button>
          </a>
        </Link>
      </div>
    </section>
  );
}
