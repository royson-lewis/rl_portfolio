import React from 'react'

import Head from 'next/head'

import HomeMain from '../view/screens/home/main'
import MainAPIClient from '../api/client'
import { CategoryProjectsTypes } from '../api/projects/types'
import TechnologyTypes from '../api/technology/types'

const HomeIndex: React.FC<{
  categoryProjects: CategoryProjectsTypes[]
  skills: TechnologyTypes[]
}> = ({ categoryProjects, skills }) => (
  <>
    <Head>
      <title>Home - Royson Lewis</title>
      <meta
        name="description"
        content="Welcome to my Portfolio!, Explore some of my best projects, Services and Skills showcased in this portfolio. Contact me for any queries through the various options available in the contact section."
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Home - Royson Lewis" />
      <meta
        property="og:description"
        content="Welcome to my Portfolio!, Explore some of my best projects, Services and Skills showcased in this portfolio. Contact me for any queries through the various options available in the contact section."
      />
      <meta property="og:url" content="http://www.roysonlewis.com/" />
      <meta property="og:site_name" content="Royson Lewis" />
      <meta property="og:image" content="/royson cover@2x.png" />
    </Head>
    <HomeMain categoryProjects={categoryProjects} skills={skills} />
  </>
)

export async function getStaticProps() {
  const res = await MainAPIClient.get('projects/categories')
  const categoryProjects = res.data.data

  const skillRes = await MainAPIClient.get('technologies')
  const skills = skillRes.data.data
  return {
    props: {
      skills,
      categoryProjects,
    },
  }
}

export default HomeIndex
