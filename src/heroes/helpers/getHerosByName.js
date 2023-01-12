import { heroesData } from "../data";

export const getHeroesByName = (name = '') => {
  name = name.toLowerCase().trim();

  if(name.length === 0) return [];

  return heroesData.filter(
    hero => hero.superhero.toLowerCase().includes( name )
  )

}