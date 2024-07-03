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
      setPhotos(data.photos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const toggleFavorito = (id) => {
    const photo = photos.find((photo) => photo.id === id);
    if (!photo) return;

    if (favoritos.some((f) => f.id === id)) {
      setFavoritos(favoritos.filter((f) => f.id !== id));
    } else {
      setFavoritos([...favoritos, photo]);
    }
  };

  return (
    <ContexAPI.Provider value={{ photos, favoritos, toggleFavorito }}>
      {children}
    </ContexAPI.Provider>
  );
};
