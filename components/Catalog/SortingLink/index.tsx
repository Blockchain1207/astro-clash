import { useState } from "react";
import styles from "./SortingLink.module.sass";
import cn from "classnames";
import Image from "../../Image";

type SortingLinkProps = {
    item: any;
    index: number;
    number: number;
    setNumber: (value: number) => void;
};

const SortingLink = ({ item, index, number, setNumber }: SortingLinkProps) => {
    const handleClick = (index: number) => {
        setNumber(index);
    };

    return (
        <button
            className={cn(styles.link, {
                [styles.active]: index === number,
            })}
            onClick={() => handleClick(index)}
        >
            <div
                className={styles.preview}
                style={{ backgroundColor: item.color }}
            >
                <Image
                    src={item.image}
                    width={32}
                    height={32}
                    alt="Sorting image"
                />
            </div>
            {item.title}
        </button>
    );
};

export default SortingLink;
