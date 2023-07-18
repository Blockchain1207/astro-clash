import React from "react";
import cn from "classnames";
import Icon from "../../../Icon";
import styles from "./Details.module.sass";

type DetailsProps = {
    className?: string;
    forModal?: boolean;
    value: any;
};

const Details = ({ className, forModal, value }: DetailsProps) => {
    return (
        <div className={cn(styles.container, className)}>
            <div className={styles.labels}>
                {value.labels.map((label: any, index: number) => (
                    <div
                        className={cn(
                            {
                                "label-purple": label.color === "purple",
                            },
                            {
                                "label-yellow": label.color === "yellow",
                            },
                            {
                                "label-green": label.color === "green",
                            },
                            styles.label
                        )}
                        key={index}
                    >
                        {label.title}
                    </div>
                ))}
            </div>
            <div
                className={cn("h1", styles.title, { [styles.modal]: forModal })}
            >
                {!forModal && "Meet "}
                {value.title}
            </div>
            <div className={styles.location}>
                <Icon name="location" />
                {value.location}
            </div>
        </div>
    );
};

export default Details;
