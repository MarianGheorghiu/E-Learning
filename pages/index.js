import Details from '../components/Details/Details';
import Navbar from '../components/Layout/Navbar/Navbar';
import Hero from '../components/MainHeader/Hero/Hero';
import MainHeader from '../components/MainHeader/MainHeader';
import Branding from '../components/MainHeader/Branding/Branding';

const HomePage = () => {
    return (
        <>
            <MainHeader>
                <Navbar />
                <Hero />
                <Branding />
            </MainHeader>
            <Details />
        </>
    );
};

export default HomePage;
