import React, {useEffect, useState} from "react";
import "./App.scss";
import Characters from "./containers/Characters/Characters";

function App() {
  const [characterArray, setArray] = useState();

  useEffect(() => {
    getCharacters().then(items => setArray(items))
  }, []);

  const getCharacters = async () => {
    const data = await fetch("https://hp-api.herokuapp.com/api/characters");
    return await data.json();
  };


  return(
    <div className="App">
      <section className="heading" >
        <h1 className="heading__title" >Harry Potter</h1>
        {/* search box */}
      </section>

      <section className="gallery" >
        <Characters characters={characterArray} />
      </section>

    </div>
  );
}

export default App;
