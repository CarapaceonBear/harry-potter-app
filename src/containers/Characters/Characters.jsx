import React from 'react'
import "./Characters.scss"
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import characters from '../../data/characters';

const Characters = (props) => {
  const { characters } = props;

  return (
    <div className="characters">
      {characters.map((character, index) => {
        return <CharacterCard key={index} character={character}/>
      })}
    </div>
  )
}

export default Characters