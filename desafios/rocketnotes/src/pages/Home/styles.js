import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    'header'
    'content';

  > section {
    max-width: 113.3rem;
    margin: 0 auto;

    grid-area: content;

    position: relative;

    > button {
      position: absolute;
      top: 4rem;
      right: 0;

      width: fit-content;
      padding-inline: 3.2rem;
    }

    > main {
      padding-top: 4rem;
      padding-inline: 0.5rem;
      padding-block: 8rem;

      display: flex;
      flex-direction: column;
      gap: 2.4rem;
    } 
  }

`;