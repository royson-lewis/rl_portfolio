/** @format */
import styles from "../styles/Home.module.scss";
import { useState, useEffect } from "react";

export default function WorkSection() {
  const [slider, setSlider] = useState({
    index: 0,
  });

  let sliderWorks = [
    {
      image: "/workImageEssence.png",
      logo: "/essenceLogo.png",
      description: "An Ecommerce web app featuring daily essential  products inspired from nature for a better future.",
      siteLink: "https://essence-server.web.app/",
      caseLink: "/work/essence",
    },
    {
      image: "/workImageEssence2x.png",
      logo: "/vamyouLogo.png",
      description: "A blog featuring all the latest trends and techniques essential for success in the field of business and finance.",
      siteLink: "https://jen-blog-284811.uc.r.appspot.com/",
      caseLink: "/work/vamyou",
    },
  ];

  let totalWidth = (sliderWorks.length - 1) * -100;

  function slideLeft() {
    if (slider.index !== totalWidth) {
      setSlider({
        ...slider,
        index: slider.index - 100,
      });
    } else {
      setSlider({
        ...slider,
        index: 0,
      });
    }
  }

  useEffect(() => {
    let intervalID = 0;
    intervalID = setInterval(slideLeft, 3000);
    return () => {
      clearInterval(intervalID);
    };
  }, [slider.index]);

  function slideRight() {
    if (slider.index !== 0) {
      setSlider({
        ...slider,
        index: slider.index + 100,
      });
    } else {
      setSlider({
        ...slider,
        index: totalWidth,
      });
    }
  }

  function setSlide(e) {
    console.log(e.target.className);
    let index = e.target.className;
    if (index === 0) {
      setSlider({
        ...slider,
        index: 0,
      });
    } else {
      setSlider({
        ...slider,
        index: index * -100,
      });
    }
  }

  return (
    <section className={styles.workSection}>
      <div className={styles.sliderContainer}>
        {sliderWorks.map((work) => {
          return (
            <>
              <div style={{ left: `${slider.index}vw` }} key={work.image} className={styles.image1Container}>
                <img src={work.image}></img>
                <section>
                  <img src={work.logo}></img>
                  <p>{work.description}</p>
                  <button>View Live Project</button>
                  <button>View Case</button>
                </section>
              </div>
            </>
          );
        })}
      </div>
      <div className={styles.sliderDotContainer}>
        {sliderWorks.map((work) => {
          return <div onClick={setSlide} className={sliderWorks.indexOf(work)} key={work.image} id={slider.index === sliderWorks.indexOf(work) * -100 ? "currentDot" : ""}></div>;
        })}
      </div>
      <button onClick={slideLeft}>next</button>
      <button onClick={slideRight}>previous</button>
    </section>
  );
}
