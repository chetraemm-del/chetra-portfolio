import React from 'react'

const BlurCircle = ({ top = 'auto', left = 'auto', right = 'auto', bottom = 'auto' }) => {
  return (
    <div
      className="pointer-events-none absolute rounded-full opacity-80"
      style={{
        top,
        left,
        right,
        bottom,
        width: '14rem',
        height: '14rem',
        background: 'rgba(59, 130, 246, 0.35)',
        filter: 'blur(60px)',
      }}
    />
  )
}

export default BlurCircle
