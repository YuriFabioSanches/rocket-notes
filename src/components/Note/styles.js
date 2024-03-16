import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 1rem;
  padding: 2.2rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2.4rem;

  > h1 {
    flex: 1;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};;
  }

  > footer {
    width: 100%;
    display: flex;
    gap: .6rem;
  }


`;