import React from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "../../Image";

type MainProps = {
    className?: string;
};

const Main = ({ className }: MainProps) => {
    return (
        <div className={cn("section-main", styles.section)}>
            <div className={cn("container-lg", styles.container)}>
                <div className={styles.wrapper}>
                    <div className={styles.preview}>
                        <Image
                            src="/images/content/roadmap-char.png"
                            height={656}
                            width={1360}
                            alt="Roadmap"
                        />
                    </div>
                    <div className={cn("hero", styles.title)}>Roadmap</div>
                    <div className={styles.shadow}></div>
                    <div className={styles.background}></div>
                </div>
            </div>
        </div>
    );
};

export default Main;
