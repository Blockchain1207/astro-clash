import React from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Icon from "../../../Icon";
import Image from "../../../Image";

type ItemProps = {
    className?: string;
    item: any;
};

const Item = ({ className, item }: ItemProps) => {
    return (
        <div className={cn(styles.wrapper, className)}>
            <div className={styles.details}>
                <h2 className={cn("h2", styles.title)}>{item.title}</h2>
                <div className={styles.content}>{item.content}</div>
                <div className={styles.list}>
                    {item.list.map((x: string, index: number) => (
                        <div className={styles.item} key={index}>
                            <div className={styles.icon}>
                                <Icon name="check" size={16} />
                            </div>
                            {x}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.preview}>
                <Image
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                    alt={item.image.alt}
                />
            </div>
        </div>
    );
};

export default Item;
