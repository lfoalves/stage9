import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
    'header'
    'content';

  margin-bottom: 9.3rem;

  > main {
    grid-area: content;
  } 
`;

export const Content = styled.div `

  overflow-y: scroll;
  max-width: 113.3rem;
  margin: 0 auto;
  padding-top: 4rem;
  padding-inline: 0.5rem;

  
  width: 100%;
  
  > section {
    padding-top: 3rem;
  }

  > section:nth-child(1) {
    position: relative;
    top: 0;
    left: 0;

    a {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  > section:nth-child(2) {
    .tags {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      column-gap: 2.4rem;
      row-gap: 1.6rem;

      margin-top: 2.4rem;
      
      padding: 1.6rem;
      
      background-color: ${({ theme }) => theme.COLORS.BLACK};
      border-radius: 0.8rem;
    }
  }

  .buttons {
    display: flex;
    gap: 4rem;

    margin-top: 4rem;

    > button:nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.PINK_100};
    }
  }
`;

export const Form = styled.form `
  width: 100%;

  margin-top: 4rem;

  .flex {
    display: flex;
    gap: 4rem;

    margin-bottom: 3.2rem;
  }
`;