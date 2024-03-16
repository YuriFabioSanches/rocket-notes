import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  grid-template-areas: 
  "brand header" 
  "menu search" 
  "menu content" 
  "newnote content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-bottom: .1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  > h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Menu = styled.ul`
  grid-area: menu;

  list-style: none;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  padding-top: 6.4rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const Search = styled.div`
  grid-area: search;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 6.4rem 6.4rem .8rem 6.4rem;
`;

export const Content = styled.div`
  grid-area: content;
  background-color: green;
`;

export const NewNote= styled.button`
  grid-area: newnote;

  border: none;
  background: ${({ theme }) => theme.COLORS.ORANGE};

  font-size: 2rem;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;