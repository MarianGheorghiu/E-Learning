import MainCourses from '../../components/ExplorePage/MainCourses/MainCourses';
import MainNav from '../../components/ExplorePage/MainNav/MainNav';
import MainUser from '../../components/ExplorePage/MainUser/MainUser';
import Container from '@mui/material/Container';

const ExplorePage = () => {
    return (
        <>
            <MainNav />
            <Container>
                <MainUser />
                <MainCourses />
            </Container>
        </>
    );
};

export default ExplorePage;
