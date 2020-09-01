import React, { useState } from 'react'
import ViajensComponent from './components/ViajensComponent'

const Viagens = () => {
  const [openAddViagens, setOpenAddViagens] = useState(false)

  return (
    <ViajensComponent
      openAddViagens={openAddViagens}
      setOpenAddViagens={setOpenAddViagens}
    />
  )
}

export default Viagens
