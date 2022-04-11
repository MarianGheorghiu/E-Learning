import {
    MainHeader,
    Navbar,
    Hero,
    Branding,
    Details,
    Team,
    Achivments,
    TrustedBy,
    Gallery,
    Contact,
    Copyright,
} from '../components';
import Link from 'next/link';

const HomePage = () => {
    return (
        <>
            <MainHeader>
                <Navbar />
                <Hero />
            </MainHeader>
            <Branding />
            <Details />
            <Team />
            <Achivments />
            <TrustedBy />
            <Gallery />
            <Contact />
            <Copyright />
            <Link href="/">
                <a
                    className="back-to-top d-flex align-items-center justify-content-center"
                    style={{ display: 'inline' }}
                />
            </Link>
        </>
    );
};

export default HomePage;
