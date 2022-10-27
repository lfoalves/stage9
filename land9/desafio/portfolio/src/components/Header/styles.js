import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 1rem;

  position: fixed;
  top: 0;
  left: 0;

  background-color: ${({theme}) => theme.COLORS.BLACK};

  border-bottom-color: red;
  border-bottom-style: dashed;
  border-bottom-width: 0.2rem;

  background-clip: border-box;
  

  .container {
    display: flex;
    justify-content: space-around;

    > nav {
      ul {
        display: flex;
        gap: 1rem;
        li {
          /* a {
            background-color: ${({theme}) => theme.COLORS.BLACK};
            background: linear-gradient(90deg, #9572FC 0%, #43E7AD 50%, #E1D55D 100%);
            background-color: black;
            color: ${({theme}) => theme.COLORS.WHITE};
            padding: 1rem;
            border-radius: 0.5rem;
          } */
        }
      }
    }
  }

  `;