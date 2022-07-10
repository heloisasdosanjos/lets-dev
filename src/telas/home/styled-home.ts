import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 75rem;
  padding: 5.625rem 2.5rem 5.625rem 2.5rem;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3.125rem;
  background: rgba(35, 31, 32, 0.93);

  button{
    background-color: #332F30;
    width: 2.8125rem;
    color: #8D898A;
    border: 0;
    position: relative;
    right: -49%;
    top: -18%;

  }

  h1 {
    font-style: italic;
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.6875rem;
    text-align: center;
    color: #ffffff;
  }

  img {
    margin: 40px 0;
    max-width: 100%;
  }

  h2,
  p {
    font-weight: 400;
    line-height: 1.625rem;
    color: #ffffff;
  }

  h2 {
    font-size: 1.5rem;
    text-align: center;
  }

  p {
    font-size: 1rem;
    text-align: center;
    margin-top: 0.625rem;
  }
`;

export const GroupCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-bottom: 6.25rem;

  img{
    max-width: 100%;

  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 1.875rem;

  img {
    width: 50%;
  }

  @media (max-width: 767px){
    flex-wrap: wrap;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 1.625rem;
    color: #7d2eba;
    margin-bottom: 0.9375rem;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.625rem;
    color: #201e1f;
  }

  h4{
    font-weight: bold;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
`;
