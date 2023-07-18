import React, { forwardRef } from "react";
import styles from "./InfoColumns.module.sass";
import cn from "classnames";
import Image from "../Image";

import { InfoColumnsType } from "../../types";

type InfoColumnsProps = {
    className?: string;
    title: string;
    items: InfoColumnsType[];
};

const InfoColumns = (
    { className, title, items }: InfoColumnsProps,
    ref: React.ForwardedRef<HTMLDivElement>
) => (
    <div className={cn("section", styles.section, className)} ref={ref}>
        <div className="container-md">
            <div className={styles.head}>
                <h2 className={cn("h2", styles.title)}>{title}</h2>
                <div className={styles.info}>
                    Incidunt aut sapiente similique recusandae. Veniam aliquid
                    est rerum dolores enim
                </div>
            </div>
            <div className={styles.list}>
                {items.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={styles.preview}>
                            <Image
                                src={item.image}
                                width={300}
                                height={230}
                                alt="Image"
                                layout="responsive"
                            />
                        </div>
                        <div className={cn("h6", styles.subtitle)}>
                            {item.title}
                        </div>
                        <div className={styles.content}>{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default forwardRef(InfoColumns);
