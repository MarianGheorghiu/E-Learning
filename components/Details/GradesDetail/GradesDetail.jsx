import DetailsContainer from '../DetailsContainer/DetailsContainer';

const GRADES = {
    title: 'Grades & Learning',
    text: `  Our team of competent designers and developers are
    able to create beautiful designs and structured code
    that will serve your ecommerce project to establish
    your market position and increase revenues`,
    isSchool: false,
    image: 'grades.jpg',
};

const GradesDetail = () => {
    return (
        <DetailsContainer
            title={GRADES.title}
            text={GRADES.text}
            isShcool={GRADES.isSchool}
            image={GRADES.image}
        />
    );
};

export default GradesDetail;
