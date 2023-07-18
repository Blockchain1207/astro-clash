import { useState, useRef, useEffect } from "react";
import cn from "classnames";
import styles from "./PageGameplay.module.sass";
import Hero from "./Hero";
import Section from "./Section";
import JoinCommunity from "../JoinCommunity";
import InfoColumns from "../InfoColumns";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

import { items } from "../../constants/infoColumns";
import { sections } from "../../constants/details";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

type PageGameplayProps = {
    className?: string;
};

const PageGameplay = ({ className }: PageGameplayProps) => {
    const [mounted, setMounted] = useState(false);

    const fullpagesRef = useRef(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const detailsRef = useRef<HTMLDivElement>(null);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (!sliderRef.current || !navRef.current) return;
        const fullpage = sliderRef.current;
        const panels: HTMLDivElement[] = gsap.utils.toArray(
            fullpage.childNodes
        );
        const nav: HTMLDivElement[] = gsap.utils.toArray(
            navRef.current.childNodes
        );

        ScrollTrigger.matchMedia({
            "(min-width: 767px)": function () {
                panels.forEach((panel, i) => {
                    ScrollTrigger.create({
                        trigger: panel,
                        start: "top center-=200px",
                        end: "bottom center+=200px",
                        scrub: 1,
                        toggleActions: "restart pause resume pause",
                        toggleClass: {
                            targets: nav[i],
                            className: styles.active,
                        },
                    });
                });

                gsap.to(fullpage, {
                    scrollTrigger: {
                        trigger: fullpage,
                        start: "top+=88px top+=88px",
                        end: "bottom bottom",
                        scrub: 1,
                        snap: {
                            snapTo: 1 / (panels.length - 1),
                            inertia: false,
                            duration: 0.8,
                        },
                    },
                });

                gsap.to(window, {
                    scrollTrigger: {
                        trigger: detailsRef.current,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: 1,
                        snap: {
                            snapTo: 1,
                            inertia: false,
                            duration: 0.8,
                        },
                    },
                });
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
            ScrollTrigger.clearMatchMedia();
        };
    }, [mounted]);

    function scrollTo(index: number) {
        if (!sliderRef.current) return;

        const panels: HTMLDivElement[] = gsap.utils.toArray(
            sliderRef.current.childNodes
        );

        gsap.to(window, {
            duration: 0.8,
            scrollTo: {
                y: panels[index],
                autoKill: false,
            },
        });
    }

    return (
        <>
            {mounted && (
                <>
                    <Hero />

                    <div className={styles.wrapper} ref={fullpagesRef}>
                        <div className={styles.sticky}>
                            <div className={cn(styles.nav)} ref={navRef}>
                                {sections.map((section, index) => (
                                    <button
                                        className={cn(styles.nav_btn)}
                                        key={index}
                                        onClick={() => scrollTo(index)}
                                    ></button>
                                ))}
                            </div>
                        </div>
                        <div className={styles.container} ref={sliderRef}>
                            {sections.map((section, index) => (
                                <Section
                                    className={cn(className, styles.section)}
                                    item={section}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>

                    <InfoColumns
                        title="The battle never ends"
                        items={items}
                        className={styles.fullpage}
                        ref={detailsRef}
                    />

                    <JoinCommunity />
                </>
            )}
        </>
    );
};

export default PageGameplay;
