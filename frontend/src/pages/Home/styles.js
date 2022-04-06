import styled from 'styled-components';

export const InputSearchContainer = styled.div`
margin-top: 48px;
width: 100%;

input {
  width: 100%;
  border-radius: 25px;
  background: #FFF;
  border: none;
  height: 50px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  outline: 0;
  padding: 0 16px;

  &::placeholder {
    color: #BCBCBC;
  }
}
`;