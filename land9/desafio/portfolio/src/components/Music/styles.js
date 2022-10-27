import styled from "styled-components";

export const Container = styled.div`
  /* background-color: black; */

  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);

  .hide {
    display: none;
  }

  > button {
    background: none;
    border: none;
  } 
`;