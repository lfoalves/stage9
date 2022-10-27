import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  display: grid;
  grid-template-areas: 'header' 'content';
  grid-template-rows: min-content auto;
  overflow-y: scroll;

`;