import styled from "styled-components";

export const Container = styled.section`

padding: 1rem;
  width: 100%;
  height: 100%;

  max-width: 130rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > main {
    margin-top: 4rem;

    overflow-y: scroll;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center
  }
`;