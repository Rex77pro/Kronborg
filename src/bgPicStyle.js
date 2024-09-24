// bgPicStyle.js
import myImage from './IMG_2895-2.jpg';  // Importér billedet fra src

export const mainStyle = {
  backgroundImage: `url(${myImage})`,  // Brug det importeret billede
  height: '800px',  // Definer højden
  width: '100%',  // Definer bredden til 100%
  backgroundSize: 'cover',  // Dækker hele området
  backgroundPosition: 'center',  // Centrer billedet
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',  // Juster indholdet vertikalt
  textAlign: 'center',
  color: 'white',
};