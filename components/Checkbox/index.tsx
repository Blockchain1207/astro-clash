import { useState } from "react";
import cn from "classnames";
import Icon from "../Icon";
import TooltipIcon from "../TooltipIcon";
import styles from "./Checkbox.module.sass";

type CheckboxProps = {
    className?: string;
    value: boolean;
    setValue: (value: boolean) => void;
    label?: string;
    tooltip?: string;
    large?: boolean;
};

const Checkbox = ({
    className,
    value,
    setValue,
    label,
    tooltip,
    large,
}: CheckboxProps) => {
    return (
        <div className={cn(className, styles.wrapper)}>
            <label className={styles.checkbox}>
                <input
                    className={styles.input}
                    checked={value}
                    onChange={() => setValue(!value)}
                    type="checkbox"
                />
                <span className={cn(styles.tick, { [styles.large]: large })}>
                    <Icon
                        name={large ? "check" : "checkbox"}
                        size={large ? 24 : 12}
                        className={styles.icon}
                    />
                </span>
                {label && <span className={styles.label}>{label}</span>}
            </label>
            {tooltip && (
                <TooltipIcon className={styles.tooltip} value={tooltip} />
            )}
        </div>
    );
};

export default Checkbox;
