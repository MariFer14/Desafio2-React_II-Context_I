import React, { createContext, useState, useEffect } from "react";

export const ContexAPI = createContext();

export const ContexAPIProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    consumoAPI();
  }, []);

  const consumoAPI = async () => {
    try {
      const response = await fetch("/photos.json");
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      console.log(data);
      const photosWithFavorites = data.photos.map(photo => ({ ...photo, isFavorite: false }));
      setPhotos(photosWithFavorites);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const toggleFavorito = (id) => {
    const updatedPhotos = photos.map(photo =>
      photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo
    );
    setPhotos(updatedPhotos);

    const updatedPhoto = updatedPhotos.find(photo => photo.id === id);
    if (updatedPhoto.isFavorite) {
      setFavoritos(prevFavoritos => [...prevFavoritos, updatedPhoto]);
    } else {
      setFavoritos(prevFavoritos => prevFavoritos.filter(photo => photo.id !== id));
    }
  };

  return (
    <ContexAPI.Provider value={{ photos, favoritos, toggleFavorito }}>
      {children}
    </ContexAPI.Provider>
  );
};