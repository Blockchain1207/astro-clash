import styles from "./Popular.module.sass";
import cn from "classnames";
import Slider from "react-slick";
import Card from "../Card";
import Icon from "../Icon";

import { ItemsType } from "../../types";
import Link from "next/link";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }: any) => (
    <button {...props}>{children}</button>
);

type PopularProps = {
    title: string;
    items: ItemsType[];
};

const Popular = ({ title, items }: PopularProps) => {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        speed: 500,
        nextArrow: (
            <SlickArrow>
                <Icon name="arrow-right" size="20" />
            </SlickArrow>
        ),
        prevArrow: (
            <SlickArrow>
                <Icon name="arrow-left" size="20" />
            </SlickArrow>
        ),
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div className={cn("section", styles.popular)}>
            <div className={cn("container-lg", styles.container)}>
                <div className={styles.head}>
                    <h3 className={cn("h3", styles.title)}>{title}</h3>
                    <Link href="/marketplace">
                        <a className={cn("button-stroke", styles.button)}>
                            <span>View all NFTs</span>
                            <Icon name="arrow-right" size="20" />
                        </a>
                    </Link>
                </div>
                <div className={styles.wrapper}>
                    <Slider className="popular-slider" {...settings}>
                        {items.map((x, index) => (
                            <Card
                                className={styles.card}
                                item={x}
                                key={index}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Popular;
