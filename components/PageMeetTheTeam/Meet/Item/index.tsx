import React from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Image from "../../../Image";
import Icon from "../../../Icon";

type ItemsProps = {
    className?: string;
    item: any;
};

const Items = ({ className, item }: ItemsProps) => {
    return (
        <div className={cn(styles.wrapper, className)}>
            <div className={styles.preview}>
                <Image
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                    alt={item.name}
                />
            </div>
            <div className={cn("title", styles.title)}>{item.name}</div>
            <div className={styles.info}>{item.info}</div>
            <div className={styles.content}>{item.content}</div>
            <div className={styles.networks}>
                <a
                    href={item.twitter}
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon name="twitter-stroke" />
                </a>

                <a
                    href={item.instagram}
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Icon name="instagram-stroke" />
                </a>
            </div>
        </div>
    );
};

export default Items;
