import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding-top: 6rem;

  overflow-y: scroll;
  /* background-color: royalblue; */
  
  .container {
    max-width: 136rem;
    margin: 0 auto  ;
    background-color: ${({theme}) => theme.COLORS.BLACK};
    
    /* background-color: yellow; */

    padding: 4rem 1rem 2rem;

    /* display: grid; */
    /* align-items: center;
    justify-content: center; */
    /* place-content: center; */
    /* place-items: center; */
  }
`;