import { FC } from 'react'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { Link } from '../../../components/styled'
import {
  ContentBottomNavigation,
  BottomNavigation as BottomNavigationST,
} from './style'
import routes from '../../../routes/routes'
export interface BottomNavigationProps {
  selectedBottomNavigation: string
  setSelectedBottomNavigation(prop: string): void
}

const BottomNavigation: FC<BottomNavigationProps> = (props) => {
  const { selectedBottomNavigation, setSelectedBottomNavigation } = props

  const handleChange = (event: any, newSelectedBottomNavigation: any) => {
    setSelectedBottomNavigation(newSelectedBottomNavigation)
  }
  let validateRoutes = false
  for (let i: number = 0; i < routes.length; i++) {
    if (routes[i].routeType.bottomNav) {
      validateRoutes = true
      break
    }
  }

  if (!validateRoutes) return <></>

  return (
    <ContentBottomNavigation>
      <BottomNavigationST
        value={selectedBottomNavigation}
        onChange={handleChange}
      >
        {routes.map((item) =>
          item.routeType.bottomNav ? (
            <BottomNavigationAction
              key={item.label}
              label={item.label}
              value={item.label}
              icon={<item.icon />}
              component={Link}
              to={item.link}
            />
          ) : (
            ''
          )
        )}
      </BottomNavigationST>
    </ContentBottomNavigation>
  )
}

export default BottomNavigation
