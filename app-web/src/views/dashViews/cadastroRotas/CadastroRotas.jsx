import React from 'react'
import { FiltersToolBar, InputText, Title } from '../../../components'

const CadastroRotas = () => {
  return (
    <div>
      <FiltersToolBar
        rightButton
        addClick={() => console.log('Add OK')}
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
      <Title horizontalLine>Cadastro de Rotas</Title>
      {/*<Mapa directions={true} />*/}
    </div>
  )
}

export default CadastroRotas
