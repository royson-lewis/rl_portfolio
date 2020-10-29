/** @format */
import Styles from "../../styles/work.module.scss";
import { essence } from "./essence/caseData";
import { vamyou } from "./vamyou/caseData";
export default function ProjectCase(props) {
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

  const { projectOverview, projectOverview2, challenge, challengeSVG, solution } = currentProject;
  const { svg, data } = solution;
  console.log(currentProject);

  return (
    <>
      <section className={Styles.caseStudy}>
        <h3>Project Overview</h3>
        <p>{projectOverview} </p>
        <p>{projectOverview2} </p>
        <h3>The Challenge</h3>
        {challengeSVG}
        <p>{challenge}</p>
        <h3>The Solution</h3>
        {svg}

        {data.map((section) => {
          return (
            <section className={section.greyBG ? Styles.greyBackground : null} key={section.title}>
              {section.mainTitle ? <h3>{section.mainTitle}</h3> : <h4>{section.title}</h4>}
              {section.para.map((para) => {
                return <p>{para}</p>;
              })}
              {section.svg ? section.svg : null}
              {section.imageLink
                ? section.imageLink.map((image) => {
                    return <img src={image} alt={section.title} width='100%'></img>;
                  })
                : null}
              {section.iFrame ? <iframe style={{ width: "100%", height: "35rem", border: "none" }} src={section.iFrame.src} loading='lazy'></iframe> : null}
              {section.pdfLink ? (
                <caption>
                  <a href={section.pdfLink}>
                    Download PDF{" "}
                    <svg className={Styles.pdfIcon} xmlns='http://www.w3.org/2000/svg' width='13.125' height='16' viewBox='0 0 13.125 16'>
                      <path
                        id='Icon_metro-file-pdf'
                        data-name='Icon metro-file-pdf'
                        d='M15.115,5.6a2.091,2.091,0,0,1,.41.679,2.139,2.139,0,0,1,.171.786V17.346a.846.846,0,0,1-.239.607.774.774,0,0,1-.581.25H3.391a.774.774,0,0,1-.581-.25.846.846,0,0,1-.239-.607V3.061a.846.846,0,0,1,.239-.607.774.774,0,0,1,.581-.25h7.657a1.9,1.9,0,0,1,.752.179,1.98,1.98,0,0,1,.649.429ZM11.321,3.418V6.775h3.213a.989.989,0,0,0-.188-.366L11.671,3.614a.922.922,0,0,0-.35-.2ZM14.6,17.06V7.918H11.048a.774.774,0,0,1-.581-.25.846.846,0,0,1-.239-.607V3.346H3.665V17.06H14.6ZM10.21,11.766a6.49,6.49,0,0,0,.718.5,8.12,8.12,0,0,1,1-.062q1.256,0,1.513.437a.448.448,0,0,1,.017.464.026.026,0,0,1-.009.018l-.017.018v.009q-.051.339-.607.339a3.388,3.388,0,0,1-.983-.179,6.082,6.082,0,0,1-1.111-.473,14.819,14.819,0,0,0-3.35.741q-1.307,2.339-2.068,2.339a.48.48,0,0,1-.239-.062l-.205-.107q-.009-.009-.051-.045a.382.382,0,0,1-.051-.321,1.958,1.958,0,0,1,.479-.817A4.146,4.146,0,0,1,6.373,13.7q.12-.08.2.054a.052.052,0,0,1,.017.036q.444-.759.914-1.759A13.994,13.994,0,0,0,8.39,9.694,7.506,7.506,0,0,1,8.129,8.27a3.624,3.624,0,0,1,.056-1.138q.094-.357.359-.357h.188a.354.354,0,0,1,.3.134.74.74,0,0,1,.077.607.2.2,0,0,1-.034.071.242.242,0,0,1,.009.071v.268a12.205,12.205,0,0,1-.12,1.714,4.549,4.549,0,0,0,1.248,2.125Zm-4.922,3.67a3.888,3.888,0,0,0,1.171-1.411,4.974,4.974,0,0,0-.748.75A2.982,2.982,0,0,0,5.288,15.435Zm3.4-8.214A2.771,2.771,0,0,0,8.672,8.4q.009-.062.06-.393,0-.027.06-.384a.2.2,0,0,1,.034-.071.026.026,0,0,1-.009-.018.019.019,0,0,0,0-.013.019.019,0,0,1,0-.013A.528.528,0,0,0,8.7,7.186a.026.026,0,0,1-.009.018v.018Zm-1.06,5.9a12.123,12.123,0,0,1,2.427-.723,1.292,1.292,0,0,1-.111-.085,1.55,1.55,0,0,1-.137-.121,4.727,4.727,0,0,1-1.085-1.571,12.231,12.231,0,0,1-.709,1.759q-.256.5-.385.741Zm5.52-.143q-.205-.214-1.2-.214a3.115,3.115,0,0,0,1.06.25.794.794,0,0,0,.154-.009q0-.009-.017-.027Z'
                        transform='translate(-2.571 -2.204)'
                        fill='#fed200'
                      />
                    </svg>
                  </a>
                </caption>
              ) : null}
              {section.subTitle ? (
                <>
                  <h5>{section.subTitle}</h5>
                </>
              ) : null}
              {section.subPara ? (
                <>
                  <p>{section.subPara}</p>
                </>
              ) : null}
            </section>
          );
        })}
        {/* <h4>Wireframing & Low-fidelity Prototyping</h4>
        <p>After a clear sitemap has been prepared, I used it as a reference to create a low-fi Prototype with wireframes using Adobe XD, which later got tested by a small number of people which further helped in improving the overall user experience of the prototype. </p>
        <img width='100%' src='/lo-fi-proto_essence@2x.png' alt='wireframe'></img>
        <caption>
          <a href='#'>
            Download PDF{" "}
            <svg xmlns='http://www.w3.org/2000/svg' width='13.125' height='16' viewBox='0 0 13.125 16'>
              <path
                id='Icon_metro-file-pdf'
                data-name='Icon metro-file-pdf'
                d='M15.115,5.6a2.091,2.091,0,0,1,.41.679,2.139,2.139,0,0,1,.171.786V17.346a.846.846,0,0,1-.239.607.774.774,0,0,1-.581.25H3.391a.774.774,0,0,1-.581-.25.846.846,0,0,1-.239-.607V3.061a.846.846,0,0,1,.239-.607.774.774,0,0,1,.581-.25h7.657a1.9,1.9,0,0,1,.752.179,1.98,1.98,0,0,1,.649.429ZM11.321,3.418V6.775h3.213a.989.989,0,0,0-.188-.366L11.671,3.614a.922.922,0,0,0-.35-.2ZM14.6,17.06V7.918H11.048a.774.774,0,0,1-.581-.25.846.846,0,0,1-.239-.607V3.346H3.665V17.06H14.6ZM10.21,11.766a6.49,6.49,0,0,0,.718.5,8.12,8.12,0,0,1,1-.062q1.256,0,1.513.437a.448.448,0,0,1,.017.464.026.026,0,0,1-.009.018l-.017.018v.009q-.051.339-.607.339a3.388,3.388,0,0,1-.983-.179,6.082,6.082,0,0,1-1.111-.473,14.819,14.819,0,0,0-3.35.741q-1.307,2.339-2.068,2.339a.48.48,0,0,1-.239-.062l-.205-.107q-.009-.009-.051-.045a.382.382,0,0,1-.051-.321,1.958,1.958,0,0,1,.479-.817A4.146,4.146,0,0,1,6.373,13.7q.12-.08.2.054a.052.052,0,0,1,.017.036q.444-.759.914-1.759A13.994,13.994,0,0,0,8.39,9.694,7.506,7.506,0,0,1,8.129,8.27a3.624,3.624,0,0,1,.056-1.138q.094-.357.359-.357h.188a.354.354,0,0,1,.3.134.74.74,0,0,1,.077.607.2.2,0,0,1-.034.071.242.242,0,0,1,.009.071v.268a12.205,12.205,0,0,1-.12,1.714,4.549,4.549,0,0,0,1.248,2.125Zm-4.922,3.67a3.888,3.888,0,0,0,1.171-1.411,4.974,4.974,0,0,0-.748.75A2.982,2.982,0,0,0,5.288,15.435Zm3.4-8.214A2.771,2.771,0,0,0,8.672,8.4q.009-.062.06-.393,0-.027.06-.384a.2.2,0,0,1,.034-.071.026.026,0,0,1-.009-.018.019.019,0,0,0,0-.013.019.019,0,0,1,0-.013A.528.528,0,0,0,8.7,7.186a.026.026,0,0,1-.009.018v.018Zm-1.06,5.9a12.123,12.123,0,0,1,2.427-.723,1.292,1.292,0,0,1-.111-.085,1.55,1.55,0,0,1-.137-.121,4.727,4.727,0,0,1-1.085-1.571,12.231,12.231,0,0,1-.709,1.759q-.256.5-.385.741Zm5.52-.143q-.205-.214-1.2-.214a3.115,3.115,0,0,0,1.06.25.794.794,0,0,0,.154-.009q0-.009-.017-.027Z'
                transform='translate(-2.571 -2.204)'
                fill='#fed200'
              />
            </svg>
          </a>
        </caption>
        <section className={Styles.designElements}>
          <h4>Designing Elements</h4>
          <p>After a clear sitemap has been prepared, I used it as a reference to create a low-fi Prototype with wireframes using Adobe XD, which later got tested by a small number of people which further helped in improving the overall user experience of the prototype. </p>
          <img width='100%' src='/styleGuide Essence@2x.png' alt='style guide'></img>
          <img width='100%' src='/final Design essence@2x.png' alt='final design'></img>
        </section>
        <h4>Hi-fidility Prototyping</h4>
        <p>After a clear sitemap has been prepared, I used it as a reference to create a low-fi Prototype with wireframes using Adobe XD, which later got tested by a small number of people which further helped in improving the overall user experience of the prototype. </p>
        <img width='100%' src='/high-fi-proto_essence@2x.png' alt='hi-fi prototype'></img>
        <caption>
          <a href='#'>
            Download PDF{" "}
            <svg xmlns='http://www.w3.org/2000/svg' width='13.125' height='16' viewBox='0 0 13.125 16'>
              <path
                id='Icon_metro-file-pdf'
                data-name='Icon metro-file-pdf'
                d='M15.115,5.6a2.091,2.091,0,0,1,.41.679,2.139,2.139,0,0,1,.171.786V17.346a.846.846,0,0,1-.239.607.774.774,0,0,1-.581.25H3.391a.774.774,0,0,1-.581-.25.846.846,0,0,1-.239-.607V3.061a.846.846,0,0,1,.239-.607.774.774,0,0,1,.581-.25h7.657a1.9,1.9,0,0,1,.752.179,1.98,1.98,0,0,1,.649.429ZM11.321,3.418V6.775h3.213a.989.989,0,0,0-.188-.366L11.671,3.614a.922.922,0,0,0-.35-.2ZM14.6,17.06V7.918H11.048a.774.774,0,0,1-.581-.25.846.846,0,0,1-.239-.607V3.346H3.665V17.06H14.6ZM10.21,11.766a6.49,6.49,0,0,0,.718.5,8.12,8.12,0,0,1,1-.062q1.256,0,1.513.437a.448.448,0,0,1,.017.464.026.026,0,0,1-.009.018l-.017.018v.009q-.051.339-.607.339a3.388,3.388,0,0,1-.983-.179,6.082,6.082,0,0,1-1.111-.473,14.819,14.819,0,0,0-3.35.741q-1.307,2.339-2.068,2.339a.48.48,0,0,1-.239-.062l-.205-.107q-.009-.009-.051-.045a.382.382,0,0,1-.051-.321,1.958,1.958,0,0,1,.479-.817A4.146,4.146,0,0,1,6.373,13.7q.12-.08.2.054a.052.052,0,0,1,.017.036q.444-.759.914-1.759A13.994,13.994,0,0,0,8.39,9.694,7.506,7.506,0,0,1,8.129,8.27a3.624,3.624,0,0,1,.056-1.138q.094-.357.359-.357h.188a.354.354,0,0,1,.3.134.74.74,0,0,1,.077.607.2.2,0,0,1-.034.071.242.242,0,0,1,.009.071v.268a12.205,12.205,0,0,1-.12,1.714,4.549,4.549,0,0,0,1.248,2.125Zm-4.922,3.67a3.888,3.888,0,0,0,1.171-1.411,4.974,4.974,0,0,0-.748.75A2.982,2.982,0,0,0,5.288,15.435Zm3.4-8.214A2.771,2.771,0,0,0,8.672,8.4q.009-.062.06-.393,0-.027.06-.384a.2.2,0,0,1,.034-.071.026.026,0,0,1-.009-.018.019.019,0,0,0,0-.013.019.019,0,0,1,0-.013A.528.528,0,0,0,8.7,7.186a.026.026,0,0,1-.009.018v.018Zm-1.06,5.9a12.123,12.123,0,0,1,2.427-.723,1.292,1.292,0,0,1-.111-.085,1.55,1.55,0,0,1-.137-.121,4.727,4.727,0,0,1-1.085-1.571,12.231,12.231,0,0,1-.709,1.759q-.256.5-.385.741Zm5.52-.143q-.205-.214-1.2-.214a3.115,3.115,0,0,0,1.06.25.794.794,0,0,0,.154-.009q0-.009-.017-.027Z'
                transform='translate(-2.571 -2.204)'
                fill='#fed200'
              />
            </svg>
          </a>
        </caption>
        <h3>Development</h3>
        <svg id='Group_425' data-name='Group 425' xmlns='http://www.w3.org/2000/svg' width='157.516' height='119.627' viewBox='0 0 157.516 119.627'>
          <path id='Path_1049' data-name='Path 1049' d='M346.759,84.54c-6.923-27.224-30.845-46.875-58.924-47.663C272.991,36.46,257.371,41.384,246,58.612c-20.33,30.8,1.249,52.079,16.294,62.192a94.138,94.138,0,0,1,19.458,17.489c10.162,12.059,29.712,27.044,52.995,3.565C351.62,124.84,351.371,102.674,346.759,84.54Z' transform='translate(-211.396 -36.853)' fill='#f2f2f2' />
          <path id='Path_1050' data-name='Path 1050' d='M719.6,314.028l14.246-14.2-14.246-14.2,4.343-4.329,18.589,18.531-18.589,18.531-4.343-4.329Z' transform='translate(-615.42 -240.57)' opacity='0.1' />
          <path id='Path_1051' data-name='Path 1051' d='M494.6,418.938h5.791v-5.791H494.6Zm29.071-5.791H517.88v5.791h5.791Zm-17.431,5.791h5.791v-5.791H506.24Z' transform='translate(-431.101 -358.669)' opacity='0.1' />
          <path id='Path_1052' data-name='Path 1052' d='M248.932,313.028l-14.26-14.2,14.246-14.2-4.343-4.329L226,298.825l18.589,18.531Z' transform='translate(-193.281 -239.714)' opacity='0.1' />
          <path id='Path_1053' data-name='Path 1053' d='M213.516,784.937c0,2.4-35.261,10.713-78.758,10.713S56,787.336,56,784.937s35.261,2.027,78.758,2.027S213.516,782.538,213.516,784.937Z' transform='translate(-56 -676.023)' fill='#3f3d56' />
          <path id='Path_1054' data-name='Path 1054' d='M213.516,784.937c0,2.4-35.261,10.713-78.758,10.713S56,787.336,56,784.937s35.261,2.027,78.758,2.027S213.516,782.538,213.516,784.937Z' transform='translate(-56 -676.023)' opacity='0.1' />
          <ellipse id='Ellipse_145' data-name='Ellipse 145' cx='78.758' cy='4.343' rx='78.758' ry='4.343' transform='translate(0 104.57)' fill='#3f3d56' />
          <path id='Path_1055' data-name='Path 1055' d='M688.7,644.806c0,9.268,5.814,16.767,13,16.767' transform='translate(-597.097 -556.789)' fill='#3f3d56' />
          <path id='Path_1056' data-name='Path 1056' d='M778.487,660.461c0-9.372,6.488-16.956,14.507-16.956' transform='translate(-673.889 -555.677)' fill='#58d06f' />
          <path id='Path_1057' data-name='Path 1057' d='M721.229,650.609c0,8.8,3.708,15.927,8.29,15.927' transform='translate(-624.92 -561.752)' fill='#58d06f' />
          <path id='Path_1058' data-name='Path 1058' d='M778.487,632.638c0-11.975,7.5-21.666,16.767-21.666' transform='translate(-673.889 -527.854)' fill='#3f3d56' />
          <path id='Path_1059' data-name='Path 1059' d='M759.6,755.555a6.758,6.758,0,0,0,2.4-.452c.556-.4,2.836-.868,2.974-.234s2.771,3.156.689,3.173a17.631,17.631,0,0,1-5.391-.662C759.714,757.042,759.6,755.555,759.6,755.555Z' transform='translate(-657.733 -650.653)' fill='#a8a8a8' />
          <path id='Path_1060' data-name='Path 1060' d='M765.7,763.692a17.626,17.626,0,0,1-5.391-.662c-.422-.257-.591-1.18-.647-1.606l-.061,0s.117,1.487.671,1.825a17.627,17.627,0,0,0,5.391.662c.6,0,.808-.219.8-.535C766.372,763.569,766.143,763.688,765.7,763.692Z' transform='translate(-657.733 -656.524)' opacity='0.2' />
          <path id='Path_1061' data-name='Path 1061' d='M893.071,405.428s-4.457-3.384-4.8-2.144,3.271,4.06,3.271,4.06Z' transform='translate(-767.763 -350)' fill='#ffb9b9' />
          <path id='Path_1062' data-name='Path 1062' d='M893.071,405.428s-4.457-3.384-4.8-2.144,3.271,4.06,3.271,4.06Z' transform='translate(-767.763 -350)' opacity='0.1' />
          <path id='Path_1068' data-name='Path 1068' d='M719.6,295.028l14.246-14.2-14.246-14.2,4.343-4.329,18.589,18.531-18.589,18.531-4.343-4.329Z' transform='translate(-615.42 -224.32)' fill='#58d06f' />
          <path id='Path_1080' data-name='Path 1080' d='M494.6,399.938h5.791v-5.791H494.6Zm29.071-5.791H517.88v5.791h5.791Zm-17.431,5.791h5.791v-5.791H506.24Z' transform='translate(-431.101 -342.42)' fill='#58d06f' />
          <path id='Path_1111' data-name='Path 1111' d='M4.41,0C6.846,0,8.467,1,8.467,3.094S6.846,7.6,4.41,7.6,0,5.9,0,3.8,1.975,0,4.41,0Z' transform='translate(24.519 26.868)' fill='#2f2e41' />
          <path id='Path_1081' data-name='Path 1081' d='M265.625,426.865s4.385.292,5.165-.292,4.093.78,4.385,1.559-4.678.877-5.457.877a35.851,35.851,0,0,0-4.483,1.169Z' transform='translate(-234.943 -370.03)' fill='#ffb9b9' />
          <path id='Path_1082' data-name='Path 1082' d='M197.958,740.5s-2.044,5.154-.977,5.776,12.263.178,12.263.178,1.866-1.155-.267-1.955a7.321,7.321,0,0,1-2.932-.8,16.992,16.992,0,0,1-2.488-2.044s-.089-1.955-.8-1.511a1.827,1.827,0,0,0-.8,1.244Z' transform='translate(-176.306 -638.273)' fill='#2f2e41' />
          <path id='Path_1083' data-name='Path 1083' d='M197.958,740.5s-2.044,5.154-.977,5.776,12.263.178,12.263.178,1.866-1.155-.267-1.955a7.321,7.321,0,0,1-2.932-.8,16.992,16.992,0,0,1-2.488-2.044s-.089-1.955-.8-1.511a1.827,1.827,0,0,0-.8,1.244Z' transform='translate(-176.306 -638.273)' opacity='0.1' />
          <path id='Path_1084' data-name='Path 1084' d='M248.932,294.028l-14.26-14.2,14.246-14.2-4.343-4.329L226,279.825l18.589,18.531Z' transform='translate(-193.281 -223.465)' fill='#58d06f' />
          <path id='Path_1085' data-name='Path 1085' d='M175.456,751.154s-2.241,5.652-1.072,6.335,13.449.195,13.449.195,2.047-1.267-.292-2.144a8.027,8.027,0,0,1-3.216-.877,18.626,18.626,0,0,1-2.729-2.241s-.1-2.144-.877-1.657a2,2,0,0,0-.877,1.364Z' transform='translate(-156.956 -647.346)' fill='#2f2e41' />
          <path id='Path_1086' data-name='Path 1086' d='M216.01,491.775l-1.364,12.279s-.487,5.847-1.949,7.114a5.51,5.51,0,0,1-.487,2.436l-.682,7.7a17.762,17.762,0,0,1,.877,3.313c-.1.487.39,2.047.292,2.241a37.454,37.454,0,0,1-4.678,0l.975-15.69,3.021-21.83Z' transform='translate(-186.01 -423.83)' fill='#2f2e41' />
          <path id='Path_1087' data-name='Path 1087' d='M216.01,491.775l-1.364,12.279s-.487,5.847-1.949,7.114a5.51,5.51,0,0,1-.487,2.436l-.682,7.7a17.762,17.762,0,0,1,.877,3.313c-.1.487.39,2.047.292,2.241a37.454,37.454,0,0,1-4.678,0l.975-15.69,3.021-21.83Z' transform='translate(-186.01 -423.83)' opacity='0.1' />
          <path id='Path_1088' data-name='Path 1088' d='M183.649,488.507s-1.072,10.038-1.559,12.182a27.717,27.717,0,0,0-.585,4.288s-.1,3.119-.975,4a2.634,2.634,0,0,0-.78,1.949s-.877,9.843-.39,11.012.975,2.144.487,2.924-5.847.78-5.847.195,0-1.072-.292-1.364,0-2.144,0-2.144-1.169-8.673-.1-11.207,1.559-9.453,1.559-9.453-.78-7.894-1.754-9.161.195-5.75.195-5.75Z' transform='translate(-156.086 -420.952)' fill='#2f2e41' />
          <path id='Path_1089' data-name='Path 1089' d='M226.415,271.606l-.878.7,1.408.469a16.8,16.8,0,0,1,3.91,2.431,4.471,4.471,0,0,1,.177-3.024,1.559,1.559,0,0,0,.225-1.018,1.267,1.267,0,0,0-.494-.591,15.326,15.326,0,0,0-1.507-1.028c-.365-.218-1.115-.8-1.534-.736a3.89,3.89,0,0,1-.281,1.6A13.727,13.727,0,0,1,226.415,271.606Z' transform='translate(-201.595 -235.222)' fill='#ffb9b9' />
          <path id='Path_1110' data-name='Path 1110' d='M4,0C6.2,0,7.7,1.161,7.7,3.368S6.2,7.991,4,7.991A4,4,0,0,1,4,0Z' transform='translate(24.884 29.183)' fill='#ffb9b9' />
          <path id='Path_1090' data-name='Path 1090' d='M180.638,295.618c-.21-1.887-.241-4.987-1.9-5.93s-3.549-2-4.746-2.043c0,0-5.985,1.385-6.569,6.647a68.7,68.7,0,0,0,.39,12.961s.155,6.933-.917,10.539c0,0-1.909.571,1.989-.6s10.72,3.313,10.72,3.313.682-.682.682-1.169.354-4.175.354-4.175-.045-12.421,0-13.69A44.648,44.648,0,0,0,180.638,295.618Z' transform='translate(-149.997 -250.614)' fill='#3f3d56' />
          <path id='Path_1092' data-name='Path 1092' d='M185.378,391.851s-.682,4.288,2.144,3.9c0,0,1.462-.195,1.657,0s7.406-1.072,8.381-2.144c0,0,1.169-.39,1.754.195s6.432,1.169,4.678-.585a8.924,8.924,0,0,0-4.483-2.144l-3.7.195a5.234,5.234,0,0,1-3.119,0c-1.169-.585-4.483-.39-4.483-.39Z' transform='translate(-166.585 -339.596)' fill='#ffb9b9' />
          <path id='Path_1093' data-name='Path 1093' d='M187.5,304.226s-4.385.487-4.385,6.822v8.089a6.887,6.887,0,0,0,.6,1.651,1.919,1.919,0,0,0,.873.8s.567.262.587.266c.5.277-.755-.257,1.028-.118a8.653,8.653,0,0,0,2.62,0c2.107-.34,5.033-1.219,5.2-1.186.487.1,0-3.31,0-3.31s-5.713-.833-6.864-.728c-.278.025.509-2.327.724-3.531C188.451,309.758,189.713,304.374,187.5,304.226Z' transform='translate(-164.709 -265.517)' fill='#3f3d56' stroke='#3c3b4e' stroke-width='0.1' />
          <path id='Path_1105' data-name='Path 1105' d='M828.94,442.2s-2.725-8.241,4.039-6.722a4.39,4.39,0,0,1,2.631,1.012l.557.631c1.08,0,.344,1.42.138,2.6,0,0,.313.481-.488-.3a1.718,1.718,0,0,1-.357-.459c-.522-1.052-2.4-.78-3.607-.691-.618.046-.551,2.657-1.234,2.506C829.116,438.831,828.655,441.486,828.94,442.2Z' transform='translate(-803.936 -408.68)' fill='#2f2e41' />
        </svg>
        <h4>Choosing the right technology</h4>
        <p>After a clear sitemap has been prepared, I used it as a reference to create a low-fi Prototype with wireframes using Adobe XD, which later got tested by a small number of people which further helped in improving the overall user experience of the prototype. </p>
        <ul>
          <li>
            <svg id='Group_426' data-name='Group 426' xmlns='http://www.w3.org/2000/svg' width='69.387' height='69.387' viewBox='0 0 69.387 69.387'>
              <g id='Group_72' data-name='Group 72' transform='translate(0)'>
                <path id='Path_178' data-name='Path 178' d='M34.694,0A34.694,34.694,0,1,1,0,34.694,34.694,34.694,0,0,1,34.694,0Z' fill='#f1fbff' />
              </g>
              <g id='Group_58' data-name='Group 58' transform='translate(5.758 9.357)'>
                <g id='react'>
                  <path id='Path_170' data-name='Path 170' d='M.754,26.234c0,4.291,4.19,8.3,10.8,10.554-1.319,6.641-.236,11.993,3.38,14.078,3.717,2.144,9.255.66,14.511-3.935,5.123,4.409,10.3,6.144,13.914,4.053,3.714-2.15,4.843-7.865,3.487-14.713C53.722,34,57.57,30.581,57.57,26.234c0-4.191-4.2-7.817-10.714-10.06,1.459-7.131.223-12.353-3.543-14.525C39.682-.445,34.444,1.38,29.246,5.9,23.837,1.1,18.651-.364,14.889,1.813c-3.627,2.1-4.662,7.55-3.339,14.313C5.167,18.352.754,22.06.754,26.234Z' transform='translate(-0.754 -0.785)' fill='rgba(255,255,255,0)' />
                  <path id='Path_171' data-name='Path 171' d='M56.73,29.065q-.806-.276-1.624-.512.136-.552.251-1.108c1.23-5.969.426-10.777-2.32-12.36-2.632-1.518-6.937.065-11.285,3.848q-.643.56-1.256,1.153-.411-.394-.836-.772c-4.557-4.046-9.124-5.751-11.866-4.163-2.63,1.522-3.409,6.043-2.3,11.7q.165.84.373,1.671c-.646.184-1.27.379-1.868.587-5.342,1.862-8.754,4.781-8.754,7.809,0,3.127,3.662,6.264,9.227,8.165q.677.23,1.364.427-.223.895-.4,1.8c-1.055,5.558-.231,9.971,2.392,11.484,2.709,1.562,7.256-.044,11.683-3.913q.525-.459,1.053-.971.665.641,1.364,1.245c4.288,3.69,8.524,5.18,11.144,3.663,2.706-1.567,3.586-6.308,2.444-12.076q-.131-.661-.3-1.349.479-.141.938-.293c5.785-1.916,9.548-5.015,9.548-8.184,0-3.039-3.522-5.977-8.971-7.853Z' transform='translate(-12.007 -11.448)' fill='#53c1de' />
                  <path
                    id='Path_172'
                    data-name='Path 172'
                    d='M62.972,50.536c-.276.091-.559.18-.847.265a50.591,50.591,0,0,0-2.555-6.392,50.57,50.57,0,0,0,2.456-6.3c.516.15,1.017.307,1.5.473,4.669,1.607,7.517,3.984,7.517,5.815,0,1.951-3.076,4.483-8.07,6.138ZM60.9,54.642a18.252,18.252,0,0,1,.243,6.66,4.454,4.454,0,0,1-1.652,3.132c-1.59.92-4.991-.276-8.658-3.432q-.631-.543-1.269-1.157a50.654,50.654,0,0,0,4.229-5.371,50.32,50.32,0,0,0,6.834-1.053Q60.78,54.045,60.9,54.642ZM39.942,64.275a4.454,4.454,0,0,1-3.539.133c-1.592-.918-2.253-4.462-1.351-9.215q.161-.843.368-1.675a50.685,50.685,0,0,0,6.8.984,52.452,52.452,0,0,0,4.331,5.351q-.47.454-.961.885a18.256,18.256,0,0,1-5.648,3.536ZM32.663,50.524A18.261,18.261,0,0,1,26.778,47.4a4.455,4.455,0,0,1-1.883-3c0-1.837,2.739-4.181,7.308-5.774q.86-.3,1.737-.546A51.7,51.7,0,0,0,36.4,44.451a52.483,52.483,0,0,0-2.49,6.463Q33.282,50.734,32.663,50.524ZM35.1,33.916c-.948-4.846-.319-8.5,1.266-9.42,1.688-.977,5.421.416,9.355,3.909.251.223.5.457.757.7a51.653,51.653,0,0,0-4.3,5.319,52.669,52.669,0,0,0-6.733,1.046q-.193-.773-.347-1.555Zm21.765,5.374q-.74-1.278-1.534-2.523c1.61.2,3.152.473,4.6.8a45.978,45.978,0,0,1-1.615,4.345q-.7-1.327-1.451-2.626Zm-8.876-8.645a46.1,46.1,0,0,1,2.969,3.585q-2.98-.141-5.964,0c.98-1.293,1.985-2.494,2.994-3.583Zm-8.933,8.66q-.742,1.288-1.424,2.609c-.628-1.489-1.165-2.953-1.6-4.366,1.44-.322,2.975-.586,4.574-.785q-.8,1.253-1.547,2.542Zm1.593,12.881A45.9,45.9,0,0,1,36,51.439c.445-1.439.994-2.934,1.636-4.455q.684,1.322,1.431,2.611.761,1.314,1.584,2.591Zm7.4,6.116c-1.022-1.1-2.041-2.322-3.036-3.633q1.449.057,2.952.057,1.543,0,3.046-.068A45.841,45.841,0,0,1,48.052,58.3Zm10.288-11.4a45.779,45.779,0,0,1,1.694,4.439,45.739,45.739,0,0,1-4.707.8q.8-1.268,1.549-2.568Q57.639,48.26,58.341,46.907ZM55.01,48.5q-1.147,1.992-2.421,3.906c-1.5.107-3.044.162-4.621.162s-3.1-.049-4.568-.144q-1.307-1.908-2.466-3.912T38.781,44.45q1-2.074,2.146-4.068h0q1.149-1.993,2.447-3.895c1.5-.113,3.039-.173,4.595-.173s3.1.06,4.6.174q1.284,1.9,2.431,3.882t2.175,4.049Q56.167,46.5,55.01,48.5Zm4.447-24.071c1.69.975,2.347,4.9,1.285,10.057q-.1.5-.227,1a51.639,51.639,0,0,0-6.747-1.066A50.636,50.636,0,0,0,49.5,29.1q.567-.546,1.16-1.064C54.389,24.8,57.87,23.518,59.457,24.433Z'
                    transform='translate(-19.504 -18.928)'
                    fill='#f1fbff'
                  />
                  <path id='Path_173' data-name='Path 173' d='M112.55,94.665a4.506,4.506,0,1,1-4.506,4.506,4.506,4.506,0,0,1,4.506-4.506' transform='translate(-84.085 -73.701)' fill='#53c1de' />
                </g>
              </g>
            </svg>
            React JS{" "}
          </li>
          <li>
            <svg xmlns='http://www.w3.org/2000/svg' width='69' height='70' viewBox='0 0 69 70'>
              <g id='Group_427' data-name='Group 427' transform='translate(-0.488)'>
                <rect id='Rectangle_211' data-name='Rectangle 211' width='69' height='70' rx='34.5' transform='translate(0.488)' fill='#f9fff3' />
                <g id='nodejs-icon' transform='translate(19.409 18.216)'>
                  <path
                    id='Path_166'
                    data-name='Path 166'
                    d='M14.417.942a2.806,2.806,0,0,1,2.74,0q6.256,3.535,12.513,7.068a2.576,2.576,0,0,1,1.3,2.218V24.407a2.6,2.6,0,0,1-1.4,2.267Q23.337,30.189,17.1,33.708a2.727,2.727,0,0,1-2.77-.077q-1.869-1.084-3.741-2.163a2.2,2.2,0,0,1-.722-.52c.159-.214.443-.241.674-.335a8.732,8.732,0,0,0,1.476-.689.344.344,0,0,1,.384.023c1.066.611,2.122,1.24,3.191,1.845.228.132.459-.043.654-.152q6.119-3.458,12.243-6.909a.4.4,0,0,0,.222-.4q0-7.016,0-14.033a.439.439,0,0,0-.261-.437q-6.214-3.5-12.425-7a.432.432,0,0,0-.488,0Q9.33,6.361,3.119,9.865a.433.433,0,0,0-.263.435q0,7.016,0,14.034a.4.4,0,0,0,.225.394Q4.74,25.668,6.4,26.6a2.564,2.564,0,0,0,2.075.278A1.574,1.574,0,0,0,9.493,25.4c.006-4.65,0-9.3,0-13.95a.35.35,0,0,1,.381-.358c.531,0,1.063-.007,1.594,0a.368.368,0,0,1,.347.425c0,4.68.006,9.359,0,14.039a3.56,3.56,0,0,1-1.665,3.214,5.126,5.126,0,0,1-4.582-.126C4.354,28.04,3.195,27.324,2,26.674A2.6,2.6,0,0,1,.6,24.407V10.228A2.581,2.581,0,0,1,1.949,7.981Q8.183,4.463,14.417.942Z'
                    transform='translate(-0.603 -0.584)'
                    fill='#8cc84b'
                  />
                  <path
                    id='Path_167'
                    data-name='Path 167'
                    d='M109.8,85.648a9.837,9.837,0,0,1,5.385.824A4.072,4.072,0,0,1,117.173,90a.381.381,0,0,1-.414.281c-.526,0-1.052.007-1.578,0a.407.407,0,0,1-.381-.394,2.4,2.4,0,0,0-1.149-1.66,6.812,6.812,0,0,0-3.153-.451,4.28,4.28,0,0,0-2.257.562,1.43,1.43,0,0,0-.476,1.6c.169.4.633.531,1.012.65,2.185.571,4.5.515,6.643,1.266a3.127,3.127,0,0,1,2.059,1.831,3.912,3.912,0,0,1-.663,3.733,5.23,5.23,0,0,1-2.808,1.513,13.49,13.49,0,0,1-4.238.18,6.679,6.679,0,0,1-3.728-1.4,3.913,3.913,0,0,1-1.26-3.086.353.353,0,0,1,.387-.312c.53,0,1.059-.006,1.589,0a.371.371,0,0,1,.379.367,2.408,2.408,0,0,0,.9,1.69,6.794,6.794,0,0,0,3.66.666,4.97,4.97,0,0,0,3-.734,1.658,1.658,0,0,0,.451-1.583c-.129-.468-.618-.686-1.038-.828-2.157-.682-4.5-.435-6.633-1.206a3.228,3.228,0,0,1-2.039-1.777,3.639,3.639,0,0,1,.727-3.786,5.866,5.866,0,0,1,3.641-1.463Z'
                    transform='translate(-92.363 -75.469)'
                    fill='#8cc84b'
                  />
                </g>
              </g>
            </svg>
            Node JS
          </li>
          <li>
            <svg xmlns='http://www.w3.org/2000/svg' width='70' height='70' viewBox='0 0 70 70'>
              <g id='Group_447' data-name='Group 447' transform='translate(-0.14)'>
                <rect id='Rectangle_213' data-name='Rectangle 213' width='70' height='70' rx='35' transform='translate(0.14)' fill='rgba(88,170,80,0.08)' />
                <g id='mongodb' transform='translate(26.784 16.943)'>
                  <path id='Path_155' data-name='Path 155' d='M26.185,49.15l-.947-.324s.116-4.827-1.617-5.174c-1.155-1.34.185-56.822,4.343-.185a3.377,3.377,0,0,0-1.686,1.94A17.816,17.816,0,0,0,26.185,49.15Z' transform='translate(-17.411 -13.578)' fill='#fff' fill-rule='evenodd' />
                  <path id='Path_156' data-name='Path 156' d='M26.185,49.15l-.947-.324s.116-4.827-1.617-5.174c-1.155-1.34.185-56.822,4.343-.185a3.377,3.377,0,0,0-1.686,1.94A17.816,17.816,0,0,0,26.185,49.15Z' transform='translate(-17.411 -13.578)' fill='#a6a385' fill-rule='evenodd' />
                  <path id='Path_157' data-name='Path 157' d='M32.725,31.386a16.781,16.781,0,0,0,6.352-16.793C37.206,6.348,32.795,3.645,32.31,2.605A11.661,11.661,0,0,1,31.27.573l.347,22.936c0,.023-.716,7.022,1.109,7.877' transform='translate(-23.443 -0.48)' fill='#fff' fill-rule='evenodd' />
                  <path id='Path_158' data-name='Path 158' d='M32.725,31.386a16.781,16.781,0,0,0,6.352-16.793C37.206,6.348,32.795,3.645,32.31,2.605A11.661,11.661,0,0,1,31.27.573l.347,22.936c0,.023-.716,7.022,1.109,7.877' transform='translate(-23.443 -0.48)' fill='#499d4a' fill-rule='evenodd' />
                  <path id='Path_159' data-name='Path 159' d='M7.342,31.409S-.442,26.1.02,16.742c.439-9.355,5.936-13.951,7-14.783A2.151,2.151,0,0,0,7.781.2c.485,1.04.393,15.545.462,17.255C8.451,24.041,7.873,30.162,7.342,31.409Z' transform='translate(0 -0.203)' fill='#fff' fill-rule='evenodd' />
                  <path id='Path_160' data-name='Path 160' d='M7.342,31.409S-.442,26.1.02,16.742c.439-9.355,5.936-13.951,7-14.783A2.151,2.151,0,0,0,7.781.2c.485,1.04.393,15.545.462,17.255C8.451,24.041,7.873,30.162,7.342,31.409Z' transform='translate(0 -0.203)' fill='#58aa50' fill-rule='evenodd' />
                </g>
              </g>
            </svg>
            MongoDB
          </li>
        </ul>
        <section>
          <h4>Building the base file structure</h4>
          <p>After a clear sitemap has been prepared, I used it as a reference to create a low-fi Prototype with wireframes using Adobe XD, which later got tested by a small number of people which further helped in improving the overall user experience of the prototype. </p>
          <img src='/file structure essence@2x.png' width='100%' alt='file structure' />
        </section>
        <h4>Converting Design to Clean code</h4>
        <p>After a clear sitemap has been prepared, I used it as a reference to create a low-fi Prototype with wireframes using Adobe XD, which later got tested by a small number of people which further helped in improving the overall user experience of the prototype. </p>
        <code lang='css'>hello</code>
       
        <section>
          <h4>Setting up the backend</h4>
          <p>After a clear sitemap has been prepared, I used it as a reference to create a low-fi Prototype with wireframes using Adobe XD, which later got tested by a small number of people which further helped in improving the overall user experience of the prototype. </p>
          <h5>Choosing the database</h5>
          <p>After a clear sitemap has been prepared, I used it as a reference to create a low-fi Prototype with wireframes using Adobe XD, which later got tested by a small number of people which further helped in improving the overall user experience of the prototype. </p>
          <img src='/essence mongoPage.png' width='100%' alt='mongo DB Page' />
          <h5>Connecting the Backend to the Frontend</h5>
          <p>After a clear sitemap has been prepared, I used it as a reference to create a low-fi Prototype with wireframes using Adobe XD, which later got tested by a small number of people which further helped in improving the overall user experience of the prototype. </p>
        </section>
        <h4>Implement Testing</h4>
        <p>After a clear sitemap has been prepared, I used it as a reference to create a low-fi Prototype with wireframes using Adobe XD, which later got tested by a small number of people which further helped in improving the overall user experience of the prototype. </p>
        <img src='/test screen.png' width='100%' alt='test screen' />

        <section>
          <h4>Making the code Production ready</h4>
          <p>After a clear sitemap has been prepared, I used it as a reference to create a low-fi Prototype with wireframes using Adobe XD, which later got tested by a small number of people which further helped in improving the overall user experience of the prototype. </p>
          <ul className={Styles.productionLists}>
            <li>Most obvious bugs are fixed</li>
            <li>code is well-structured and self-documenting</li>
            <li>Automated Tests are written and have a sufficient level of coverage</li>
            <li>It's gone through a peer review process before being incorporated into the main code base.</li>
            <li>It will pass the "build system" may automatically check rules like: coding conventions, complexity, linting, testing, compilation. Sometimes this may include deployment success to a testing environment.</li>
          </ul>
        </section>
        <h4>Hosting</h4>
        <p>After a clear sitemap has been prepared, I used it as a reference to create a low-fi Prototype with wireframes using Adobe XD, which later got tested by a small number of people which further helped in improving the overall user experience of the prototype. </p>
        <img src='/gcp essence server.png' width='100%' alt='gcp essence screen' />
        <img src='/firebase essence@2x.png' width='100%' alt='firebase essence' /> */}
      </section>
    </>
  );
}
