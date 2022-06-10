import React, {useEffect, useState} from "react";

export function RunFetch(house) {
    const [characterArray, setArray] = useState();

    useEffect(() => {
        getCharacters().then(items => setArray(items))
      }, []);
    
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

    return characterArray;
    
}