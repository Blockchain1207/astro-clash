import { useState, useRef, useEffect } from "react";
import styles from "./Parallax.module.sass";
import cn from "classnames";
import Image from "../../Image";
import Mouse from "../../Mouse";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

type ImagesType = {
    src: string;
    width: number;
    height: number;
    alt: string;
    animate?: boolean;
};

const planets_1: ImagesType[] = [
    {
        src: "/images/content/planets/planet-3.png",
        width: 120,
        height: 120,
        alt: "Planet",
    },
    {
        src: "/images/content/planets/planet-5.png",
        width: 230,
        height: 230,
        alt: "Planet",
    },
    {
        src: "/images/content/planets/planet-6.png",
        width: 148,
        height: 148,
        alt: "Planet",
    },
];

const planets_2: ImagesType[] = [
    {
        src: "/images/content/planets/image-8.png",
        width: 194,
        height: 194,
        alt: "Planet",
        animate: true,
    },
    {
        src: "/images/content/planets/planet-5.png",
        width: 238,
        height: 238,
        alt: "Planet",
    },
    {
        src: "/images/content/planets/planet-6.png",
        width: 145,
        height: 145,
        alt: "Planet",
    },
];

type ParallaxProps = { children: React.ReactNode };

const Parallax = ({ children }: ParallaxProps) => {
    const [stateScroll, setStateScroll] = useState<number>(1);
    const [mounted, setMounted] = useState(false);

    const text1 = useRef(null);
    const text2 = useRef(null);
    const bg = useRef(null);
    const bgShift = useRef(null);
    const planets1 = useRef(null);
    const planets2 = useRef(null);
    const planet = useRef(null);
    const wrapper = useRef(null);
    const slide1 = useRef(null);
    const slide2 = useRef(null);
    const spaceship = useRef(null);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (!text1.current) return;

        ScrollTrigger.saveStyles([
            text1.current,
            text2.current,
            bg.current,
            bgShift.current,
            planets1.current,
            planets2.current,
            planet.current,
            wrapper.current,
            slide1.current,
            slide2.current,
            spaceship.current,
        ]);

        ScrollTrigger.matchMedia({
            "(min-width: 767px)": function () {
                const timeline = gsap.timeline({
                    paused: true,
                    scrollTrigger: {
                        pin: wrapper.current,
                        end: "2000px",
                        scrub: true,
                        snap: {
                            snapTo: [0, 0.5, 1],
                            duration: { min: 0.2, max: 3 },
                        },
                        onUpdate: ({ progress }) => {
                            let p = parseFloat(progress.toFixed(1));
                            if (p == 0) setStateScroll(1);
                            if (p == 0.5) setStateScroll(2);
                            if (p == 1) setStateScroll(3);
                        },
                    },
                });

                timeline
                    .to(
                        text1.current,
                        {
                            x: "-200px",
                            opacity: 0,
                        },
                        0
                    )
                    .to(
                        bg.current,
                        {
                            width: "100%",
                        },
                        0
                    )
                    .to(bgShift.current, { x: "0" }, 0)
                    .to(
                        planets1.current,
                        {
                            x: "-400px",
                            width: "100%",
                            rotate: "8deg",
                            opacity: 0,
                        },
                        0
                    )
                    .to(
                        text2.current,
                        {
                            y: "80px",
                            delay: 0.2,
                            opacity: 1,
                            pointerEvents: "auto",
                        },
                        0
                    )
                    .to(
                        slide1.current,
                        {
                            y: "-180px",
                            scale: 0.7,
                            opacity: 0,
                        },
                        1
                    )
                    .to(
                        slide2.current,
                        {
                            delay: 0.3,
                            y: 0,
                            opacity: 1,
                            pointerEvents: "auto",
                            zIndex: 5,
                        },
                        1
                    )
                    .to(
                        spaceship.current,
                        {
                            y: 0,
                            delay: 0.3,
                            opacity: 1,
                        },
                        1
                    )
                    .to(
                        planets2.current,
                        {
                            y: 0,
                            delay: 0.3,
                            opacity: 1,
                        },
                        1
                    )
                    .to(
                        planet.current,
                        {
                            delay: 0.3,
                            rotate: "-27deg",
                        },
                        1
                    );

                return function () {
                    timeline.kill();
                    ScrollTrigger.refresh();
                };
            },
            "(max-width: 766px)": function () {
                const timeline = gsap.timeline({
                    paused: true,
                    scrollTrigger: {
                        pin: wrapper.current,
                        end: "800px",
                        scrub: true,
                        snap: {
                            snapTo: [0, 0.5, 1],
                            duration: { min: 1, max: 2 },
                            inertia: false,
                        },
                    },
                });

                timeline
                    .to(
                        text1.current,
                        {
                            x: "-200px",
                            opacity: 0,
                        },
                        0
                    )
                    .to(
                        text2.current,
                        {
                            x: "-50%",
                            delay: 0.3,
                            opacity: 1,
                            pointerEvents: "auto",
                        },
                        0
                    )
                    .to(
                        slide1.current,
                        {
                            y: "-180px",
                            scale: 0.7,
                            opacity: 0,
                        },
                        1
                    )
                    .to(
                        slide2.current,
                        {
                            delay: 0.3,
                            y: 0,
                            opacity: 1,
                            pointerEvents: "auto",
                            zIndex: 5,
                        },
                        1
                    )
                    .to(
                        spaceship.current,
                        {
                            y: 0,
                            delay: 0.3,
                            opacity: 1,
                        },
                        1
                    )
                    .to(
                        planets2.current,
                        {
                            y: 0,
                            delay: 0.3,
                            opacity: 1,
                        },
                        1
                    )
                    .to(
                        planet.current,
                        {
                            delay: 0.3,
                            rotate: "-27deg",
                        },
                        1
                    );

                return function () {
                    timeline.kill();
                    ScrollTrigger.refresh();
                };
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
            ScrollTrigger.clearMatchMedia();
        };
    }, [mounted]);

    return (
        <>
            {mounted && (
                <div className={styles.wrapper} ref={wrapper}>
                    <div className={cn(styles.slide, styles[stateScroll])}>
                        <div className={cn("container-xl", styles.container)}>
                            <div className={styles.slide_1} ref={slide1}>
                                <div className={styles.text_1} ref={text1}>
                                    <div className={cn("hero", styles.title)}>
                                        Join the intergalactic battle.
                                    </div>
                                    <div className={cn("h5", styles.info)}>
                                        Play-to-Earn NFT Marketplace
                                    </div>
                                    <Link href="/welcome">
                                        <a
                                            className={cn(
                                                "button",
                                                styles.button
                                            )}
                                        >
                                            Get a character
                                        </a>
                                    </Link>
                                </div>

                                <div className={styles.text_2} ref={text2}>
                                    <div className={cn("hero", styles.title)}>
                                        Protect your planet. Earn 2x money.
                                    </div>
                                    <div className={cn("h5", styles.info)}>
                                        Play-to-Earn NFT Marketplace
                                    </div>
                                    <Link href="/gameplay">
                                        <a
                                            className={cn(
                                                "button",
                                                styles.button
                                            )}
                                        >
                                            See how it work
                                        </a>
                                    </Link>
                                </div>

                                <div className={styles.background} ref={bg}>
                                    <div className={styles.shift} ref={bgShift}>
                                        <Image
                                            src="/images/content/slide-pic-1.png"
                                            layout="fixed"
                                            width={1370}
                                            height={880}
                                            alt="Space"
                                        />
                                    </div>
                                </div>

                                <div
                                    className={styles.planets_1}
                                    ref={planets1}
                                >
                                    {planets_1.map((image, index) => (
                                        <div
                                            className={styles.preview_1}
                                            key={index}
                                        >
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

                            <div className={styles.slide_2} ref={slide2}>
                                <div className={styles.text_3}>
                                    <div className={cn("hero", styles.title)}>
                                        Land now to join the funny battle.
                                    </div>
                                    <div className={cn("h5", styles.info)}>
                                        Play-to-Earn NFT Marketplace
                                    </div>
                                    <Link href="/download-and-play">
                                        <a
                                            className={cn(
                                                "button",
                                                styles.button
                                            )}
                                        >
                                            Download and play
                                        </a>
                                    </Link>
                                </div>

                                <div
                                    className={styles.planets_2}
                                    ref={planets2}
                                >
                                    {planets_2.map((image, index) => (
                                        <div
                                            className={styles.preview_2}
                                            key={index}
                                            ref={image.animate ? planet : null}
                                        >
                                            <Image
                                                src={image.src}
                                                width={image.width}
                                                height={image.height}
                                                alt={image.alt}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div
                                    className={styles.spaceship}
                                    ref={spaceship}
                                >
                                    <div
                                        className={styles.spaceship_shadow}
                                    ></div>
                                    <Image
                                        src="/images/content/spaceship-1.png"
                                        width={500}
                                        height={500}
                                        alt="Spaceship"
                                    />
                                </div>
                            </div>

                            <div className={styles.control}>
                                <Mouse className={styles.mouse} />
                                <div className={styles.pagination}>
                                    <div className={styles.number}>
                                        0{stateScroll}
                                    </div>
                                    <div className={styles.line}></div>
                                    <div className={styles.all}>03</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {children}
                </div>
            )}
        </>
    );
};

export default Parallax;
