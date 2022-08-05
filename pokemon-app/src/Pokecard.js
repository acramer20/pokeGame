import React from 'react';
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';


/** Each pokemon card :) */

const Pokecard = (props) => {
  let pokePic = `${POKE_API}${props.id}.png`;

  return (
    <div className="Pokecard">
      <div className="Pokecard-title">{props.name}</div>
      <img className="Pokecard-image" src={pokePic} />
      <div className="Pokecard-data">Type: {props.type}</div>
      <div className="Pokecard-data">Exp: {props.exp}</div>
    </div>
  );
}

export default Pokecard;


