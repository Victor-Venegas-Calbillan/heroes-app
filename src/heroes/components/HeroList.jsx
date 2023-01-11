import  PropTypes  from 'prop-types'
import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {

  const heroesFiltered = getHeroesByPublisher(publisher);
    
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {
        heroesFiltered.map( hero => (
          <HeroCard
            key={ hero.id }
            { ...hero }
          />
        ))   
      }
    </div>
  )
}

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired
}