import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hook";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = (q.length > 0 ) && heroes.length === 0;

  const { searchText, handleInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1 className="animate__animated animate__fadeIn">
        SearchPage
      </h1>
      <hr />

      <div className="row">
        <div className="col-5 animate__animated animate__fadeInLeft">
          <h3>Search</h3>
          <hr />

          <form className="mt-3" onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />

            <button className="btn btn-outline-primary mt-3">
              search
            </button>
          </form>
        </div>
        <div className="col-7 animate__animated animate__fadeInRight">
          <h3>Resultados</h3>
          <hr />
          {
            heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

          <div 
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' } }
          >
            Search a hero
          </div>
          <div 
            className="alert alert-danger animate__animated animate__fadeIn" 
            style={{ display: showError ? '' : 'none' }}
          >
            No hero with <b>{q}</b>
          </div>
        </div>
      </div>
    </>
  );
};
