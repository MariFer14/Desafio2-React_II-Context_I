import React, { useContext } from "react";
import { ContexAPI } from "../contex/ContexAPI";
import HeartEmpty from "../assets/icons/heart.svg";
import HeartFilled from "../assets/icons/heart-filled.svg";
import "../assets/css/gallery.css";

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
        <div key={photo.id} className="gallery-item">
          <div className="image-container">
            <img
              src={photo.src.original}
              alt={photo.alt}
              style={{ width: "400px", height: "400px" }}
              className="photo"
            />
            {photo.isFavorite ? (
              <img
                src={HeartFilled}
                alt="Corazón lleno"
                onClick={() => handleToggleFavorito(photo.id)}
                className="iconHeart"
              />
            ) : (
              <img
                src={HeartEmpty}
                alt="Corazón vacío"
                onClick={() => handleToggleFavorito(photo.id)}
                className="iconHeart"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Gallery;
