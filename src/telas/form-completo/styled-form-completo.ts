import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  padding: 90px;
  font-weight: bold;
`;
export const H2 = styled.h2`
  text-align: center;
  font-weight: bold;
`;

export const Instrucao = styled.p`
  margin: 20px 0 0 0;
  text-align: center;
  font-weight: bold;
`;

export const Divisor = styled.hr`
  background: #e5e5e5;
  height: 1px;
  width: 100%;
  margin: 100px 0 35px 0;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%

  textarea{
    min-height: 100px;
    max-heiht: 200px;
    min-width: 50%;
    max-width: 100%;
  }
`;

export const Aviso = styled.p`
  font-weight: 500, bold;
  margin-bottom: 100px;

  strong{
    fonte-weight: 600;
    color: #bd041a;
  }

`;