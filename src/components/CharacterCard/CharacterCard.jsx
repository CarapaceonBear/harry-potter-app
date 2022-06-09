import React from 'react'
import "./CharacterCard.scss"

const CharacterCard = ({ character }) => {

  const {name, image, house, patronus, actor} = character;

  return (
    <div className="card">
      <h1 className="card__name">{name}</h1>
      <img className="card__portrait" src={image} alt={name} />
      <h2 className="card__house">{house}</h2>
      <h3 className="card__info">Patronus: {patronus}</h3>
      <h3 className="card_info">Played by: {actor}</h3>
    </div>
  )
}

export default CharacterCard