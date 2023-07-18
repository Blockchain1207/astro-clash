import styles from "./Acquaintance.module.sass";
import cn from "classnames";
import Slider from "react-slick";
import Image from "../../Image";

import { images, items } from "../../../constants/acquaintance";
import Slide from "./Slide";
import Floor from "./Floor";

type AcquaintanceProps = {};

const Acquaintance = ({}: AcquaintanceProps) => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        dotsClass: cn("slick-dots", styles.dots),
    };

    return (
        <div className={styles.section}>
            <div className={styles.slider}>
                <Slider className="details-slider" {...settings}>
                    {items.map((x, index) => (
                        <Slide value={x} key={index} />
                    ))}
                </Slider>
            </div>

            <Floor className={styles.floor} />

            <div className={styles.images}>
                {images.map((image, index) => (
                    <div className={styles.image} key={index}>
                        <Image
                            src={image.src}
                            width={image.width}
                            height={image.height}
                            alt={image.alt}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Acquaintance;
