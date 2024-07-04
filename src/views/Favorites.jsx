import React, { useContext } from "react";
import { ContexAPI } from "../contex/ContexAPI";

const Favorites = () => {
  const { favoritos } = useContext(ContexAPI)


  return (
    <div>
      <h1 style={{marginLeft:"50px", marginTop:"50px", color:"darkgreen"}}>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favoritos.map((photo) => (
          <div key={photo.id}> 
             <img
            src={photo.src.original}
            alt={photo.alt}
            style={{ width: "400px", height: "400px" }}
          />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Favorites; 
