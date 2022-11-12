import React from "react";

import Link from "next/link";

import Styles from "../main.module.scss";

export default function Conclusion(props: { project: string }) {
  const projects: Record<string, {
    conclusion: string
    nextProject: string
    color: {
      background: string
      accent: string
    },
  }> = {
    essence: {
      conclusion: "Finally, to conclude all things, this app was a major part of my learning process and helped me understand the whole workflow of an e-commerce website along with how to implement some of the essential features in order to run the app successfully.",
      nextProject: "/work/vamyou",
      color: {
        background: "#36354A",
        accent: "#58d06f",
      },
    },
    vamyou: {
      conclusion: "Finally, to conclude all things, It was an awesome experience building a complete custom blogging website with the implementation of server-side frameworks such as Next.js for a better SEO and performance and a Content Management System for managing all the site contents.",
      nextProject: "/work/essence",
      color: {
        background: "#111D4A",
        accent: "#fc326f",
      },
    }
  }

  const { conclusion, nextProject, color } = projects[props.project];

  return (
    <section className={Styles.conclusion}>
      <h3>Conclusion</h3>
      <p>{conclusion}</p>
      <hr />
      <div>
        <Link href='/'>
          <button className={Styles.return}>
            <svg xmlns='http://www.w3.org/2000/svg' width='8.987' height='14.554' viewBox='0 0 8.987 14.554'>
              <path id='Icon_material-navigate-next' data-name='Icon material-navigate-next' d='M20.162,9l1.71,1.71-5.555,5.567,5.555,5.567-1.71,1.71-7.277-7.277Z' transform='translate(-12.885 -9)' fill='#fff' />
            </svg>
            Return Home
          </button>
        </Link>
        <Link href={nextProject}>
          <button style={{ backgroundColor: color.accent }} className={Styles.next}>
            Next Project
            <svg xmlns='http://www.w3.org/2000/svg' width='8.987' height='14.554' viewBox='0 0 8.987 14.554'>
              <path id='Icon_material-navigate-next' data-name='Icon material-navigate-next' d='M14.6,9l-1.71,1.71,5.555,5.567-5.555,5.567,1.71,1.71,7.277-7.277Z' transform='translate(-12.885 -9)' fill='#fff' />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}
