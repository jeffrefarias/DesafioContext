import { Route, Routes } from "react-router-dom";
import ImgProvider from "./MyContext";

import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

// const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <div>
      <ImgProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favoritos"
            element={<Favorites />}
          />
        </Routes>
      </ImgProvider>

    </div>
  );
};
export default App;
