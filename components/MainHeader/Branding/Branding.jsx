import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DescriptionIcon from '@mui/icons-material/Description';

import classes from './Branding.module.css';
import CardList from './CardList/CardList';

const CUSTOM_VALUES = [
    {
        title: 'School',
        text: 'This is a powerfull school, focused on student, with feedback on every month',
        icon: <AccountBalanceIcon fontSize="large" />,
    },
    {
        title: 'Development',
        text: 'Only thing that matters to us is the future of our students. We have weekly tests, and feedback for each student.',
        icon: <DesignServicesIcon fontSize="large" />,
    },
    {
        title: 'Grades are for the past',
        text: 'Grades are not real. Only thing that matters is knowledge, so all gares from test an so on does not matter, just focus on improve.',
        icon: <DescriptionIcon fontSize="large" />,
    },
];

const Branding = () => {
    return (
        <div
            data-aos="zoom-in-down"
            className={`container ${classes.services}`}
        >
            <div className="row">
                <div className="col-lg-12">
                    {CUSTOM_VALUES.map((value, index) => (
                        <CardList
                            key={`${value.title}${index}`}
                            icon={value.icon}
                            title={value.title}
                            text={value.text}
                        />
                    ))}
                </div>
            </div>
            <br />
        </div>
    );
};

export default Branding;
