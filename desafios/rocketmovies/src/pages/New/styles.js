import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
    'header'
    'content';
  
  > main {
    grid-area: content;

    padding: 5rem;

    display: flex;
    flex-direction: column;
    gap: 4rem;

    width: 100%;
    max-width: 113.3rem;
    margin: 0 auto;

    .tags {
      display: flex;
      align-items: center;
      gap: 2.4rem;

      margin-top: 2.4rem;

      padding: 1.6rem;

      background-color: ${({ theme }) => theme.COLORS.BLACK};
      border-radius: 0.8rem;
    }
  }
`;

export const Form = styled.form `
  width: 100%;
  height: 27.5rem;

  margin-top: 4rem;

  > a {
    margin-bottom: 2.4rem;
  }

  .flex {
    display: flex;
    gap: 4rem;

    margin-bottom: 3.2rem;
  }

`;