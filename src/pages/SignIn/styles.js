import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 13.6rem;
  
  a {
    margin-top: 12.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Title = styled.div`
  h1 {
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 6.3rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  p {
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const LoginTitle = styled.div`
  padding: 4.8rem 0;

h2 {
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.2rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
}
`;
export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .8rem;
  margin-bottom: .8rem;
`;

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;