import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background: none;
  font-size: 1.6rem;
  color: ${({ theme, $isactive }) => $isactive === "true" ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
`;