import { useState } from "react";
import styles from "./Parameters.module.sass";
import cn from "classnames";
import Image from "../../Image";
import Icon from "../../Icon";

type ParametersType = {
    label: string;
    title?: string;
    content?: string;
    image?: string;
    icon?: string;
    color?: string;
    avatars?: Array<string>;
};

type ParametersProps = {
    className?: string;
    parameters: ParametersType[];
};

const Parameters = ({ parameters, className }: ParametersProps) => (
    <div className={cn(styles.parameters, className)}>
        {parameters.map((parameter, index) => (
            <div className={styles.parameter} key={index}>
                <div className={styles.label}>{parameter.label}</div>
                {parameter.avatars ? (
                    <div className={styles.avatars}>
                        {parameter.avatars.map((avatar, index) => (
                            <div className={styles.avatar} key={index}>
                                <Image
                                    src={avatar}
                                    width={48}
                                    height={48}
                                    alt="Avatar"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={styles.line}>
                        <div
                            className={styles.preview}
                            style={{ backgroundColor: parameter.color }}
                        >
                            {parameter.image && (
                                <Image
                                    src={parameter.image}
                                    width={48}
                                    height={48}
                                    alt="Avatar"
                                />
                            )}
                            {parameter.icon && <Icon name={parameter.icon} />}
                        </div>
                        <div className={styles.details}>
                            <div className={styles.title}>
                                {parameter.title}
                            </div>
                            <div className={styles.content}>
                                {parameter.content}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        ))}
    </div>
);

export default Parameters;
