import cn from "classnames";
import Lottie from "react-lottie";
import styles from "./Mouse.module.sass";

import animationData from "../../public/lottie/mouse.json";

type MouseProps = {
    title?: string;
    centered?: boolean;
    className?: string;
};

const Mouse = ({ title, centered, className }: MouseProps) => {
    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <div
            className={cn(
                styles.mouse,
                { [styles.centered]: centered },
                className
            )}
        >
            <div className={styles.icon}>
                <Lottie options={lottieOptions} height={24} width={24} />
            </div>
            <div className={styles.title}>{title}</div>
        </div>
    );
};

export default Mouse;
