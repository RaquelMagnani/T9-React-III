import React from 'react';
import FotoPessoa from '../FotoPessoa/FotoPessoa'
import DadosPessoa from '../DadosPessoas/DadosPessoas'

const InformacoesGerais = (props)=>{
    return (
        <div className="InformacaoPessoa">
          <FotoPessoa pessoa={props.pessoa} />
          <DadosPessoa pessoa={props.pessoa} />
        </div>
    )
}



  export default InformacoesGerais;