
import { useContext } from "react";
import { MyContext } from '../MyContext';
import Card from 'react-bootstrap/Card';

const Favorites = () => {
  const { fotos, setFotos } = useContext(MyContext);

  const borrar = (id) => {
    const fotoIndex = fotos.fotoIndex(e => e.id === id);

    fotos[fotoIndex].liked = !fotos[fotoIndex].liked;
    setFotos([...fotos]);
  }


  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {
          fotos.filter(e => e.liked).map((foto, i) =>
            <Card key={i} className='text-white' onClick={() => borrar()}>
              <Card.Img src={foto.src.tiny} alt={foto.alt} />     
                <Card.Footer className='text-white text-start '>
                  {foto.alt}
                </Card.Footer>
            
            </Card>
          )
        }
      </div>
    </div>
  );
};

export default Favorites;