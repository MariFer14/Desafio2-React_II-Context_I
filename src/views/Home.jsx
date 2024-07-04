import React, { useContext } from "react";
import Gallery from "../components/Gallery";
import { ContexAPI } from "../contex/ContexAPI";

const Home = () => {
  const { photos } = useContext(ContexAPI);

  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <Gallery photos={photos} />
    </div>
  );
};
export default Home;
