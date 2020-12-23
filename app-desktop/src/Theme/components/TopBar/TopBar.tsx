import { FC, useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import RenderMobileMenu from './components/RenderMobileMenu'
import RenderMenu from './components/RenderMenu'
import ToolbarComponent from './components/ToolbarComponent'
export interface ThemeProps {
  setOpenDrawer(state: boolean): void
}

const Theme: FC<ThemeProps> = (props: ThemeProps) => {
  const menuId = 'primary-search-account-menu'
  const mobileMenuId = 'primary-search-account-menu-mobile'

  const { setOpenDrawer } = props

  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  return (
    <AppBar
      position='static'
      style={{
        backgroundColor: '#000',
      }}
    >
      <ToolbarComponent
        handleMobileMenuOpen={handleMobileMenuOpen}
        handleProfileMenuOpen={handleProfileMenuOpen}
        menuId={menuId}
        mobileMenuId={mobileMenuId}
        setOpenDrawer={setOpenDrawer}
      />
      <RenderMobileMenu
        id={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleMobileMenuClose}
      />
      <RenderMenu
        id={mobileMenuId}
        isMenuOpen={isMenuOpen}
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
      />
    </AppBar>
  )
}

export default Theme
