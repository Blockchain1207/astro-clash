import React from "react";
import cn from "classnames";
import styles from "./InputFile.module.sass";
import Icon from "../Icon";

type InputFileProps = {
    className?: string;
    value: string;
    onChange: (value: any) => void;
    note?: string;
    min?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
};

const InputFile = ({
    className,
    value,
    onChange,
    note,
    min,
    disabled,
    children,
}: InputFileProps) => {
    return children ? (
        <>
            <input
                className={cn(styles.file, className)}
                type="file"
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
            {children}
        </>
    ) : (
        <div className={cn(styles.container, styles.upload, className)}>
            <div className={styles.details}>
                <Icon
                    className={cn(styles.icon, { [styles.min]: min })}
                    name="upload"
                    size={min ? 40 : 64}
                />
                <div className={cn(min ? "title" : "h6", styles.title)}>
                    Drag and drop to upload
                </div>
                <div className={styles.note}>{note}</div>
            </div>
            <input
                className={styles.file}
                type="file"
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};

export default InputFile;
