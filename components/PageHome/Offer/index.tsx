import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Offer.module.sass";
import Icon from "../../Icon";
import Image from "../../Image";

type OfferProps = {};

const Timer = ({}) => {
    const [time, setTime] = useState<{
        timestamp: number;
        s: number;
        m: number;
        h: number;
        d: number;
    }>({
        timestamp: 1123200000,
        s: 0,
        m: 0,
        h: 0,
        d: 0,
    });

    useEffect(() => {
        let countdown = setInterval(() => {
            if (time.timestamp < 0) return;
            setTime((prev) => ({
                timestamp: prev.timestamp - 1000,
                s: Math.floor((time.timestamp / 1000) % 60),
                m: Math.floor((time.timestamp / 1000 / 60) % 60),
                h: Math.floor((time.timestamp / (1000 * 60 * 60)) % 24),
                d: Math.floor(time.timestamp / (1000 * 60 * 60 * 24)),
            }));
        }, 1000);
        return () => clearInterval(countdown);
    }, [time]);

    return (
        <div className={styles.timer}>
            <div className={styles.indicator}>
                <div className={cn("h3", styles.value)}>{time.d}</div>
                <div className={styles.note}>days</div>
            </div>
            <div className={styles.indicator}>
                <div className={cn("h3", styles.value)}>{time.h}</div>
                <div className={styles.note}>hours</div>
            </div>
            <div className={styles.indicator}>
                <div className={cn("h3", styles.value)}>{time.m}</div>
                <div className={styles.note}>minutes</div>
            </div>
            <div className={styles.indicator}>
                <div className={cn("h3", styles.value)}>{time.s}</div>
                <div className={styles.note}>seconds</div>
            </div>
        </div>
    );
};

const Offer = ({}: OfferProps) => (
    <div className={styles.section}>
        <div className={cn("container-md container-window", styles.container)}>
            <div className={styles.preview}>
                <Image
                    src="/images/content/spaceship-1.png"
                    width="600"
                    height="600"
                    alt="Spaceship"
                />
            </div>
            <div className={styles.wrap}>
                <h2 className={cn("h2", styles.title)}>
                    Build spaceship. Join the battle.
                </h2>
                <div className={styles.info}>
                    Incidunt id delectus cupiditate omnis nisi soluta vel
                    laboriosam cupiditate.
                </div>
                <div className={styles.box}>
                    <div className={styles.line}>
                        <div className={cn("title", styles.subtitle)}>
                            Launch day
                        </div>
                        <div className={styles.date}>
                            March 1, 2022 at 9 PM EST
                        </div>
                    </div>

                    <Timer />

                    <div className={styles.text}>
                        Secure your whitelist slot
                    </div>
                    <button className={cn("button", styles.button)}>
                        <Icon name="discord" size="20" />
                        <span>Join our discord</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Offer;
