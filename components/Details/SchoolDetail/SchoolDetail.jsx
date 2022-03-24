import DetailsContainer from '../DetailsContainer/DetailsContainer';

const SCHOOL = {
    title: 'Branding & strategy',
    text: `To build a solid foundation for your online shop you
    need a strong brand and a bulletproof strategy. You
    can rely on our experience to create a beautiful and
    efficient online shop`,
    isSchool: true,
    image: 'school.png',
};

const SchoolDetail = () => {
    return (
        <DetailsContainer
            title={SCHOOL.title}
            text={SCHOOL.text}
            isShcool={SCHOOL.isSchool}
            image={SCHOOL.image}
        />
    );
};

export default SchoolDetail;
