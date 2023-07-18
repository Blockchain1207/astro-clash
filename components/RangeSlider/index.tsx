import { useState } from "react";
import dynamic from "next/dynamic";
import cn from "classnames";
import styles from "./RangeSlider.module.sass";
import Image from "../Image";
import Icon from "../Icon";
import TooltipIcon from "../TooltipIcon";
import { RangeType } from "../../types";

const Range = dynamic(() => import("react-slider"), {
    ssr: false,
});

type RangeProps = {
    className?: string;
    values: RangeType;
    setValue: (value: RangeType) => void;
};

const RangeSlider = ({ className, values, setValue }: RangeProps) => {
    const [rangeValue, setRangevalue] = useState<number>(values.value);

    const handleValue = () => {
        values.value = rangeValue;
        setValue({ ...values });
    };

    return (
        <div
            className={cn(
                styles.wrapper,
                className,
                values.color && styles[values.color]
            )}
        >
            <div className={styles.details}>
                {values.icon && (
                    <Icon name={values.icon} className={styles.icon} />
                )}
                {values.preview && (
                    <div className={styles.preview}>
                        <Image
                            src={values.preview}
                            width={24}
                            height={24}
                            alt={values.label}
                        />
                    </div>
                )}
                <div className={styles.label}>{values.label}</div>
                {values.tooltip && (
                    <TooltipIcon
                        className={styles.tooltip}
                        value={values.tooltip}
                    />
                )}
                <div className={styles.value}>{rangeValue}</div>
            </div>
            <Range
                className={styles.slider}
                thumbClassName={styles.thumb}
                trackClassName={styles.track}
                onChange={(rangeValue: any) => setRangevalue(rangeValue)}
                onAfterChange={handleValue}
                value={rangeValue}
                step={values.step || 1}
                min={values.min || 0}
                max={values.max || 100}
            />
        </div>
    );
};

export default RangeSlider;
