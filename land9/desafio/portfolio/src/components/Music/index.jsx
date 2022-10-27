import { useEffect } from "react";
import { useState } from "react";

import { Container } from "./styles";

import imagePlay from '../../assets/sound.svg'
import imagePause from '../../assets/mute.svg'


export function Music() {

  console.log('RENDERIZOU')
  // const [music, setMusic] = useState(true)

  // function alterMusic() {
  //   setMusic(!music)
  // }

 useEffect(() => {
   function Sound() {
    const lofi = new Audio('https://github.com/lfoalves/sounds/blob/master/Floating_City_Chill_Lofi_Beats_TubeRipper/audi06.mp3?raw=true');
    // new Audio('https://github.com/lfoalves/sounds/blob/master/sounds-effects/stars/brights-stars.mp3?raw=true');
    // new Audio('https://github.com/lfoalves/sounds/blob/master/motion-pack-01/01%20-%20Ding.mp3?raw=true');
    lofi.loop = true;

    const buttonPlay = document.querySelector('#play')
    const buttonPause = document.querySelector('#pause')

    buttonPlay.addEventListener('click', function() {
      lofi.play();
      buttonPlay.classList.toggle('hide')
      buttonPause.classList.toggle('hide')
    })
    buttonPause.addEventListener('click', function() {
      lofi.pause();
      buttonPlay.classList.toggle('hide')
      buttonPause.classList.toggle('hide')
    })
   }
   Sound()
 }, [])

  return (
    <Container>
        <button>
          <img
            id="play"
            src={imagePause}
            alt="Button play"
            // onClick={alterMusic}
          />
        </button>
        <button>
          <img
            id="pause"
            className="hide"
            src={imagePlay}
            alt="Button pause"
            // onClick={alterMusic}
          />
        </button>
    </Container>
  );
}