import characters from "./data/characters";
import "./App.scss";
import Characters from "./containers/Characters/Characters";
import { getCharacters} from "./services/CharacterService";


function App() {
  
  
  let temp = [...characters];
  
  const getCharacters = async () => {
    const response = await fetch("https://hp-api.herokuapp.com/api/characters");
    const data = await response.json();

    return data;
  }
  // console.log(getCharacters());
  // console.log(characters);
  // temp = getCharacters();
  

  return(
    <div className="App">
      <section className="heading" >
        <h1 className="heading__title" >Harry Potter</h1>
        {/* search box */}
      </section>

      <section className="gallery" >
        <Characters characters={getCharacters()} />
      </section>

    </div>
  );
}

export default App;
