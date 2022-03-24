import Image from 'next/image';
import classes from './Gallery.module.css';

const IMAGE_INDEX = [1, 2, 3, 4, 5, 6, 7, 8];

const ImageList = ({ index }) => {
    return (
        <div className={`col-lg-3 col-md-4 ${classes.img}`}>
            <Image
                src={`/assets/gallery/gallery-${index}.jpg`}
                alt="img"
                className="img-fluid"
                width={120}
                height={90}
                layout="responsive"
            />
        </div>
    );
};

const Gallery = () => {
    return (
        <section data-aos="flip-right">
            <div className="container">
                <div className="section-title">
                    <h2 className={classes.h2}>Events</h2>
                    <p className={classes.p}>
                        Magnam dolores commodi suscipit. Necessitatibus eius
                        consequatur ex aliquid fuga eum quidem. Sit sint
                        consectetur velit. Quisquam quos quisquam cupiditate. Et
                        nemo qui impedit suscipit alias ea. Quia fugiat sit in
                        iste officiis commodi quidem hic quas.
                    </p>
                </div>
                <div className="row no-gutters">
                    {IMAGE_INDEX.map((index) => (
                        <ImageList key={index} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
