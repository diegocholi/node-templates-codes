import React, { useState } from 'react'
import ViagensComponent from './components/ViagensComponent'

const Viagens = () => {
  const [openAddViagens, setOpenAddViagens] = useState(false)

  return (
    <ViagensComponent
      openAddViagens={openAddViagens}
      setOpenAddViagens={setOpenAddViagens}
    />
  )
}

export default Viagens
