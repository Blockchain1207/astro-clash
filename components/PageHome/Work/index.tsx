import { useState, useRef, useEffect } from "react";
import cn from "classnames";
import styles from "./Work.module.sass";
import Image from "../../Image";
import Item from "./Item";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { items } from "../../../constants/work";

type WorkProps = {};

const Work = ({}: WorkProps) => {
    const [mounted, setMounted] = useState(false);

    const wrapper = useRef(null);
    const planet_1 = useRef(null);
    const planet_2 = useRef(null);
    const sphere_1 = useRef(null);
    const sphere_2 = useRef(null);
    const sphere_3 = useRef(null);
    const sphere_4 = useRef(null);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (!planet_1.current) return;

        ScrollTrigger.matchMedia({
            "(min-width: 767px)": function () {
                const scrollWork = gsap.timeline({
                    paused: true,
                    onStart: () => {
                        if (scrollWork.scrollTrigger)
                            scrollWork.scrollTrigger.refresh();
                    },
                    scrollTrigger: {
                        trigger: wrapper.current,
                        start: "top-=200px bottom-=+25%",
                        end: "top+=400px top+=+25%",
                        scrub: true,
                    },
                });

                scrollWork
                    .to(
                        planet_1.current,
                        {
                            y: "-260px",
                        },
                        0
                    )
                    .to(
                        planet_2.current,
                        {
                            y: "-140px",
                        },
                        0
                    )
                    .to(
                        sphere_1.current,
                        {
                            y: "-120px",
                        },
                        0
                    )
                    .to(
                        sphere_2.current,
                        {
                            y: "-40px",
                        },
                        0
                    )
                    .to(
                        sphere_3.current,
                        {
                            y: "-60px",
                        },
                        0
                    )
                    .to(
                        sphere_4.current,
                        {
                            y: "-200px",
                        },
                        0
                    );
                return function () {
                    scrollWork.kill();
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
                <div className={styles.section}>
                    <div
                        ref={wrapper}
                        className={cn("container-md", styles.container)}
                    >
                        <div className={styles.images}>
                            <div className={styles.preview}>
                                <Image
                                    src="/images/content/observatory.png"
                                    width={444}
                                    height={335}
                                    alt="Observatory"
                                />
                            </div>
                            <div
                                ref={planet_1}
                                className={cn(styles.planet_1, styles.planets)}
                            >
                                <Image
                                    src="/images/content/planets/planet-3.png"
                                    width={202}
                                    height={202}
                                    alt="Observatory"
                                />
                            </div>
                            <div
                                ref={planet_2}
                                className={cn(styles.planet_2, styles.planets)}
                            >
                                <Image
                                    src="/images/content/planets/planet-6.png"
                                    width={125}
                                    height={125}
                                    alt="Observatory"
                                />
                            </div>
                            <div
                                ref={sphere_1}
                                className={cn(styles.sphere_1, styles.spheres)}
                            ></div>
                            <div
                                ref={sphere_2}
                                className={cn(styles.sphere_2, styles.spheres)}
                            ></div>
                            <div
                                ref={sphere_3}
                                className={cn(styles.sphere_3, styles.spheres)}
                            ></div>
                            <div
                                ref={sphere_4}
                                className={cn(styles.sphere_4, styles.spheres)}
                            ></div>
                        </div>
                        <div className={cn("h1", styles.title)}>
                            How Astrowars work
                        </div>
                        <div className={styles.list}>
                            {items.map((x, index) => (
                                <Item
                                    className={styles.item}
                                    item={x}
                                    key={index}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Work;
