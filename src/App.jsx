import characters from "./data/characters";
import "./App.scss";
import Characters from "./containers/Characters/Characters";

function App() {
  return(
    <div className="App">
      <section className="heading" >
        <h1 className="heading__title" >Harry Potter</h1>
        {/* search box */}
      </section>

      <section className="gallery" >
        <Characters characters={characters} />
      </section>

    </div>
  );
}

export default App;
