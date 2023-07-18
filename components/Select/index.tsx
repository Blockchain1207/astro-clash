import { useState } from "react";
import cn from "classnames";
// import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Select.module.sass";
import Icon from "../Icon";

type OptionType = {
    title: string;
    value: string;
};

type SelectProps = {
    className?: string;
    title?: string;
    value: string;
    onChange: (value: string) => void;
    options: OptionType[];
};

const Select = ({
    className,
    title,
    value,
    onChange,
    options,
}: SelectProps) => {
    const [visible, setVisible] = useState<boolean>(false);

    const activeOption = options.filter((option) => option.value === value);

    const handleChange = (value: string) => {
        onChange(value);
        setVisible(false);
    };
    return (
        <></>
        // <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
        //     <div className={cn(styles.select, className)}>
        //         <button
        //             className={cn(styles.toggle, { [styles.active]: visible })}
        //             onClick={() => setVisible(!visible)}
        //             type="button"
        //         >
        //             {activeOption.length > 0 ? activeOption[0].title : title}
        //             <Icon name="chevron-down" />
        //         </button>
        //         {visible && (
        //             <div className={styles.dropdown}>
        //                 {[
        //                     options.map((option, index) => (
        //                         <button
        //                             className={cn(styles.option, {
        //                                 [styles.active]: value === option.value,
        //                             })}
        //                             onClick={() => handleChange(option.value)}
        //                             type="button"
        //                             key={index}
        //                         >
        //                             {option.title}
        //                         </button>
        //                     )),
        //                 ]}
        //             </div>
        //         )}
        //     </div>
        // </OutsideClickHandler>
    );
};

export default Select;
