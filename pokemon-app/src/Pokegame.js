import React from "react";
import Pokedex from "./Pokedex";

function Pokegame(props) {
  let firstHand = [];
  let secHand = [...props.pokemon];

  while (firstHand.length < secHand.length) {
    // take a random pokemon from hand 2, add it to hand 1
    let randIdx = Math.floor(Math.random() * secHand.length);
    let newPokemon = secHand.splice(randIdx, 1)[0];
    firstHand.push(newPokemon);
  }

  let exp1 = firstHand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  let exp2 = secHand.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <div>
      <Pokedex pokemon={firstHand} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={secHand} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
}

Pokegame.defaultProps = {
  pokemon: [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
  ]
};

export default Pokegame;
