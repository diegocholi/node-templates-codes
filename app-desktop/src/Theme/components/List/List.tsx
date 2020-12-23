import { FC } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { default as ListCP } from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from '../../../components/styled'
import routes from '../../../routes/routes'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})
interface ListProps {
  anchor: string
  toggleDrawer(prop: boolean): any
  ClearBottonMenu(): void
}
const List: FC<ListProps> = (props) => {
  const { anchor, toggleDrawer, ClearBottonMenu } = props
  const classes = useStyles()

  return (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <ListCP>
        {routes.map((item, key) =>
          item.routeType.drawer ? (
            <ListItem
              button
              component={Link}
              key={key}
              to={item.link}
              onClick={ClearBottonMenu}
            >
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText>{item.label}</ListItemText>
            </ListItem>
          ) : (
            ''
          )
        )}
      </ListCP>
      <Divider />
    </div>
  )
}

export default List
