import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./List.module.sass";

import { items } from "../../../constants/faq";

type ListProps = {};

const List = ({}: ListProps) => {
    return (
        <div className={cn("container-md", styles.container)}>
            <h1 className={cn("h1", styles.title)}>
                Frequently asked questions
            </h1>

            <div className={styles.list}>
                {items.map((x, index) => (
                    <div className={styles.item} key={index}>
                        <h6 className={cn("h6", styles.item_title)}>
                            {x.title}
                        </h6>
                        <div className={styles.content}>{x.content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
