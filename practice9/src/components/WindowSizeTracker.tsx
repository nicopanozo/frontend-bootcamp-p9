import { useState, useEffect } from 'react'

export default function WindowSizeTracker() {
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const update = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }
    update()
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Window Size Tracker</h2>
      <p>
        Width: {size.width}px
        <br />
        Height: {size.height}px
      </p>
    </div>
  )
}
