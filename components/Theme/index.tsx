import React from "react";
import cn from "classnames";
import styles from "./Theme.module.sass";
import useDarkMode from "use-dark-mode";
import Icon from "../Icon";

type ThemeProps = {
    className?: string;
    large?: boolean;
};

const Theme = ({ className, large }: ThemeProps) => {
    const darkMode = useDarkMode(false);

    return (
        <label
            className={cn(className, styles.theme, { [styles.large]: large })}
        >
            <input
                className={styles.input}
                checked={darkMode.value}
                onChange={darkMode.toggle}
                type="checkbox"
            />
            <span className={styles.inner}>
                <span className={styles.box}>
                    <Icon name="sun" size="20" />
                    Light
                </span>
                <span className={styles.box}>
                    <Icon name="moon" size="20" />
                    Dark
                </span>
            </span>
        </label>
    );
};

export default Theme;
