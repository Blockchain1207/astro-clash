import React, { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Icon from "../../Icon";

type ItemProps = {
    value: any;
    index: number;
};

const Item = ({ value, index }: ItemProps) => {
    const [visible, setVidible] = useState<boolean>(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.head} onClick={() => setVidible(!visible)}>
                <div className={styles.count}>{index + 1}</div>
                <div className={cn("h5", styles.title)}>{value.title}</div>
                <button
                    className={cn(styles.dropdown, {
                        [styles.active]: visible,
                    })}
                >
                    <Icon name="plus" className={styles.icon} />
                </button>
            </div>
            <div
                className={cn(styles.body, {
                    [styles.active]: visible,
                    [styles.gray]: value.gray,
                })}
            >
                {value.content}
            </div>
        </div>
    );
};

export default Item;
