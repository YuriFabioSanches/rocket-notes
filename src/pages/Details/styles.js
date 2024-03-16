import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas: 
  "header" 
  "content";
  grid-template-rows: 10.5rem auto;

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 6.4rem 0;
  }
`;

export const Links = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  
  > li > a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Tags = styled.ul`
  list-style: none;
  display: flex;
  gap: .6rem;
`;

export const Content = styled.div`
  max-width: 55rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-size: 3.6rem;
    font-weight: 500;
    padding-top: 6.4rem;
  }

  > p {
    font-size: 1.6rem;
    margin-top: 1.6rem;
    text-align: justify;
  }

`;