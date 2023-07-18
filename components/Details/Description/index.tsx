import styles from "./Description.module.sass";
import cn from "classnames";

import { numberWithCommas } from "../../../utils";

type StatusType = {
    color: string;
    title: string;
};

type DescriptionProps = {
    className?: string;
    classNameDetails?: string;
    title: string;
    code: string;
    status?: StatusType[];
    crypto: string;
    price: number;
    small?: boolean;
};

const Description = ({
    className,
    title,
    code,
    status,
    crypto,
    price,
    small,
    classNameDetails,
}: DescriptionProps) => (
    <div className={cn(styles.description, className)}>
        <div
            className={cn(
                styles.details,
                {
                    [styles.small]: small,
                },
                classNameDetails
            )}
        >
            <div className={styles.line}>
                <div className={styles.code}>#{code}</div>
                {status && (
                    <div className={styles.labels}>
                        {status.map((x, index) => (
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
            </div>
            <h1 className={cn(!small ? "h1" : "h3", styles.title)}>{title}</h1>
        </div>
        <div className={styles.prices}>
            <div className={cn("h4", styles.crypto)}>{crypto}</div>
            <div className={styles.price}>$ {numberWithCommas(price)}</div>
        </div>
    </div>
);

export default Description;
