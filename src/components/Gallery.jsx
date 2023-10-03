// Uso de useContext en componente Gallery (punto 4 del desafío)
import { useContext } from 'react';
import { MyContext } from '../MyContext';
import  Card  from 'react-bootstrap/Card';

import IconHeart from '../components/IconHeart';

const Gallery = () => {
  const {fotos, setFotos} = useContext(MyContext); // Uso de useContext (punto 4)

  const addFavorito = (id) => {
    const fotoIndex = fotos.findIndex(e => e.id === id);
    // cambia el valor de liked de false a true y viceversa
    fotos[fotoIndex].liked = !fotos[fotoIndex].liked;
    setFotos([... fotos]);
  }

  return <div className="gallery grid-columns-5 p-3">
    {
      fotos.map((foto, i) =>
        <Card key={i} className='text-white' onClick={() => addFavorito(foto.id)}>
          <Card.Img src={ foto.src.tiny } alt={ foto.alt } />
          <Card.ImgOverlay className='mi-estilo'>
            <Card.Title className='text-end'>
              <IconHeart filled={ foto.liked } />
            </Card.Title>
            <Card.Footer className='text-white text-start '>
              { foto.alt }
            </Card.Footer>
          </Card.ImgOverlay>
        </Card>
      )
    }
  </div>
};
export default Gallery;
