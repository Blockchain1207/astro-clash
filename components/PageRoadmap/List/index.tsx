import React from "react";
import cn from "classnames";
import styles from "./List.module.sass";

import { roadmap } from "../../../constants/roadmap";
import Image from "../../Image";

type ListProps = {
    className?: string;
};

const List = ({ className }: ListProps) => {
    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container-md", styles.wrapper)}>
                {roadmap.map((x, index) => (
                    <div className={styles.item} key={index}>
                        <div
                            className={styles.line}
                            style={{ borderColor: x.color }}
                        ></div>
                        <div className={styles.details}>
                            <h3 className={cn("h3", styles.title)}>
                                {x.title}
                            </h3>
                            <div className={styles.content}>{x.content}</div>
                        </div>
                        <div className={styles.preview}>
                            <Image
                                src={x.image.src}
                                width={x.image.width}
                                height={x.image.height}
                                alt={x.image.alt}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
