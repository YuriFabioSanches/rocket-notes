import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 1rem;
  
 > input {
    width: 100%;
    height: 5.6rem;
    padding: 2rem 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    
    &:placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
 }

 > label {
    svg {
      margin-left: 1.6rem;
      font-size: 2rem;
      cursor: pointer;
    }
 }


`;