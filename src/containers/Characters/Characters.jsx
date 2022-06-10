import React, {useEffect, useState} from 'react'
import "./Characters.scss"
import CharacterCard from '../../components/CharacterCard/CharacterCard';

const Characters = ({ house, search }) => {
  const [characterArray, setArray] = useState();

  useEffect(() => {
    getCharacters().then(items => setArray(items))
    
  }, [house]);

  const getCharacters = async () => {
    let data = null;
    switch (house) {
      case "none":
        data = await fetch("https://hp-api.herokuapp.com/api/characters");
        break;
      case "gryffindor":
        data = await fetch("https://hp-api.herokuapp.com/api/characters/house/gryffindor");
        break;
      case "ravenclaw":
        data = await fetch("https://hp-api.herokuapp.com/api/characters/house/ravenclaw");
        break;
      case "slytherin":
        data = await fetch("https://hp-api.herokuapp.com/api/characters/house/slytherin");
        break;
      case "hufflepuff":
        data = await fetch("https://hp-api.herokuapp.com/api/characters/house/hufflepuff");
        break;
    }
    return await data.json();
  };

  // useEffect(() => {
  //   if (search != "") {
  //     setArray(characterArray.filter((character) => {
  //       return (character.name.toLowerCase()).includes(search.toLowerCase())
  //     }))
  //   }
  // }, [search]);

  
  return (
    <div className="characters">
      {(characterArray || []).map((character, index) => {
        if (search != "") {
          if ((character.name.toLowerCase()).includes(search.toLowerCase())) {
            return <CharacterCard key={index} character={character} hidden={false} />
          } else {
            return <CharacterCard key={index} character={character} hidden={true} />
          }
        } else {
          return <CharacterCard key={index} character={character} hidden={false}/>
        }
      })}
    </div>
  )
}

export default Characters