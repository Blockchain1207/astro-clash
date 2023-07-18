import cn from "classnames";
import styles from "./Emotion.module.sass";
import { EmotionType } from "../../../../types";
import Image from "../../../Image";

type EmotionProps = {
    className?: string;
    options: EmotionType[];
    value: EmotionType;
    setValue: (emotion: EmotionType) => void;
};

const Emotion = ({ className, options, value, setValue }: EmotionProps) => {
    return (
        <div className={cn(className, styles.wrapper)}>
            <div className={styles.label}>Emotion</div>
            <div className={styles.group}>
                {options.map((x: any, index: number) => (
                    <div
                        className={cn(styles.item, {
                            [styles.active]: x === value,
                        })}
                        onClick={() => setValue(options[index])}
                        key={index}
                    >
                        <div className={styles.preview}>
                            <Image
                                src={x.preview}
                                width={48}
                                height={48}
                                alt={x.title}
                            />
                        </div>

                        <div className={styles.title}>{x.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Emotion;
