import { useState } from "react";
import Link from "next/link";
import styles from "./Card.module.sass";
import cn from "classnames";
import Image from "../Image";
import Icon from "../Icon";
import Favorite from "../Favorite";
import ModalSale from "../ModalSale";

import { numberWithCommas } from "../../utils";

type CardProps = {
    className?: string;
    item: any;
    bigPreview?: boolean;
    saleItem?: boolean;
};

const Card = ({ className, item, bigPreview, saleItem }: CardProps) => {
    const [visibleModalSale, setVisibleModalSale] = useState<boolean>(false);

    return (
        <div className={cn(styles.card, className)}>
            <div
                className={cn(styles.preview, {
                    [styles.preview_big]: bigPreview,
                })}
                style={{ backgroundColor: item.background || "#EBE3D9" }}
            >
                <div className={styles.image}>
                    <Image
                        src={item.image.src}
                        width={item.image.width}
                        height={item.image.height}
                        alt={item.image.alt}
                    />
                </div>
                {item.status && (
                    <div className={styles.labels}>
                        {item.status.map((x: any, index: number) => (
                            <div
                                className={cn(
                                    { "status-red": x.color === "red" },
                                    { "status-green": x.color === "green" },
                                    { "status-purple": x.color === "purple" },
                                    styles.status
                                )}
                                key={index}
                            >
                                {x.title}
                            </div>
                        ))}
                    </div>
                )}
                <div className={styles.details}>
                    <Favorite className={styles.favorite} />
                    <Link href={item.url}>
                        <a
                            className={cn(
                                "button-stroke",
                                styles.button,
                                styles.buttonDetails
                            )}
                        >
                            View detail
                        </a>
                    </Link>
                    {saleItem && (
                        <>
                            <button
                                onClick={() => setVisibleModalSale(true)}
                                className={cn("button", styles.button)}
                            >
                                Put on sale
                            </button>
                            <ModalSale
                                visibleModal={visibleModalSale}
                                setVisibleModal={() =>
                                    setVisibleModalSale(false)
                                }
                            />
                        </>
                    )}
                </div>
            </div>
            <div className={cn("details_bottom", styles.details_bottom)}>
                <div className={styles.stat}>
                    <div className={cn("label-purple", styles.code)}>
                        #{item.code}
                    </div>
                    <div className={styles.crypto}>{item.crypto}</div>
                </div>
                <div className={styles.info}>
                    <div className={cn("title", styles.title)}>
                        {item.title}
                    </div>
                    <div className={styles.price}>
                        ${numberWithCommas(item.price)}
                    </div>
                </div>
                {item.location && (
                    <div className={styles.location}>
                        <Icon name="place" size="20" />
                        {item.location}
                        <span>: {item.coordinates}</span>
                    </div>
                )}
                {item.level && (
                    <div className={styles.foot}>
                        <div className={styles.level}>
                            <Icon name="level" size="20" />
                            Level requirement: <span>{item.level}</span>
                        </div>
                        {item.avatars && (
                            <div className={styles.avatars}>
                                {item.avatars.map(
                                    (avatar: string, index: number) => (
                                        <div
                                            className={styles.avatar}
                                            key={index}
                                        >
                                            <Image
                                                src={avatar}
                                                width="24"
                                                height="24"
                                                alt="Avatar"
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
