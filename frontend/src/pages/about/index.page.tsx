import Head from 'next/head'

import AboutMain from '../../view/screens/about/main'

const AboutIndex = () => (
  <>
    <Head>
      <title>About Me - Royson Lewis</title>
      <meta
        name="description"
        content="I am a UX / UI designer and developer with hands-on experience in building web apps and websites from scratch from initial designs to development and all the way to hosting a complete production-ready software in a custom-configured server."
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="About Me - Royson Lewis Portfolio" />
      <meta
        property="og:description"
        content="I am a UX / UI designer and developer with hands-on experience in building web apps and websites from scratch from initial designs to development and all the way to hosting a complete production-ready software in a custom-configured server."
      />
      <meta property="og:url" content="http://www.roysonlewis.com/about" />
      <meta property="og:site_name" content="Royson Lewis" />
    </Head>
    <AboutMain />
  </>
)

export default AboutIndex
