import React from "react";
import cn from "classnames";
import styles from "./Card.module.sass";
import Image from "../../Image";
import Icon from "../../Icon";
import { ItemsSlideType } from "../../../types";

import { numberWithCommas } from "../../../utils";

type CardProps = {
    className?: string;
    value?: ItemsSlideType;
    setValue: (value: ItemsSlideType) => void;
    item: ItemsSlideType;
};

const Card = ({ className, value, setValue, item }: CardProps) => {
    return (
        <div
            className={cn(styles.card, className, {
                [styles.checked]: value === item,
            })}
            onClick={() => setValue(item)}
        >
            <div className={styles.check}>
                <Icon name="checkbox" size={18} />
            </div>
            <div className={styles.preview}>
                <Image
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                    alt={item.title}
                />
            </div>
            <div className={styles.details}>
                <div>
                    <div className={cn("h6", styles.title)}>{item.title}</div>
                    <div className={styles.location}>
                        <Icon name="location" />
                        {item.location}
                    </div>
                </div>
                <div>
                    <div className={styles.crypto}>{item.crypto}</div>
                    <div className={styles.price}>
                        ${numberWithCommas(item.price)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
