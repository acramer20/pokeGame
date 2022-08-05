import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

/** Index of Pokemon */
const Pokedex = (props) => {
  let winMessage = null;
  return (
    <div className="Pokedex">
      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-cards">
        {props.pokemon.map(p => (
          <Pokecard 
          id = {p.id}
          name = {p.name}
          type = {p.type}
          exp = {p.base_experience}
          />
        ))}
      </div>
    </div>
  )
}


export default Pokedex;
