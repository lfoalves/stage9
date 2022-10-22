import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-inline: 6.4rem;

  > input {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  }
`;