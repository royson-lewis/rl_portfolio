import Head from 'next/head'

import ProjectDetails from '../../view/screens/projects/project/details'

const ProjectId = () => (
  <>
    <Head>
      <title>Project: Test - Royson Lewis</title>
      <meta name="description" content="Test Project Description" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Project: Test - Royson Lewis" />
      <meta property="og:description" content="Test Project Description" />
      <meta property="og:url" content="http://www.roysonlewis.com/projects/test" />
      <meta property="og:site_name" content="Royson Lewis" />
    </Head>
    <ProjectDetails />
  </>
)

export default ProjectId
