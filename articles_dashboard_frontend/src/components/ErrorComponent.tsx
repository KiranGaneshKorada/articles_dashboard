import { Link, useRouteError } from "react-router-dom";

export default function ErrorComponent(){
    const error:any=useRouteError();

    return (
      <>
        <div className="d-flex flex-column align-items-center">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occured.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          <Link to={`country_region`}>
            <button className="btn navbar-css navbar-anchor-css" type="button">
              Redirect Me To Home Page
            </button>
          </Link>
        </div>
      </>
    );
}