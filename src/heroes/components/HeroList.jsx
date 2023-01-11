import { getHeroesByPublisher } from "../helpers";
import  PropTypes  from 'prop-types'

export const HeroList = ({ publisher }) => {

  const heroesFiltered = getHeroesByPublisher(publisher);
    
  return (
    <ul>
      {
        heroesFiltered.map( hero => (
          <li key={hero.id}>
            {hero.superhero}
          </li>
        ))   
      }
    </ul>
  )
}

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired
}