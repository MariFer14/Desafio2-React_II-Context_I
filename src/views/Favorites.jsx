import React, { useContext } from "react";
import Gallery from "../components/Gallery";
import { ContexAPI } from "../contex/ContexAPI";

const Favorites = () => {
  const { favoritos } = useContext(ContexAPI)
  
  const fotosFavoritas = favoritos.filter(photo => photo.isFavorite);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        <Gallery photos={fotosFavoritas} />
      </div>
    </div>
  );
};
export default Favorites; 
