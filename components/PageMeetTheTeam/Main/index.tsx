import React from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "../../Image";
import Mouse from "../../Mouse";

type MainProps = {
    className?: string;
};

const Main = ({ className }: MainProps) => {
    return (
        <div className={cn("section-main", styles.section, className)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.inner}>
                    <div className={styles.preview}>
                        <Image
                            src="/images/content/bg-meet.jpg"
                            alt="Join the intergalactic battle."
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className={styles.wrapper}>
                        <div className={cn("hero", styles.title)}>
                            Join the intergalactic battle.
                        </div>
                        <div className={styles.description}>
                            Play-to-earn NFT Marketplace
                        </div>
                        <Mouse
                            className={styles.scroll}
                            title="Scroll down"
                            centered
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
