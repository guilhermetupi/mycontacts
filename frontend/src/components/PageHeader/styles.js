import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 24px;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;

    img {
      height: 16px;
      width: auto;
      margin-right: 8px;
      transform: rotate(-90deg);
    }

    span {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }
  }

  h1 {
    font-size: 24px;
  }
`;
