import { FC } from 'react'
import { default as ToolbarCP } from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import useStyles from '../../../../hooks/useTheme'

export interface ToolBarProps {
  setOpenDrawer(prop: boolean): void
  menuId: string
  mobileMenuId: string
  handleProfileMenuOpen: any
  handleMobileMenuOpen: any
}

const ToolbarComponent: FC<ToolBarProps> = ({
  setOpenDrawer,
  menuId,
  mobileMenuId,
  handleProfileMenuOpen,
  handleMobileMenuOpen,
}) => {
  const classes = useStyles()

  return (
    <ToolbarCP>
      <IconButton
        edge='start'
        className={classes.menuButton}
        color='inherit'
        aria-label='open drawer'
        onClick={() => setOpenDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Typography className={classes.title} variant='h6' noWrap>
        CEM
      </Typography>
      <div className={classes.grow} />
      <div className={classes.sectionDesktop}>
        <IconButton aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label='show 17 new notifications' color='inherit'>
          <Badge badgeContent={17} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          edge='end'
          aria-label='account of current user'
          aria-controls={menuId}
          aria-haspopup='true'
          onClick={handleProfileMenuOpen}
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label='show more'
          aria-controls={mobileMenuId}
          aria-haspopup='true'
          onClick={handleMobileMenuOpen}
          color='inherit'
        >
          <MoreIcon />
        </IconButton>
      </div>
    </ToolbarCP>
  )
}

export default ToolbarComponent
