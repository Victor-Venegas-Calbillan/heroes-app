import  PropTypes  from 'prop-types'
import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers";
import { useMemo } from 'react';

export const HeroList = ({ publisher }) => {

  const heroesFiltered = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeInUp">
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