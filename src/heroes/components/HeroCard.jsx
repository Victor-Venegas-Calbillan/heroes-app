import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharactersByHero = ({ alter_ego, characters }) => {
  if( alter_ego === characters ) return null;
  return <p>{characters}</p> 
}

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `./heroes/${id}.jpg`;

  return (
    <div className="col">
      <div className="card">
        <div className="row nogutters">
          <div className="col-4">
            <img
              src={heroImageUrl}
              alt={superhero}
              className="card-img"
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              <CharactersByHero 
                alter_ego={alter_ego} 
                characters={characters} 
              />
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small> 
              </p>

              <Link to={`/hero/${id}`}>
                Mas Infromacion
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};
