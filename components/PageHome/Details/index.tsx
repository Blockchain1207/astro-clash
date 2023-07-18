import cn from "classnames";
import styles from "./Details.module.sass";
import Slider from "react-slick";
import Slide from "./Slide";
import Icon from "../../Icon";
import Image from "../../Image";

type PlacesType = {
    location: string;
    planet: string;
    content: string;
};

const places: PlacesType[] = [
    {
        location: "Astronauto",
        planet: "Earth",
        content:
            "Ab eligendi ut nisi voluptate blanditiis laborum sint officiis.",
    },
    {
        location: "Lizandro",
        planet: "Mars",
        content: "Adipisci repellat eum quis cupiditate nisi sint rerumoisz.",
    },
];

const avatars: Array<string> = [
    "/images/content/avatars/avatar-1.jpg",
    "/images/content/avatars/avatar-2.jpg",
    "/images/content/avatars/avatar-3.jpg",
    "/images/content/avatars/avatar-4.jpg",
];

type DetailsProps = {};

const Details = ({}: DetailsProps) => {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
    };

    return (
        <div className={styles.section}>
            <Slider className="details-slider" {...settings}>
                <Slide
                    className={styles.slide}
                    titles={[
                        "Earn together",
                        "Protect your planet",
                        "Join the battle.",
                    ]}
                    index="1"
                    subtitle="When the war begins"
                    content="Explicabo qui est id maxime ut eum occaecati. Esse maiores aut ut eaque et illum nisi."
                    imageClassName={styles.circles}
                    imageSrc="/images/content/details-pic-1.png"
                    imageWidth="582"
                    imageHeight="656"
                >
                    <div className={styles.places}>
                        {places.map((place, index) => (
                            <div className={styles.place} key={index}>
                                <div className={cn("h6", styles.location)}>
                                    {place.location}
                                </div>
                                <div className={styles.planet}>
                                    <Icon name="location" />
                                    {place.planet}
                                </div>
                                <div className={styles.content}>
                                    {place.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </Slide>
                <Slide
                    className={styles.slide}
                    titles={[
                        "Protect your planet",
                        "Join the battle.",
                        "Earn together",
                    ]}
                    index="2"
                    subtitle="Join the intergalactic battle."
                    content="Explicabo qui est id maxime ut eum occaecati. Esse maiores aut ut eaque et illum nisi ."
                    imageSrc="/images/content/details-pic-2.png"
                    imageWidth="576"
                    imageHeight="570"
                >
                    <div className={cn("h6", styles.subtitle)}>Earn reward</div>
                    <div className={styles.content}>
                        Incidunt aut sapiente similique recusandae. Veniam
                        aliquid est rerum dolores enim consequatur id similique.
                        Quos quis ea. Dolor ipsam ut rerum ea. Aut incidunt
                        voluptatem dignissimos.
                    </div>
                    <div className={cn("hero", styles.counter)}>
                        10<span>x</span>
                    </div>
                </Slide>
                <Slide
                    className={styles.slide}
                    titles={[
                        "Join the battle.",
                        "Earn together",
                        "Protect your planet",
                    ]}
                    index="3"
                    subtitle="Playing real-time."
                    content="Explicabo qui est id maxime ut eum occaecati. Esse maiores aut ut eaque et illum nisi deleniti sequi."
                    imageSrc="/images/content/details-pic-3.png"
                    imageWidth="576"
                    imageHeight="600"
                >
                    <div className={cn("h6", styles.subtitle)}>
                        Challenge friends
                    </div>
                    <div className={styles.content}>
                        Incidunt aut sapiente similique recusandae. Veniam
                        aliquid est rerum dolores enim consequatur id similique.
                        Quos quis ea. Dolor ipsam u.
                    </div>
                    <div className={styles.avatars}>
                        {avatars.map((avatar, index) => (
                            <div className={styles.avatar} key={index}>
                                <Image
                                    src={avatar}
                                    width={48}
                                    height={48}
                                    alt="Avatar"
                                />
                            </div>
                        ))}
                    </div>
                </Slide>
            </Slider>
        </div>
    );
};

export default Details;
