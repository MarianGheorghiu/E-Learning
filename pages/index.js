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
        </>
    );
};

export default HomePage;
