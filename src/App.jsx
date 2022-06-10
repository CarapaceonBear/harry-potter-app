import React, {useState} from "react";
import "./App.scss";
import Characters from "./containers/Characters/Characters";
import logo from "./assets/images/HarryPotterLogo.png";

function App() {
  const [house, setHouse] = useState("none");
  const [search, setSearch] = useState("");

  const filterByHouse = (event) => {
    setHouse(event.target.value);
  }

  const updateSearch = (event) => {
    setSearch(event.target.value);
  }

  return(
    <div className="App">
      <section className="heading" >
        <img className="heading__logo" src={logo} alt="Harry Potter" />
        <label className="heading__search--label" htmlFor="search-box">Search {search}</label>
        <input className="heading__search" type="text" id="search-box" onChange={updateSearch} />
        <select className="heading__house-menu" name="house" id="house-menu" onChange={filterByHouse}>
          <option value="none">filter by house</option>
          <option value="gryffindor">Gryffindor</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="slytherin">Slytherin</option>
          <option value="hufflepuff">Hufflepuff</option>
        </select>
      </section>

      <section className="gallery" >
        <Characters house={house} search={search} />
      </section>

    </div>
  );
}

export default App;
