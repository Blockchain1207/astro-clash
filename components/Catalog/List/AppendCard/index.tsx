import React from "react";
import cn from "classnames";
import styles from "./AppendCard.module.sass";
import Link from "next/link";
import Icon from "../../../Icon";

type AppendCardProps = {
    className?: string;
};

const AppendCard = ({ className }: AppendCardProps) => {
    return (
        <div className={cn(styles.append, className)}>
            <div className={styles.preview}>
                <Link href="/">
                    <a className={styles.add}>
                        <Icon name="plus" />
                    </a>
                </Link>
            </div>
            <div className={styles.blocks}>
                <div className={styles.line}>
                    <div className={styles.item}></div>
                    <div className={styles.item}></div>
                </div>
                <div className={styles.line}>
                    <div className={styles.item}></div>
                    <div className={styles.item}></div>
                </div>
            </div>
        </div>
    );
};

export default AppendCard;
