import React from "react";
import cn from "classnames";
import styles from "./Form.module.sass";
import Icon from "../Icon";

type FormProps = {
    className?: string;
    classFormInput?: string;
    onSubmit: () => void;
    placeholder?: string;
    value: string;
    setValue: any;
    type: string;
    name: string;
    icon: string;
    big?: boolean;
};

const Form = ({
    className,
    classFormInput,
    onSubmit,
    placeholder,
    value,
    setValue,
    type,
    name,
    icon,
    big,
}: FormProps) => {
    return (
        <form
            className={cn(styles.form, { [styles.formBig]: big }, className)}
            action=""
            onSubmit={onSubmit}
        >
            <input
                className={cn(styles.input, classFormInput)}
                type={type}
                value={value}
                onChange={(e: any) => setValue(e.target.value)}
                name={name}
                placeholder={placeholder}
                required
            />
            <button className={styles.result}>
                <Icon name={icon} />
            </button>
        </form>
    );
};

export default Form;
