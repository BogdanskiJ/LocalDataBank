import {useLayoutEffect} from 'react'
import {useState} from 'react'

export default function windowSize() {
  const [size, setSize] = useState([0, 0])
  const updateSize = () => {
    setSize([window.innerWidth, window.innerHeight])
  }
  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return [size[0], size[1]]
}
