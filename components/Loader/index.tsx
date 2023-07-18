import React from "react";
import cn from "classnames";
import styles from "./Loader.module.sass";
import Icon from "../Icon";

type LoaderProps = {
    className?: string;
    white?: boolean;
    spinner?: number;
};

const Loader = ({ className, white, spinner }: LoaderProps) => {
    return (
        <>
            {spinner ? (
                <Icon
                    name="spinner"
                    size={spinner}
                    className={cn(styles.spinner, className)}
                />
            ) : (
                <div
                    className={cn(styles.loader, className, {
                        [styles.loaderWhite]: white,
                    })}
                ></div>
            )}
        </>
    );
};

export default Loader;
