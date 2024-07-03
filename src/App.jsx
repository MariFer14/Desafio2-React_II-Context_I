import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import { ContexAPIProvider } from "./contex/ContexAPI";

const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <ContexAPIProvider>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </div>
    </ContexAPIProvider>
  );
};
export default App;
