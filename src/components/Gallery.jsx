
import { useContext } from 'react';
import { MyContext } from '../MyContext';
import Card from 'react-bootstrap/Card';

import IconHeart from '../components/IconHeart';

const Gallery = () => {
  const { fotos, setFotos } = useContext(MyContext);

  const addFavorito = (id) => {
    const fotoIndex = fotos.findIndex(e => e.id === id);
    fotos[fotoIndex].liked = !fotos[fotoIndex].liked;
    setFotos([...fotos]);
  }

  return <div className="gallery grid-columns-5 p-3">
    {
      fotos.map((foto, i) =>
        <Card key={i} className='text-white' onClick={() => addFavorito(foto.id)}>
          <Card.Img src={foto.src.tiny} alt={foto.alt} />
          <div className='IconHeart'>
            <IconHeart filled={foto.liked} />
          </div>
          <Card.Footer className='text-white text-start '>
            {foto.alt}
          </Card.Footer>
        </Card>
      )
    }
  </div>
};
export default Gallery;
