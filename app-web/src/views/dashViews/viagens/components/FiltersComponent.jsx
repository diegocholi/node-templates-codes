import React from 'react'
import { FiltersToolBar, InputText } from '../../../../components'

export default ({ setOpenAddViagens }) => (
  <FiltersToolBar
    rightButton
    addClick={() => setOpenAddViagens(true)}
    searchClick={() => console.log('searchClick OK')}
  >
    <InputText
      id={'standard-basic-1'}
      label={'Teste'}
      placeholder={'Teste'}
      onChange={() => console.log('Teste')}
    />
    <InputText
      id={'standard-basic-2'}
      label={'Teste'}
      placeholder={'Teste'}
      onChange={() => console.log('Teste')}
    />
    <InputText
      id={'standard-basic-3'}
      label={'Teste'}
      placeholder={'Teste'}
      onChange={() => console.log('Teste')}
    />
  </FiltersToolBar>
)
