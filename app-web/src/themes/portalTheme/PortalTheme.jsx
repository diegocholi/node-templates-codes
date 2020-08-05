import React from 'react'
import useApp from '../../contexts/AppContext'

const PortalTheme = () => {
  const { auth } = useApp()

  const onClick = () => {
    auth(true)
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
      }}
    >
      <button onClick={onClick}>Logar</button>
    </div>
  )
}

export default PortalTheme
