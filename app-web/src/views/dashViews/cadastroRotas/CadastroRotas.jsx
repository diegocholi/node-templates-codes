import React from 'react'
import Mapa from '../../../components/mapa/Mapa'

const CadastroRotas = () => {
  return (
    <div>
      <h4>Cadastro de Rotas</h4>
      <Mapa directions={true} />
    </div>
  )
}

export default CadastroRotas
