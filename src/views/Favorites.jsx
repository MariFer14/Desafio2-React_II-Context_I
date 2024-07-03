import React, { useContext } from "react";
import Gallery from "../components/Gallery";
import { ContexAPI } from "../contex/ContexAPI";

const Favorites = () => {
  const {favoritos} = useContext(ContexAPI)
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        <Gallery photos={favoritos} />
      </div>
    </div>
  );
};
export default Favorites; 
