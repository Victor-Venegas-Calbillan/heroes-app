import { heroesData } from "../data";

export const getHeroById = ( id ) => {
  return heroesData.find( ( hero ) => hero.id === id );
};