/** @format */
import styles from "../styles/services.module.scss";

export default function ServiceDetails(props) {
  let ui = {
    name: "UI / UX Design",
    image1: "/service ui 2.png",
    image2: "/service ui 1.png",
    description1: "I develop designs with the users in mind, creating designs for a better overall experience.",
    description2: "I like to create designs with more focus on functionality than just the designs.",
    accentColor: "#6ED782",
    headLine1: "Building experiences through Design!",
    headLine2: "Design that empowers functionality!",
    services: [
      {
        name: "Wireframing",
        icon: "/wireframe.svg",
      },
      {
        name: "Mobile App UI Design",
        icon: "/appUI.svg",
      },
      {
        name: "Web UI Design",
        icon: "/desktop.svg",
      },
      {
        name: "User Testing",
        icon: "/userTesting.svg",
      },
    ],
  };
  let front = {
    name: "Front-end Development",
    description1: "I develop ideas to life through code with quality and craftsmanship using technologies that make it possible.",
    description2: "I use various technologies and make them work together to build things that matter.",
    image1: "/service front 1.png",
    image2: "/service front 2.png",
    accentColor: "#0DC482",
    headLine1: "Developing Ideas to Life!",
    headLine2: "Bringing technologies together!",
    services: [
      {
        name: "React Web App",
        icon: "/react.svg",
      },
      {
        name: "Redux Integration",
        icon: "/redux.svg",
      },
      {
        name: "Design to clean code",
        icon: "/DesignToCode.svg",
      },
      {
        name: "Wordpress websites",
        icon: "/wordpress.svg",
      },
    ],
  };
  let back = {
    name: "Back-end Development",
    description1: "by Implementing backend features that take a usual app to the next level!",
    description2: "using database management systems such as MySQL, MongoDB, etc",
    image1: "/service back 1.png",
    image2: "/service back 2.png",
    accentColor: "#FC326F",
    headLine1: "Making things work seamlessly!",
    headLine2: "Integrating and Managing Data",
    services: [
      {
        name: "API Development",
        icon: "/API.svg",
      },
      {
        name: "Database Management",
        icon: "/database.svg",
      },
      {
        name: "Highly Scalable Apps",
        icon: "/scale.svg",
      },
      {
        name: "Login Authentication",
        icon: "/auth.svg",
      },
      {
        name: "and More",
      },
    ],
  };
  let currentSection = ui;
  switch (props.currentSection) {
    case "ui":
      currentSection = ui;
      break;
    case "front":
      currentSection = front;
      break;
    case "back":
      currentSection = back;
      break;
    default:
      currentSection = ui;
      break;
  }

  let { image1, image2, headLine1, headLine2, accentColor, description1, description2, name, services } = currentSection;
  return (
    <>
      <section className={styles.details}>
        <div className={styles.serviceSection1}>
          <div className={styles.imageContainer}>
            <div style={{ backgroundColor: accentColor }} className={styles.backDrop}>
              <img className={styles.image1} src={image1} alt={image1}></img>
            </div>
          </div>
          <div className={styles.textSection}>
            <h4>{headLine1}</h4>
            <p>{description1}</p>
          </div>
        </div>
        <div className={styles.serviceSection2}>
          <div className={styles.imageContainer}>
            <div className={styles.backDrop}>
              <img src={image2} alt={image2}></img>
            </div>
          </div>
          <div className={styles.textSection}>
            <h4>{headLine2}</h4>
            <p>{description2}</p>
          </div>
        </div>
      </section>
      <section className={styles.offers}>
        <h3>Services Offered in {name}</h3>
        <section>
          <svg xmlns='http://www.w3.org/2000/svg' width='336' height='102' viewBox='0 0 336 102'>
            <g id='offers_bg' data-name='offers bg' transform='translate(0 -61.08)'>
              <g id='Rectangle_238' data-name='Rectangle 238' transform='translate(0 61.08)' fill='#3f3d56' stroke='#3f3d56' strokeWidth='20'>
                <rect width='336' height='102' rx='8' stroke='none' />
                <rect x='10' y='10' width='316' height='82' rx='2' fill='none' />
              </g>
              <path id='Icon_material-apps' data-name='Icon material-apps' d='M6,13.617h7.617V6H6Zm11.425,22.85h7.617V28.85H17.425ZM6,36.467h7.617V28.85H6ZM6,25.042h7.617V17.425H6Zm11.425,0h7.617V17.425H17.425ZM28.85,6v7.617h7.617V6ZM17.425,13.617h7.617V6H17.425ZM28.85,25.042h7.617V17.425H28.85Zm0,11.425h7.617V28.85H28.85Z' transform='translate(16.61 90.808)' fill='#fff' />
              <g id='Icon_ionic-ios-checkbox-outline' data-name='Icon ionic-ios-checkbox-outline' transform='translate(282.512 96.808)'>
                <path id='Path_220' data-name='Path 220' d='M32.428,4.5H7.039A2.536,2.536,0,0,0,4.5,7.039V32.428a2.536,2.536,0,0,0,2.539,2.539H32.428a2.536,2.536,0,0,0,2.539-2.539V7.039A2.536,2.536,0,0,0,32.428,4.5Zm.317,27.611a.637.637,0,0,1-.635.635H7.356a.637.637,0,0,1-.635-.635V7.356a.637.637,0,0,1,.635-.635H32.111a.637.637,0,0,1,.635.635Z' transform='translate(-4.5 -4.5)' fill='#fff' />
                <path id='Path_221' data-name='Path 221' d='M27.5,13.738,26.1,12.3a.3.3,0,0,0-.222-.1h0a.288.288,0,0,0-.222.1l-9.68,9.751L12.456,18.53a.307.307,0,0,0-.444,0L10.6,19.942a.316.316,0,0,0,0,.452l4.443,4.443a1.405,1.405,0,0,0,.928.452,1.472,1.472,0,0,0,.92-.436H16.9L27.507,14.19A.339.339,0,0,0,27.5,13.738Z' transform='translate(-3.729 -3.511)' fill='#fff' />
              </g>
            </g>
          </svg>
          <div>
            <ul>
              {services.map((service) => {
                return (
                  <li key={service.name}>
                    {service.icon ? <img src={service.icon} alt={service.name}></img> : null}
                    {service.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </section>
    </>
  );
}
