import React from 'react'
import { OpenFormButton } from '../styled'
import FormComponent from './FormComponent'
import VpnKeyIcon from '@material-ui/icons/VpnKey'

export default ({
  handleEmailChange,
  handlePasswdChange,
  handleOpenForm,
  handleClosedForm,
  handlerLoginButton,
  openForm,
  statusRequestLogin,
}) =>
  openForm ? (
    <FormComponent
      handleEmailChange={handleEmailChange}
      handlePasswdChange={handlePasswdChange}
      handlerLoginButton={handlerLoginButton}
      handleClosedForm={handleClosedForm}
      statusRequestLogin={statusRequestLogin}
    />
  ) : (
    <div
      style={{
        position: 'fixed' /* Set the navbar to fixed position */,
        right: 0,
      }}
    >
      <OpenFormButton onClick={handleOpenForm}>
        <VpnKeyIcon />
      </OpenFormButton>
    </div>
  )
