import { useState } from "react";
import cn from "classnames";
import styles from "./Dropdown.module.sass";
import Icon from "../Icon";
import OutsideClickHandler from "react-outside-click-handler";

type DropdownProps = {
    className?: string;
    icon?: string;
    value: any;
    setValue: (value: any) => void;
    options: any[];
};

const Dropdown = ({
    className,
    icon,
    value,
    setValue,
    options,
}: DropdownProps) => {
    const [visible, setVisible] = useState<boolean>(false);

    const handleClick = (x: any) => {
        setVisible(!visible);
        setValue(x);
    };

    return (
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
            <div
                className={cn(className, styles.wrapper, {
                    [styles.visible]: visible,
                })}
            >
                <div
                    className={styles.header}
                    onClick={() => setVisible(!visible)}
                >
                    {icon && (
                        <Icon
                            name={icon}
                            className={cn(styles.custom, styles.icon)}
                        />
                    )}
                    {value}
                    <Icon
                        name="chevron-down"
                        className={cn(styles.chevron, styles.icon)}
                    />
                </div>
                <div className={styles.body}>
                    {options.map((x, index) => (
                        <div
                            className={styles.item}
                            onClick={() => handleClick(x)}
                            key={index}
                        >
                            {x}
                        </div>
                    ))}
                </div>
            </div>
        </OutsideClickHandler>
    );
};

export default Dropdown;
