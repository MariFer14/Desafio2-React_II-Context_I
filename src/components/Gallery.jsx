import React, { useContext } from "react";
import { ContexAPI } from "../contex/ContexAPI";
import HeartEmpty from "../assets/icons/heart.svg";
import HeartFilled from "../assets/icons/heart-filled.svg";

const Gallery = ({ photos }) => {
  const { toggleFavorito } = useContext(ContexAPI);

  const handleToggleFavorito = (id) => {
    toggleFavorito(id);
  };

  if (!Array.isArray(photos) || photos.length === 0) {
    return <div className="gallery grid-columns-5 p-3">Loading...</div>;
  }

  return (
    <div className="gallery grid-columns-4 p-3">
      {photos.map((photo) => (
        <div key={photo.id}>
          <img
            src={photo.src.original}
            alt={photo.alt}
            style={{ width: "400px", height: "400px" }}
          />
            {photo.isFavorite ? (
              <img src={HeartFilled} alt="Corazón lleno" onClick={() => handleToggleFavorito(photo.id)} style={{ cursor: "pointer" }} />
            ) : (
              <img src={HeartEmpty}  alt="Corazón vacío" onClick={() => handleToggleFavorito(photo.id)} style={{ cursor: "pointer" }}/>
            )}
        </div>
      ))}
    </div>
  );
};
export default Gallery;
