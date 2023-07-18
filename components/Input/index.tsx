import React, { Children } from "react";
import cn from "classnames";
import styles from "./Input.module.sass";
import { chdir } from "process";

type InputProps = {
    className?: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    success?: string;
    arobase?: boolean;
    small?: boolean;
};

const Input = ({
    className,
    type,
    value,
    onChange,
    placeholder,
    disabled,
    required,
    error,
    success,
    arobase,
    small,
}: InputProps) => {
    return (
        <div className={cn(styles.wrapper)}>
            {arobase && <div className={styles.arobase_icon}>@</div>}
            <input
                className={cn(
                    styles.input,
                    { [styles.arobase]: arobase },
                    { [styles.small]: small },
                    className
                )}
                type={type || "text"}
                value={value}
                onChange={(e: any) => onChange(e.target.value)}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
            />
            {error && (
                <div className={cn(styles.notice, styles.error)}>{error}</div>
            )}
            {success && (
                <div className={cn(styles.notice, styles.success)}>
                    {success}
                </div>
            )}
        </div>
    );
};

export default Input;
