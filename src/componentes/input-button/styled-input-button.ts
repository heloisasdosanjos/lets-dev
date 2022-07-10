import styled from "styled-components";

interface InputButtonProps{
  outlined?: boolean;
}

export const InputButton = styled.input<InputButtonProps>`
  text-align: center;
  &[type="submit"],
  &::-webkit-file-upload-button,
  &.outlined {
    width: 14.0625rem;
    padding: 0.625rem;
    heigth: 2.1875rem;
    font-weight: 500;
    border-radius: 0.3125rem;
    cursor: pointer;
  }
  
  &[type="submit"] {
    background: #7d2eba;
    color: white;

    border: none !important;

    :hover{
      box-shadow: 0.0625rem 0.125rem 0.3125rem rgba(0, 0, 0, 0.5);
    }
  }

  &::-webkit-file-upload-button,
  &.outlined {
    border: 1px solid #7d2eba;
    color: #7d2eba;
    background: none;
    font-family: Montserrat;
    
    margin-right: 1.875rem;

    :hover {
      background: #7d2eba;
      color: white;
    }
  }
`;