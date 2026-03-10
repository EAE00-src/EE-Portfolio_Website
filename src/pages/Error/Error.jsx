import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Error() {
        return (
        <>
        <Helmet>
            <title>404 - Page Not Found </title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="The page you are looking for does not exist. Return to Edwin's portfolio to explore his projects or get in touch with him." />
        </Helmet>
        <div style={{textAlign: "center", color: 'whitesmoke'}}>
            <h1>404 - Error</h1>
            <h1> Oops 😓 This page doesn't exist!</h1>
            <Link to='/' aria-label="Return to Home page" style={{color: '#ee0000', fontSize: '20px'}}>Return to Home page</Link>
        </div>
        </>
    )
}

export default Error;