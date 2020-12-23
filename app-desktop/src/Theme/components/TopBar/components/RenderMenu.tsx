import { FC } from 'react'

import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

export interface RenderMenuProps {
  id: string
  anchorEl: any
  isMenuOpen: boolean
  handleMenuClose(): void
}

const RenderMenu: FC<RenderMenuProps> = ({
  id = '',
  anchorEl,
  isMenuOpen,
  handleMenuClose,
}) => (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={id}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  </Menu>
)

export default RenderMenu
