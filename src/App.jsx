import React, {useState} from "react";
import "./App.scss";
import Characters from "./containers/Characters/Characters";
import logo from "./assets/images/HarryPotterLogo.png";

function App() {
  const [house, setHouse] = useState("none");

  const FilterByHouse = (event) => {
    console.log(event.target.value);
    setHouse(event.target.value);
  }


  return(
    <div className="App">
      <section className="heading" >
        <img className="heading__logo" src={logo} alt="Harry Potter" />
        <h1 className="heading__title" >Harry Potter</h1>
        <select className="heading__house-menu" name="house" id="house-menu" onChange={FilterByHouse}>
          <option value="none">filter by house</option>
          <option value="gryffindor">Gryffindor</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="slytherin">Slytherin</option>
          <option value="hufflepuff">Hufflepuff</option>
        </select>
        {/* search box */}
      </section>

      <section className="gallery" >
        <Characters house={house} />
      </section>

    </div>
  );
}

export default App;
