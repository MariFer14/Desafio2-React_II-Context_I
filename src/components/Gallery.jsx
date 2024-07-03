import React, { useContext } from "react";
import { ContexAPI } from "../contex/ContexAPI";

const Gallery = () => {
  const { photos, toggleFavorito } = useContext(ContexAPI);

  const handleToggleFavorito = (id) => {
    toggleFavorito(id);
  };

  if (!Array.isArray(photos) || photos.length === 0) {
    return <div className="gallery grid-columns-5 p-3">Loading...</div>;
  }

  return <div className="gallery grid-columns-5 p-3">
    {photos.map((photo) => (
      <div key={photo.id}>
        <img src={photo.src.original}  alt={photo.alt} />
        <button onClick={() => handleToggleFavorito(photo.id)}>
          {photo.isFavorite ? 'Quitar de Favoritos' : 'Marcar coomo Favorito'}
        </button>
      </div>
    ))}
  </div>;
};
export default Gallery;
