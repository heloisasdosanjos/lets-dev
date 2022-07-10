import { ReactNode } from "react";
import { CardApi, CardFormBasico, CardFormCompleto, CardPaipers } from "../../imagens";
import * as s from "./styled-card";

interface CardProps {
  titulo: string;
  link: string;
  descricao: string | ReactNode;
}

const Card = ({ titulo, link, descricao }: CardProps) => {
  return (
    <s.Container href={link}>
      <a href={link}>{titulo}</a>
      {typeof descricao === "string" ? <p>{descricao}</p> : descricao}
    </s.Container>
  );
};

export default Card;
