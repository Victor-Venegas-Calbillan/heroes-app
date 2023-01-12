import { HeroCard } from "../components";

export const SearchPage = () => {
  return (
    <>
      <h1 className="animate__animated animate__fadeIn">SearchPage</h1>
      <hr />

      <div className="row">
        <div className="col-5 animate__animated animate__fadeInLeft">
          <h3>Search</h3>
          <hr />

          <form className="mt-3">
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              autoComplete="off"
              name="searchText"
            />

            <button className="btn btn-outline-primary mt-3">
              search
            </button>
          </form>
        </div>
        <div className="col-7 animate__animated animate__fadeInRight">
          <h3>Resultados</h3>
          <hr />
          <div className="alert alert-primary">Search a hero</div>
          <div className="alert alert-danger">No hero with <b>ABC</b></div>

          {/* <HeroCard /> */}
        </div>
      </div>
    </>
  );
};
