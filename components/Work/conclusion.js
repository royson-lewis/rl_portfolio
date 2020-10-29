/** @format */
import Styles from "../../styles/work.module.scss";

export default function Conclusion() {
  return (
    <section className={Styles.conclusion}>
      <h3>Conclusion</h3>
      <p>After a clear sitemap has been prepared, I used it as a reference to create a low-fi Prototype with wireframes using Adobe XD, which later got tested by a small number of people which further helped in improving the overall user experience of the prototype. </p>
      <hr></hr>
      <div>
        <button className={Styles.return}>
          <svg xmlns='http://www.w3.org/2000/svg' width='8.987' height='14.554' viewBox='0 0 8.987 14.554'>
            <path id='Icon_material-navigate-next' data-name='Icon material-navigate-next' d='M20.162,9l1.71,1.71-5.555,5.567,5.555,5.567-1.71,1.71-7.277-7.277Z' transform='translate(-12.885 -9)' fill='#fff' />
          </svg>
          Return Home
        </button>
        <button className={Styles.next}>
          Next Project
          <svg xmlns='http://www.w3.org/2000/svg' width='8.987' height='14.554' viewBox='0 0 8.987 14.554'>
            <path id='Icon_material-navigate-next' data-name='Icon material-navigate-next' d='M14.6,9l-1.71,1.71,5.555,5.567-5.555,5.567,1.71,1.71,7.277-7.277Z' transform='translate(-12.885 -9)' fill='#fff' />
          </svg>
        </button>
      </div>
    </section>
  );
}
