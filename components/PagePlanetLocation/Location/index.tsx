import { useState } from "react";
import cn from "classnames";
import dynamic from "next/dynamic";
import styles from "./Location.module.sass";
import Image from "../../Image";
import Description from "../../Details/Description";
import Back from "../../Back";
import Icon from "../../Icon";
import ModalShareProfile from "../../ModalShareProfile";
import ModalPurchase from "../../ModalPurchase";

const Range = dynamic(() => import("react-slider"), {
    ssr: false,
});

const planets = [
    {
        info: {
            location: "Solar system",
            coordinates: "-15, +09, +89",
            name: "Mars 078928",
            id: "078982",
            crypto: "3.54 ETH",
            price: "221.38",
        },
        position: {
            x: 2,
            y: 74,
        },
        image: {
            src: "/images/content/planets/image-3.png",
            width: 82,
            height: 82,
            alt: "Space",
        },
    },
    {
        info: {
            location: "Solar system",
            coordinates: "-23, +01, +46",
            name: "Jupiter 036789",
            id: "036789",
            crypto: "6.12 ETH",
            price: "179.60",
        },
        position: {
            x: 22,
            y: 73,
        },
        image: {
            src: "/images/content/planets/image-7.png",
            width: 90,
            height: 90,
            alt: "Planet",
        },
    },
    {
        info: {
            location: "Solar system",
            coordinates: "-13, +45, +74",
            name: "Neptune 98759",
            id: "98759",
            crypto: "2.79 ETH",
            price: "180.12",
        },
        position: {
            x: 24,
            y: 54,
        },
        image: {
            src: "/images/content/planets/image-8.png",
            width: 42,
            height: 42,
            alt: "Planet",
        },
    },
    {
        info: {
            location: "Solar system",
            coordinates: "-15, +09, +89",
            name: "Uranus 956149",
            id: "956149",
            crypto: "4.65 ETH",
            price: "125.88",
        },
        position: {
            x: 62,
            y: 48,
        },
        image: {
            src: "/images/content/planets/image-1.png",
            width: 98,
            height: 98,
            alt: "Planet",
        },
    },
    {
        info: {
            location: "Solar system",
            coordinates: "-09, +87, +74",
            name: "Nebula 245668",
            id: "245668",
            crypto: "5.22 ETH",
            price: "87.38",
        },
        position: {
            x: 74,
            y: 10,
        },
        image: {
            src: "/images/content/planets/image-4.png",
            width: 122,
            height: 122,
            alt: "Planet",
        },
    },
];

type LocationProps = {};

const Location = ({}: LocationProps) => {
    const [visibleShare, setVisibleShare] = useState<boolean>(false);
    const [visiblePurchase, setVisiblePurchase] = useState<boolean>(false);
    const [planet, setPlanet] = useState<any>(planets[0]);
    const [rangeValue, setRangevalue] = useState<number>(50);

    return (
        <div className={cn("section-main", styles.section)}>
            <div className={cn("container-xl", styles.container)}>
                <div className={styles.wrapper}>
                    <div className={styles.controls}>
                        <Back
                            className={styles.back}
                            tooltip="Back"
                            url="/planet-details"
                            dark
                        />

                        <button
                            className={styles.share}
                            onClick={() => setVisibleShare(true)}
                        >
                            <Icon name="share" size="20" />
                        </button>
                        <ModalShareProfile
                            visibleModal={visibleShare}
                            setVisibleModal={() => setVisibleShare(false)}
                        />
                    </div>
                    <div className={styles.planets}>
                        {planets.map((x, index) => (
                            <div
                                style={{
                                    top: x.position.y + "%",
                                    left: x.position.x + "%",
                                }}
                                className={cn(styles.planet, {
                                    [styles.selected]: x === planet,
                                })}
                                onClick={() => setPlanet(x)}
                                key={index}
                            >
                                <div className={styles.info}>
                                    <div className={styles.location}>
                                        {x.info.location}
                                    </div>
                                    <div className={styles.coordinates}>
                                        {x.info.coordinates}
                                    </div>
                                </div>
                                <Image
                                    src={x.image.src}
                                    width={x.image.width}
                                    height={x.image.height}
                                    alt={x.image.alt}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.galaxy}>
                        <Image
                            src="/images/content/galaxy.svg"
                            width={1112}
                            height={772}
                            layout="fixed"
                            alt="Galaxy"
                        />
                    </div>

                    <div className={styles.range_slider}>
                        <Range
                            className={styles.slider}
                            thumbClassName={styles.thumb}
                            trackClassName={styles.track}
                            onChange={(rangeValue: any) =>
                                setRangevalue(rangeValue)
                            }
                            value={rangeValue}
                            step={1}
                            min={0}
                            max={100}
                            orientation="vertical"
                        />
                    </div>
                </div>
                <div className={styles.details}>
                    <Description
                        className={styles.description}
                        classNameDetails={styles.details_info}
                        title={planet.info.name}
                        code={planet.info.id}
                        crypto={planet.info.crypto}
                        price={planet.info.price}
                        small
                    />
                    <button
                        className={cn("button", styles.button)}
                        onClick={() => setVisiblePurchase(true)}
                    >
                        Purchase now
                    </button>
                    <ModalPurchase
                        visibleModal={visiblePurchase}
                        setVisibleModal={() => setVisiblePurchase(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Location;
