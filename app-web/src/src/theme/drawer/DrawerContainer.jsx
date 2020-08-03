import React from 'react'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import useStyles from '../consts/useStyles'
import { useTheme } from '@material-ui/core/styles'

import { Link, Switch, Route } from 'react-router-dom'

const DrawerContainer = (props) => {
  const classes = useStyles()
  const theme = useTheme()

  const {
    open,
    handleDrawerClose,
    children = undefined,
    incons = [],
    paths = [],
    components = [],
    titlePages = [],
  } = props

  return (
    <div className={classes.root}>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        {paths.map((path, id) => (
          <List key={id}>
            <Link to={path} className={classes.link}>
              <ListItem button>
                <ListItemIcon>{incons[id]}</ListItemIcon>
                <ListItemText primary={titlePages[id]} />
              </ListItem>
            </Link>
          </List>
        ))}

        <Divider />
      </Drawer>
      {children ? children() : ''}
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Switch>
          {paths.map((path, id) => {
            if (path === '/')
              return (
                <Route key={id} path={path} exact component={components[id]} />
              )
            return <Route key={id} path={path} component={components[id]} />
          })}
        </Switch>
      </main>
    </div>
  )
}

export default DrawerContainer
