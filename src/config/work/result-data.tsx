const workResultData: Record<
  string,
  {
    logo: string
    projectLink: string
    mockup: string
    pages: { page1: string; page2: string; page3: string; page4: string }
    background: string
    color: { background: string; accent: string }
  }
> = {
  essence: {
    logo: '/essence logo.png',
    projectLink: 'https://essence-server.web.app/',
    mockup: '/essence results mockup@2x.png',
    pages: {
      page1: '/essence homepage@2x.png',
      page2: '/essence product page@2x.png',
      page3: '/essence cart page@2x.png',
      page4: '/essence checkout page@2x.png',
    },
    background: 'Essence',
    color: {
      background: '#36354A',
      accent: '#58d06f',
    },
  },
  vamyou: {
    logo: '/vamyouLogo@2x.png',
    projectLink: 'https://essence-server.web.app/',
    mockup: '/Vamyou results mockup ipad iphone mac@2x.png',
    pages: {
      page1: '/vamyou Homepage@2x.png',
      page2: '/vamyou blogpage@2x.png',
      page3: '/Vamyou Search page@2x.png',
      page4: '/Vamyou signin page@2x.png',
    },
    background: 'Essence',
    color: {
      background: '#111D4A',
      accent: '#fc326f',
    },
  },
}

export default workResultData
