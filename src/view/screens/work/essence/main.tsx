import dynamic from 'next/dynamic'
import LazyLoad from 'react-lazyload'

import styles from '../main.module.scss'
import goToTopHandler from '../../../../helper/go-to-top/handler'

const CaseHero = dynamic(() => import('../section/case-hero'))
const ProjectInfo = dynamic(() => import('../section/projectInfo'))
const ProjectCase = dynamic(() => import('../section/project-case'))
const Results = dynamic(() => import('../section/results'))
const Conclusion = dynamic(() => import('../section/conclusion'))
const ContactSection = dynamic(() => import('../../contact/section/contact'))

const WorkEssenceMain = () => (
  <>
    <main className={styles.work} id="top">
      <button type="submit" className="goToTop" aria-label="go to top" onClick={goToTopHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.164"
          height="15.921"
          viewBox="0 0 17.164 15.921"
        >
          <g
            id="Icon_feather-arrow-up"
            data-name="Icon feather-arrow-up"
            transform="translate(2.121 1.5)"
          >
            <path
              id="Path_1275"
              data-name="Path 1275"
              d="M18,20.422V7.5"
              transform="translate(-11.539 -7.5)"
              fill="none"
              stroke="#3f3d56"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
            <path
              id="Path_1276"
              data-name="Path 1276"
              d="M7.5,13.961,13.961,7.5l6.461,6.461"
              transform="translate(-7.5 -7.5)"
              fill="none"
              stroke="#3f3d56"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </g>
        </svg>
      </button>
      <CaseHero project="essence" />
      <ProjectInfo project="essence" />
      <ProjectCase project="essence" />
      <LazyLoad height={400}>
        <Results project="essence" />
      </LazyLoad>
      <LazyLoad height={400}>
        <Conclusion project="essence" />
      </LazyLoad>
      <section style={{ backgroundColor: '#f6f6f6', paddingBottom: '3rem' }}>
        <LazyLoad height={400}>
          <ContactSection />
        </LazyLoad>
      </section>
    </main>
  </>
)

export default WorkEssenceMain
