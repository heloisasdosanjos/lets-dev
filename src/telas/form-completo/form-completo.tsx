import React from 'react';
import { FormEvent } from 'react';
import * as s from "./styled-form-completo"
import {Banner} from '../../imagens';
import Titulo from '../../componentes/Titulo';
import { Row, ColumnInput, Label, RowSelectors, InputButton } from '../../componentes';


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

              <Row>
                <ColumnInput className="input-text">
                    <Label>Nome completo: *</Label>
                    <input 
                    type="text"
                    name="nome"
                    placeholder="Digite seu nome aqui"
                    required/> {/*Campo obrigatorio*/}
                </ColumnInput>

              <ColumnInput>
                <Label>Idade:</Label>
                    <input 
                    type="number"
                    name="idade"
                    placeholder="Digite sua idade"/>
                  </ColumnInput>
              </Row>

              <Row>
                  <ColumnInput className=" select">
                      <Label>Ocupação</Label> {/*}Texto padrao do campo*/}
                      <select name="ocupacao">
                      <option>Selecione uma ocupação</option> 
                      <option>Estudante</option>     
                      <option>Trabalhador</option>
                      <option>Trabalhador CLT</option>
                      <option>Trabalhador PJ</option>
                      <option>Autônomo</option>
                      <option>Outros</option>
                      </select>
                  </ColumnInput>

                  {/*}Aqui continuam os inputs de seleção RADIO BUTTONS*/}   
                  <ColumnInput>
                      <Label>Área de preferência:</Label>
                      <Row style={{gap: '25px'}}> {/*A propriedade gap só funciona para itens flex*/}
                          <RowSelectors>
                              <input
                              type="radio"
                              id="front"
                              name="area-preferencia"
                              value="Front-end"
                              checked
                              />
                          <Label htmlFor="front">Front-end</Label>
                          </RowSelectors>

                          <RowSelectors>
                              <input
                              type="radio"
                              id="back"
                              name="area-preferencia"
                              value="Back-end"
                              />
                          <Label htmlFor="back">Back-end</Label>
                          </RowSelectors>

                          <RowSelectors>
                              <input
                              type="radio"
                              id="full"
                              name="area-preferencia"
                              value="Full Stack"
                              />
                          <Label htmlFor="full">Full Stack</Label>
                          </RowSelectors>
                      </Row>
                  </ColumnInput>    
              </Row>

              {/*}Aqui começam os botões de text area e checkbox*/}
              <ColumnInput>
                  <Label>Anexar Currículo</Label>
                  <InputButton type="file" name="curriculo"/> {/*Input recebe arquivo*/}
              </ColumnInput>

              <ColumnInput style={{marginBottom: '50px'}}>
              <Label>Descrição do perfil do candidato:</Label>
              <textarea name="descricao-perfil"
                  placeholder="Nos fale um pouco sobre o seu perfil profissional"></textarea>
              </ColumnInput>
              
              <ColumnInput style={{marginBottom: '115px'}}>
                  <div className="row-selectors">
                      <input type="checkbox" name="receber-email" id="receber-email"/>
                      <Label htmlFor="receber-email">
                          Desejo receber notificações sobre vagas por email.</Label>
                  </div>
              </ColumnInput>   
                  <Row style={{justifyContent: 'space-between'}}>
                      <InputButton type="button" onClick={cancelar}value="Cancelar"/>
                      <InputButton type="submit" value="Enviar"/>
                  </Row>      
      </s.Formulario>
    </s.Container>
    </>
  )
}

export default FormCompleto;