import { heroesData } from "../data";

export const getHerosByName = (name = '') => {
  name = name.toLowerCase().trim();

  if(name.length === 0) return [];

  return heroesData.filter(
    hero => hero.superhero.toLowerCase().includes( name )
  )

}