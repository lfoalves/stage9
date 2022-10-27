import styled from "styled-components";

export const Container = styled.div`
  width: 15rem;
  height: 15rem;

  transform-style: preserve-3d;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform .5s;
  position: relative;

  background: radial-gradient(#E1D55D, #9572FC, #43E7AD);
  border: 0.5rem dashed transparent;
  background-clip: border-box;

  border-radius: 1rem;

  &:hover {
  transform: rotateY(180deg);
  } 

  > .face {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    border-radius: 1rem;
    color: aliceblue;

    position: absolute;
  }

  > .front {
    background-color: rgb(13, 169, 231);
    transform: rotateY(180deg);
  }

  > .back {
    background-color: ${({theme}) => theme.COLORS.BLACK};
    backface-visibility: hidden;
    background-image: url('https://img.icons8.com/emoji/344/nazar-amulet.png');
    background-image: url('https://img.icons8.com/arcade/2x/code-file.png');
    background-image: url('https://img.icons8.com/nolan/2x/code-file.png');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 60%;
  }

  .flip {
    transform: rotateY(180deg);
  }

`;