import React from "react";
import cn from "classnames";
import styles from "./CardGhost.module.sass";

type CardGhostProps = {
    className?: string;
};

const CardGhost = ({ className }: CardGhostProps) => {
    return (
        <div className={cn(styles.card, className)}>
            <div className={styles.preview}></div>
            <div className={styles.thumbnails}>
                <div className={styles.thumbnail}></div>
            </div>

            <div className={styles.lines}></div>
        </div>
    );
};

export default CardGhost;
