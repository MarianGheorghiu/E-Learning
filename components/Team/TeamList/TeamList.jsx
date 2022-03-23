import classes from './TeamList.module.css';

const MEMBERS = [
    {
        name: 'Walter White',
        status: 'Chief Executive Officer',
        img: 'team-1.jpg',
    },
    {
        name: 'Sarah Jhonson',
        status: 'Product Manager',
        img: 'team-2.jpg',
    },
    {
        name: 'William Anderson',
        status: 'CTO',
        img: 'team-3.jpg',
    },
    {
        name: 'Amanda Jepson',
        status: 'Accountant',
        img: 'team-4.jpg',
    },
];

const Member = ({ name, status, img }) => {
    return (
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className={classes.member}>
                <div className={classes['member-img']}>
                    <img
                        src={`assets/team/${img}`}
                        className="img-fluid"
                        alt="img"
                    />
                </div>
                <div className={classes['member-info']}>
                    <h4 className={classes.h4}>{name}</h4>
                    <span className={classes.sp}>{status}</span>
                </div>
            </div>
        </div>
    );
};

const TeamList = () => {
    return MEMBERS.map((member, i) => (
        <Member
            key={i}
            name={member.name}
            status={member.status}
            img={member.img}
        />
    ));
};

export default TeamList;
