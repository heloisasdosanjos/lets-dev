import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 75rem;
  padding: 5.625rem;
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
  height: 0.0625rem;
  width: 100%;
  margin: 100px 0 35px 0;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%

  textarea{
    min-height: 6.25rem;
    max-heiht: 12.5rem;
    min-width: 50%;
    max-width: 100%;
  }
`;

export const Aviso = styled.p`
  font-weight: 500, bold;
  margin-bottom: 6.25rem;

  strong{
    fonte-weight: 600;
    color: #bd041a;
  }

`;