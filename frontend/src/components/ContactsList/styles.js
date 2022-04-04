import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong{
    color: #222;
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    padding: 8px 16px;
    transition: all ease-in 0.2s;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }

    &:active {
      background: ${({ theme }) => theme.colors.primary.light};
      border: 2px solid ${({ theme }) => theme.colors.primary.light};
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header{
    margin-bottom: 8px;

    button{
      background: transparent;
      border: none;
      display: flex;
      align-items: center;

      span {
        color: ${({ theme }) => theme.colors.primary.main};
        margin-right: 8px;
        font-weight: bold;
      }
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 16px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .name{
      display: flex;
      align-items: center;

      small{
        padding: 4px 8px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.primary.main};
        background-color: ${({ theme }) => theme.colors.primary.lighter};
        border-radius: 4px;
        font-weight: bold;
        margin-left: 8px;
      }
    }

    span {
      color: ${({ theme }) => theme.colors.gray[900]};
      font-size: 14px;
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      margin-left: 16px;
      background: none;
      border: none;
    }
  }
`;
