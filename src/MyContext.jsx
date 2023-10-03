import { createContext, useState } from 'react';
import imagenes from '../public/photos.json'

export const MyContext = createContext(); 

const ImgProvider = ({children}) => {
  const [fotos, setFotos] = useState(imagenes.photos);

  return(
    <MyContext.Provider value={{fotos, setFotos}}>
      {children}
    </MyContext.Provider>
  )
}

export default ImgProvider;