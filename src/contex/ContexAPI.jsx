import React, { createContext, useState, useEffect } from "react";

export const ContexAPI = createContext();

export const ContexAPIProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
    const [favoritos, setFavoritos] = useState([]);
    

  useEffect(() => {
    consumoAPI();

    console.log("SOY LA API");
  }, []);

  const consumoAPI = async () => {
    const PHOTO_URL = "/photos.json";
    const response = await fetch(PHOTO_URL);
    const data = await response.json();
    console.log(data, "<------- DATA");
    setPhotos(data);
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
