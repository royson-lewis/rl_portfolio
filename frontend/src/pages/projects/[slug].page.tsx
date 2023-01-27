import React from 'react'

import Head from 'next/head'
import { GetStaticPropsContext } from 'next'

import ProjectDetails from '../../view/screens/projects/project/details'
import MainAPIClient from '../../api/client'
import ProjectTypes, { CaseStudyTypes, ProjectBySlugTypes } from '../../api/projects/types'

const ProjectId: React.FC<{
  project: ProjectBySlugTypes
  caseStudy: CaseStudyTypes
}> = ({ project, caseStudy }) => (
  <>
    <Head>
      <title>{`Project: ${project.name} - Royson Lewis`}</title>
      <meta name="description" content={project.description} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`Project: ${project.name} - Royson Lewis`} />
      <meta property="og:description" content={project.description} />
      <meta property="og:url" content={`https://www.roysonlewis.com/projects/${project.slug}`} />
      <meta property="og:site_name" content="Royson Lewis" />
    </Head>
    <ProjectDetails project={project} caseStudy={caseStudy} />
  </>
)

export default ProjectId

export async function getStaticPaths() {
  const res = await MainAPIClient.get('projects')
  const projects = res.data?.data as ProjectTypes[]
  return {
    paths: projects.map((project) => ({
      params: {
        slug: project?.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const res = await MainAPIClient.get(`projects/${params?.slug}`).catch((err) => {
    console.error(err)
  })
  const caseStudyRes = await MainAPIClient.get(`projects/${params?.slug}/case-study`).catch(
    (err) => {
      console.error(err)
    },
  )
  return {
    props: {
      project: res?.data?.data,
      caseStudy: caseStudyRes?.data?.data || {},
    },
  }
}
