import React from 'react'
import "./Characters.scss"
import CharacterCard from '../../components/CharacterCard/CharacterCard';

const Characters = ({ characters }) => {
  return (
    <div className="characters">
      {characters.map((character, index) => {
        return <CharacterCard key={index} character={character}/>
      })}
    </div>
  )
}

export default Characters