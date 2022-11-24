import { useEffect, useState } from 'react'

export type Size = {
  width?: number
  height?: number
  type?: 'mobile' | 'tablet' | 'desktop-small' | 'desktop-medium' | 'desktop-large'
}

const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
    type: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      let sizeType: Size['type']
      if (window.innerWidth < 480) sizeType = 'mobile'
      else if (window.innerWidth > 480 && window.innerWidth < 768) sizeType = 'tablet'
      else if (window.innerWidth > 768 && window.innerWidth < 1024) sizeType = 'desktop-small'
      else if (window.innerWidth > 1024 && window.innerWidth < 1200) sizeType = 'desktop-medium'
      else if (window.innerWidth > 1200) sizeType = 'desktop-large'

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        type: sizeType,
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useWindowSize
