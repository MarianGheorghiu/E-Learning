import Details from '../components/Details/Details';
import Navbar from '../components/Layout/Navbar/Navbar';
import Hero from '../components/MainHeader/Hero/Hero';
import MainHeader from '../components/MainHeader/MainHeader';
import Branding from '../components/MainHeader/Branding/Branding';
import Team from '../components/Team/Team';
import Achivments from '../components/Achivments/Achivments';
import TrustedBy from '../components/TrustedBy/TrustedBy';
import Gallery from '../components/Gallery/Gallery';
import Contact from '../components/Contact/Contact';
import Copyright from '../components/Copyright/Copyright';

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
