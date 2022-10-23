import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  align-items: center;

  height: 5.6rem;

  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_INPUT};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : 'none'};

  margin-bottom: 0.8rem;
  border-radius: 1rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;

    svg {
      color: ${({ theme, isNew }) => theme.COLORS.PINK_100}
    }
  }

  > input {
    background: transparent;
    border: none;
    
    padding: 1.2rem;

    color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
  }
`;