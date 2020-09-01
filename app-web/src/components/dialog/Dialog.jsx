import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'

import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import { ExitButton, ConfirmButton } from './styled'
const DialogComponent = (props) => {
  const {
    children = undefined,
    open = false,
    setOpen = false,
    title = 'props: title',
    buttonName = 'props: buttonName',
    actionDialog = undefined,
    maxWidth = 'sm',
    fullScreen = 'sm',
    scroll = 'paper',
  } = props

  const theme = useTheme()
  const fullScreenMQ = useMediaQuery(theme.breakpoints.down(fullScreen))

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog
        fullScreen={fullScreenMQ}
        fullWidth={true}
        open={open}
        onClose={handleClose}
        maxWidth={maxWidth}
        aria-labelledby='responsive-dialog-title'
        scroll={scroll}
      >
        <DialogTitle id='responsive-dialog-title'>
          {title}
          <ExitButton autoFocus onClick={handleClose} color='primary'>
            X
          </ExitButton>
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>{children}</DialogContent>
        <DialogActions>
          <ConfirmButton onClick={actionDialog} color='primary' autoFocus>
            {buttonName}
          </ConfirmButton>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogComponent
