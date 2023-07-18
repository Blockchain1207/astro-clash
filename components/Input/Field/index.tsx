import React from "react";
import cn from "classnames";
import styles from "./Field.module.sass";

type FieldProps = {
    className?: string;
    label?: string;
    large?: boolean;
    children: React.ReactNode;
};

const Field = ({ className, label, large, children }: FieldProps) => {
    return (
        <div className={cn(styles.field, className)}>
            <div className={cn(styles.label, { [styles.large]: large })}>
                {label}
            </div>
            <div className={styles.inner}>{children}</div>
        </div>
    );
};

export default Field;
