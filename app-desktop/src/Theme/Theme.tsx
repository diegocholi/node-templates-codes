import { useState } from 'react'
import useTheme from '../hooks/useTheme'
import Drawer from './components/Drawer/Drawer'
import TopBar from './components/TopBar/TopBar'
import BottomNavigation from './components/BottomNavigation/BottomNavigation'
import { BrowserRouter as Router } from 'react-router-dom'
import Switch from './components/Switch/Switch'

export interface ThemeProps {}

const Theme: React.FC<ThemeProps> = () => {
  const classes = useTheme()
  const [openDrawer, setOpenDrawer] = useState(false)
  const [
    selectedBottomNavigation,
    setSelectedBottomNavigation,
  ] = useState<string>('')

  return (
    <div className={classes.grow}>
      <Router>
        <TopBar setOpenDrawer={setOpenDrawer} />
        <Drawer
          isOpen={openDrawer}
          setIsOpen={setOpenDrawer}
          setSelectedBottomNavigation={setSelectedBottomNavigation}
        />
        <BottomNavigation
          selectedBottomNavigation={selectedBottomNavigation}
          setSelectedBottomNavigation={setSelectedBottomNavigation}
        />
        <Switch />
      </Router>
    </div>
  )
}

export default Theme
