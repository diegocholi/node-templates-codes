import React, { useState } from 'react'
import ToolbarContainer from './toolbar/ToolbarContainer'
import DrawerContainer from './drawer/DrawerContainer'
import rotas from '../../rotas'

const Theme = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleDrawerOpen = () => {
    setOpenDrawer(true)
  }

  const handleDrawerClose = () => {
    setOpenDrawer(false)
  }

  /* Definindo props do component */
  const configs = {
    incons: [],
    paths: [],
    components: [],
    titlePages: [],
  }

  rotas.map((rota) => {
    configs.incons.push(rota.incon)
    configs.paths.push(rota.path)
    configs.components.push(rota.component)
    configs.titlePages.push(rota.titlePage)
    return undefined
  })

  return (
    <>
      <ToolbarContainer handleDrawerOpen={handleDrawerOpen} open={openDrawer} />
      <DrawerContainer
        {...configs}
        open={openDrawer}
        handleDrawerClose={handleDrawerClose}
      />
    </>
  )
}

export default Theme
