import React from 'react'

import SectionHeroMain from './section/hero/main'
import SectionProjectsMain from './section/projects/main'
import SectionSkillsMain from './section/skills/main'
import ProjectTypes, {CategoryProjectsTypes} from "../../../api/projects/types";

const HomeMain: React.FC<{
    categoryProjects: CategoryProjectsTypes[]
}> = ({
    categoryProjects
}) => (
  <>
    <main>
      <SectionHeroMain />
      <SectionProjectsMain categoryProjects={categoryProjects} />
      <SectionSkillsMain />
    </main>
  </>
)

export default HomeMain
