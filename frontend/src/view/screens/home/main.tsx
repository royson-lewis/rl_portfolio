import React from 'react'

import SectionHeroMain from './section/hero/main'
import SectionProjectsMain from './section/projects/main'
import SectionSkillsMain from './section/skills/main'
import { CategoryProjectsTypes } from '../../../api/projects/types'
import TechnologyTypes from '../../../api/technology/types'

const HomeMain: React.FC<{
  categoryProjects: CategoryProjectsTypes[]
  skills: TechnologyTypes[]
}> = ({ categoryProjects, skills }) => (
  <>
    <main>
      <SectionHeroMain />
      <SectionProjectsMain categoryProjects={categoryProjects} />
      <SectionSkillsMain skills={skills} />
    </main>
  </>
)

export default HomeMain
