import React from 'react'
import "./CharacterCard.scss"

const CharacterCard = ({ character, hidden }) => {
  const {name, image, house, patronus, actor} = character;
  let cardColor = "grey";
  switch (house) {
    case "Gryffindor":
      cardColor = "red";
      break;
    case "Ravenclaw":
      cardColor = "blue";
      break;
    case "Slytherin":
      cardColor = "green";
      break;
    case "Hufflepuff":
      cardColor = "yellow";
      break;
  };
  let cardClass = `card ${cardColor}`;
  if (hidden) {
    cardClass =  `card ${cardColor} hidden`
  };
  const imageClass = `card__portrait ${cardColor}`;

  let patronusText = `Patronus: ${patronus}`;
  if (patronus.length === 0) {
    patronusText = " ";
  }

  return (
    <div className={cardClass}>
      <h1 className="card__name">{name}</h1>
      <img className={imageClass} src={image} alt={name} />
      <h2 className="card__house">{house}</h2>
      <h3 className="card__info">{patronusText}</h3>
      <h3 className="card__actor">Played by: {actor}</h3>
    </div>
  )
}

export default CharacterCard