import React from "react";
import cn from "classnames";
import styles from "./Card.module.sass";
import Image from "../../../Image";
import Link from "next/link";

type CardProps = {
    className?: string;
    item: any;
};

const Card = ({ className, item }: CardProps) => {
    return (
        <Link href={item.url}>
            <a className={cn(styles.card, className)}>
                <div
                    className={styles.preview}
                    style={{ backgroundColor: item.image.color }}
                >
                    <div className={styles.image}>
                        <Image
                            src={item.image.src}
                            height={item.image.height}
                            width={item.image.width}
                            alt={item.image.alt}
                        />
                    </div>
                </div>
                <div className={styles.thumbnails}>
                    {item.items.map((x: any, index: number) => (
                        <div
                            className={styles.thumbnail}
                            style={{ backgroundColor: x.color }}
                            key={index + Date.now()}
                        >
                            <div className={styles.image}>
                                <Image
                                    src={x.src}
                                    height={x.height}
                                    width={x.width}
                                    alt={x.alt}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.details}>
                    <div className={cn("title", styles.title)}>
                        {item.title}
                    </div>
                    <div className={styles.count}>{item.count}</div>
                </div>
            </a>
        </Link>
    );
};

export default Card;
