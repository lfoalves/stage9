import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    'header'
    'content';

  > section {
    grid-area: content;
    
    max-width: 113.3rem;
    margin: 0 auto;

    position: relative;

    > a {
      position: absolute;
      top: 4rem;
      right: 0;

      display: flex;
      align-items: center;
      gap: 0.8rem;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      background-color: ${({ theme }) => theme.COLORS.PINK_100};
      
      width: fit-content;
      height: 5.6rem;
      padding-inline: 3.2rem;

      border-radius: 0.8rem;

      svg {
        font-size: 2rem;
      }
    }

    > main {
      padding: 4rem 0.5rem 8rem;

      display: flex;
      flex-direction: column;
      gap: 2.4rem;
    } 
  }

`;