import { useState, useEffect, useRef } from "react";
import cn from "classnames";
import styles from "./DropdownItem.module.sass";
import Image from "../Image";
import Icon from "../Icon";
import { DropdownItemType } from "../../types";

type DropdownProps = {
    className?: string;
    label?: string;
    value: DropdownItemType;
    options: DropdownItemType[];
    setValue: (value: DropdownItemType) => void;
};

const DropdownItem = ({
    className,
    label,
    value,
    options,
    setValue,
}: DropdownProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    const dropdownWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: any): void {
            if (
                dropdownWrapper.current &&
                !dropdownWrapper.current.contains(event.target)
            )
                setVisible(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div
            className={cn(styles.wrapper, className, {
                [styles.active]: visible,
            })}
            onClick={() => setVisible(!visible)}
            ref={dropdownWrapper}
        >
            <div className={styles.label}>{label}</div>
            <div className={styles.head}>
                <div className={styles.item}>
                    <div
                        className={styles.preview}
                        style={{ backgroundColor: value.background }}
                    >
                        <Image
                            src={value.image}
                            width={48}
                            height={48}
                            alt={value.title}
                        />
                    </div>
                    <div className={styles.details}>
                        <div className={styles.title}>{value.title}</div>
                        <div className={styles.type}>{value.type}</div>
                    </div>
                    <Icon
                        className={cn(styles.icon, styles.chevron)}
                        name="chevron-down"
                    />
                </div>
            </div>
            <div className={styles.body}>
                {options.map((x: any, index: number) => (
                    <div
                        className={cn(styles.item, {
                            [styles.selected]: x === value,
                        })}
                        key={index}
                        onClick={() => setValue(options[index])}
                    >
                        <div
                            className={styles.preview}
                            style={{ backgroundColor: x.background }}
                        >
                            <Image
                                src={x.image}
                                width={48}
                                height={48}
                                alt={x.title}
                            />
                        </div>
                        <div className={styles.details}>
                            <div className={styles.title}>{x.title}</div>
                            <div className={styles.type}>{x.type}</div>
                        </div>
                        <Icon
                            className={cn(styles.icon, styles.select)}
                            name="check"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropdownItem;
