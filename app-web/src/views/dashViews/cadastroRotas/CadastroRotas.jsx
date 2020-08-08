import React from 'react'
import Mapa from '../../../components/mapa/Mapa'
import { Title, FiltersToolBar } from '../../../components'

const CadastroRotas = () => {
  return (
    <div>
      <FiltersToolBar />
      <Title>Cadastro de Rotas</Title>
      <Mapa directions={true} />
    </div>
  )
}

export default CadastroRotas
