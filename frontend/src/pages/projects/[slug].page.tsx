import Head from 'next/head'

import ProjectDetails from '../../view/screens/projects/project/details'
import MainAPIClient from "../../api/client";
import ProjectTypes, {ProjectBySlugTypes} from "../../api/projects/types";
import {GetStaticPropsContext} from 'next'
import React from "react";

const ProjectId: React.FC<{ project: ProjectBySlugTypes }> = ({ project }) => {
    return (
        <>
            <Head>
                <title>Project: {project.name} - Royson Lewis</title>
                <meta name="description" content={project.description} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`Project: ${project.name} - Royson Lewis`} />
                <meta property="og:description" content={project.description} />
                <meta property="og:url" content={`https://www.roysonlewis.com/projects/${project.slug}`} />
                <meta property="og:site_name" content="Royson Lewis" />
            </Head>
            <ProjectDetails project={project} />
        </>
    )
}

export default ProjectId

export async function getStaticPaths() {
    const res = await MainAPIClient.get('projects')
    const projects = res.data?.data as ProjectTypes[]
    return {
        paths: projects.map(project => {
            return {
                params: {
                    slug: project?.slug
                }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
    const res = await MainAPIClient.get(`projects/${params?.slug}`)
    return {
        props: { project: res.data?.data }
    }
}
