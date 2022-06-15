import { Link } from "react-router-dom";

export default function LandingPage() {
    return(
        <>
        <section>
            <h1>Welcome, partner!</h1>
            <p>This is the beginning of your new journey as a business that can reach anyone anywhere!</p>
            <Link to={'/signup'}>Become a Partner</Link>
        </section>
        <section>

        </section>
        </>
    );
};