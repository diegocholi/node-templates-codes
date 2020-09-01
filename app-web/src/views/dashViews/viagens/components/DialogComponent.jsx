import React from 'react'

import { Dialog, InputText, Mapa } from '../../../../components'

export default ({ openAddViagens, setOpenAddViagens }) => (
  <Dialog
    open={openAddViagens}
    setOpen={setOpenAddViagens}
    title={'Cadastro de viagens '}
    actionDialog={() => console.log('OK')}
    buttonName={'salvar'}
    buttonClosedname={'cancelar'}
    maxWidth={'lg'}
  >
    <InputText
      id={'standard-basic-4'}
      label={'Teste'}
      placeholder={'Teste'}
      onChange={() => console.log('Teste')}
    />
    <InputText
      id={'standard-basic-5'}
      label={'Teste'}
      placeholder={'Teste'}
      onChange={() => console.log('Teste')}
    />

    <Mapa directions={true} height={'100%'} width={'100%'} />
  </Dialog>
)
