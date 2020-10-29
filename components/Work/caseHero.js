/** @format */
import styles from "../../styles/work.module.scss";
import EssenceHeroArt from "./essence/essenceHeroArt";
import EssenceLogo from "./essence/essenceLogo";
import VamyouHeroArt from "./vamyou/vamyouHeroArt";
import VamyouLogo from "./vamyou/vamyouLogo";

export default function EssenceHero(props) {
  const essence = {
    heroArt: <EssenceHeroArt />,
    logo: <EssenceLogo />,
    description: "A daily essential product company Inspired by the nature!",
    link: "https://essence-server.web.app/",
  };

  const vamyou = {
    heroArt: <VamyouHeroArt />,
    logo: <VamyouLogo />,
    description: "A blog featuring all the latest trends and techniques essential for success in the field of business and finance.",
    link: "https://jen-blog-284811.uc.r.appspot.com/",
  };

  const { heroArt, logo, description, link } = eval(props.project);

  return (
    <section className={styles.hero}>
      {heroArt}
      <div className={styles.workTitle}>
        {logo}
        <h4>{description}</h4>
        <a href={link}>
          <button>Launch Project</button>
        </a>
      </div>
    </section>
  );
}
