import styled from "styled-components";

export const Container = styled.section`
  margin: 2.8rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > h2 {
    border-bottom: .1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding-bottom: 1.6rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 2rem;
    font-weight: 400;
  }
`;