import styled from "styled-components";

export const ColumnInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5625rem;
  margin-bottom: 4.375rem;

  &.input-text {
    width: 100%;
  }

  &.select {
    width: 30%;
  }

  input[type="text"],
  input[type="number"],
  input[type="submit"],
  select,
  textarea{
    border: 1px solid #201e1f;
    padding: 0.625rem;
    height: 2.5rem;

    border-radius: 0.3125rem;

    :focus {
      outline: 1px solid #7d2eba;
    }
  
    select {
      padding: 0 0.3125rem;
      cursor: pointer;
    }
}
`;