import React from 'react';
import { FormEvent } from 'react';
import * as s from "./styled-form-completo"
import {Banner} from '../../imagens';
import Titulo from '../../componentes/Titulo';

const FormCompleto: React.FC = () => {
  function enviarFormulario(event: FormEvent){
    event.preventDefault();
    //const mensagem = `${nome}, tem ${idade} anos e atualmente é ${ocupacao}. Se ingressar no mundo do desenvolvimento, tem preferência por atuar como ${areaPreferencia}.

    //Em sua descrição de perfil consta: "${descricaoPerfil}".

    //Deseja receber e-mail: ${receberEmail ? "Sim" : "Não"}
    //Currículo? ${curriculo ? curriculo.files[0].name : "Não informado"}`;

    //alert(mensagem);
}

const cancelar =(event: FormEvent) =>{
event.preventDefault();
alert("Cancelando...");
};

  return (
      <>
      <s.Image src={Banner} />
      <s.Container>
          <Titulo titulo="Formulário 2ª Edição" />
          <s.H2>Seja bem-vindo(a) ao primeiro desafio da sua jornada de aprendizado!</s.H2>

          <s.Instrucao>
              Preencha corretamente os campos abaixo para ingressar nessa SUPER JORNADA com o time Paipe!
          </s.Instrucao>

      <s.Divisor />

      {/*Itens agrupados em coluna*/}
      <s.Formulario onSubmit={enviarFormulario}>
          <s.Aviso>
              <strong>ATENÇÃO:</strong> os campos contendo o asterisco (*) são de preenchimento obrigatório!</s.Aviso>

            <div className="row">
                <div className="column-input input-text">
                    <label>Nome completo: *</label>
                    <input 
                    type="text"
                    name="nome"
                    placeholder="Digite seu nome aqui"
                    required/> {/*Campo obrigatorio*/}
                </div>

            <div className="column-input">
                <label>Idade:</label>
                    <input 
                    type="number"
                    name="idade"
                    placeholder="Digite sua idade"/>
                  </div>
              </div>

              <div className="row">
                  <div className="column-input select">
                      <label>Ocupação</label> {/*}Texto padrao do campo*/}
                      <select name="ocupacao">
                      <option>Selecione uma ocupação</option> 
                      <option>Estudante</option>     
                      <option>Trabalhador</option>
                      <option>Trabalhador CLT</option>
                      <option>Trabalhador PJ</option>
                      <option>Autônomo</option>
                      <option>Outros</option>
                      </select>
                  </div>

                  {/*}Aqui continuam os inputs de seleção RADIO BUTTONS*/}   
                  <div className="column-input">
                      <label>Área de preferência:</label>
                      <div className="row" style={{gap: '25px'}}> {/*A propriedade gap só funciona para itens flex*/}
                          <div className="row-selectors">
                              <input
                              type="radio"
                              id="front"
                              name="area-preferencia"
                              value="Front-end"
                              //checked
                              />
                          <label htmlFor="front">Front-end</label>
                          </div>

                          <div className="row-selectors">
                              <input
                              type="radio"
                              id="back"
                              name="area-preferencia"
                              value="Back-end"
                              />
                          <label htmlFor="back">Back-end</label>
                          </div>

                          <div className="row-selectors">
                              <input
                              type="radio"
                              id="full"
                              name="area-preferencia"
                              value="Full Stack"
                              />
                          <label htmlFor="full">Full Stack</label>
                          </div>
                      </div>
                  </div>    
              </div>

              {/*}Aqui começam os botões de text area e checkbox*/}
              <div className="column-input">
                  <label>Anexar Currículo</label>
                  <input type="file" name="curriculo" multiple/> {/*Input recebe arquivo*/}
              </div>

              <div className="column-input" style={{marginBottom: '50px'}}>
              <label>Descrição do perfil do candidato:</label>
              <textarea name="descricao-perfil"
                  placeholder="Nos fale um pouco sobre o seu perfil profissional"></textarea>
              </div>
              
              <div className="column-input" style={{marginBottom: '115px'}}>
                  <div className="row-selectors">
                      <input type="checkbox" name="receber-email" id="receber-email"/>
                      <label htmlFor="receber-email">
                          Desejo receber notificações sobre vagas por email.</label>
                  </div>
              </div>   
                  <div className="row" style={{justifyContent: 'space-between'}}>
                      <button onClick={cancelar}>Cancelar</button>
                      <input type="submit" value="Enviar"/>
                  </div>      
      </s.Formulario>
    </s.Container>
    </>
  )
}

export default FormCompleto;