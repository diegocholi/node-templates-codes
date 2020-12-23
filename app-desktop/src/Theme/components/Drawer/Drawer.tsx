import { default as DrawerCP } from '@material-ui/core/Drawer'
import List from '../List/List'

export interface DrawerProps {
  isOpen: boolean
  setIsOpen(open: boolean): void
  setSelectedBottomNavigation?(prop: any): void
}

const Drawer: React.FC<DrawerProps> = (props: DrawerProps) => {
  const { isOpen = false, setIsOpen, setSelectedBottomNavigation } = props

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open)
  }

  const ClearBottonMenu = () => {
    if (setSelectedBottomNavigation) setSelectedBottomNavigation('')
  }

  return (
    <>
      <DrawerCP anchor={'left'} open={isOpen} onClose={toggleDrawer(false)}>
        <List
          ClearBottonMenu={ClearBottonMenu}
          anchor={'left'}
          toggleDrawer={toggleDrawer}
        />
      </DrawerCP>
    </>
  )
}

export default Drawer
