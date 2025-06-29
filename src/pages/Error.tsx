import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom"
import { Container } from "react-bootstrap"

const Error = () => {
    const error = useRouteError();
    let errorStatus : number;
    let errorStatusText : string;

    if (isRouteErrorResponse(error)) {
        errorStatus = error.status;
        errorStatusText = error.statusText;
    }else {
        errorStatus = 404;
        errorStatusText = "Page Not Found";
    }
  return (
    <Container className="notFound">
      <h1>{errorStatus}</h1>
      <p>{errorStatusText}</p>
        <p>Something went wrong. Please try again later.</p>
        <p>If the problem persists, contact support.</p>
        <p>Thank you for your patience.</p>
        <Link to="/" replace={true}>Go back to Home</Link>
    </Container>
  )
}

export default Error
