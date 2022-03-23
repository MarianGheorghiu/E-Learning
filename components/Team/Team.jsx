import classes from './Team.module.css';
import TeamList from './TeamList/TeamList';

const Team = () => {
    return (
        <section className={classes.team}>
            <div className="container">
                <div className={classes['section-title']}>
                    <h2 className={classes.h2}>Team</h2>
                    <p className={classes.p}>
                        Magnam dolores commodi suscipit. Necessitatibus eius
                        consequatur ex aliquid fuga eum quidem. Sit sint
                        consectetur velit. Quisquam quos quisquam cupiditate. Et
                        nemo qui impedit suscipit alias ea. Quia fugiat sit in
                        iste officiis commodi quidem hic quas.
                    </p>
                </div>
                <div className="row">
                    <TeamList />
                </div>
            </div>
        </section>
    );
};

export default Team;
