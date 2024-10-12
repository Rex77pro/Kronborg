// bgPicStyle.js
//import myImage from './IMG_2895-2.jpg';  // Importér billedet fra src
import wallPaper from './BOWallpaper.jpg';
import rCronw from './r-royal-crown.png';

export const mainStyle = {
  backgroundImage: `url(${wallPaper})`,  // Brug det importeret billede
  height: '1000px',  // Definer højden
  width: '100%',  // Definer bredden til 100%
  backgroundSize: 'cover',  // Dækker hele området
  backgroundPosition: 'center',  // Centrer billedet
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',  // Juster indholdet vertikalt
  textAlign: 'left',
  color: 'white',
};

export const profilePicture = {
    backgroundImage: `url(${rCronw})`,
    height: '300px', // Bestem højde og bredde for dit billede
    width: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '50%', // Gør det rundt (valgfrit)
    // border: '2px solid white', // Giver en kant (valgfrit)
};