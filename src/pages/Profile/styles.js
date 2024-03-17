import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 14.4rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    padding: 0 14.4rem;

    svg {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: -12.4rem auto 0;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    background: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: .7rem;
    right: .7rem;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};;
    }
  }
`;