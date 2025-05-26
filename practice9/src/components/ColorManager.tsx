import { useState } from 'react'

export default function ColorManager() {
  const [input, setInput] = useState('')
  const [colors, setColors] = useState<string[]>([])

  const addColor = () => {
    if (/^#([0-9A-F]{3}){1,2}$/i.test(input)) {
      setColors([...colors, input])
      setInput('')
    }
  }

  const setBg = (color: string) => {
    document.body.style.background = color
  }

  return (
    <div>
      <h2>Color Manager</h2>
      <input
        type="text"
        value={input}
        placeholder="#rrggbb"
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={addColor}>Add</button>
      <div style={{ display: 'flex', marginTop: '10px', gap: '8px' }}>
        {colors.map((c, i) => (
          <div
            key={i}
            onClick={() => setBg(c)}
            style={{
              width: '30px',
              height: '30px',
              background: c,
              border: '1px solid #000',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>
  )
}
