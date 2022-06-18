import './LandingPage.css';
import { Link } from "react-router-dom";

export default function LandingPage() {
    return(
        <>
        <section id='section1'>
            <h1 className='black'>Welcome, partner!</h1>
            <p className='black'>This is the beginning of your new journey as a business that can reach anyone anywhere.</p>
            <Link to={'/signup'} className='linkBtn white greenBack' >Become a Partner</Link>
        </section>
        <section>

        </section>
        </>
    );
};