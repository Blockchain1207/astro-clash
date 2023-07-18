import React from "react";
import cn from "classnames";
import Image from "../Image";
import styles from "./PreviewLoader.module.sass";

type PreviewLoaderProps = {
    className?: string;
    srcImage: string;
    min?: boolean;
    loaded?: boolean;
};

const SVGLoader = ({ loaded, min }: { loaded?: boolean; min?: boolean }) => (
    <svg className={cn({ [styles.min]: min })}>
        <defs>
            <radialGradient
                id="preview_loader"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="rotate(92.189 20.447 29.794) scale(157.115)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset=".157" stopColor="#FF7E62" />
                <stop offset=".753" stopColor="#A56FFE" />
            </radialGradient>
        </defs>
        <circle
            className={cn(styles.circle, {
                [styles.min]: min,
                [styles.loaded]: loaded,
            })}
            r={min ? 48.7 : 60}
            cx="50%"
            cy="50%"
            strokeLinecap="round"
            stroke="url(#preview_loader)"
        ></circle>
    </svg>
);

const PreviewLoader = ({
    className,
    srcImage,
    loaded,
    min,
}: PreviewLoaderProps) => {
    return (
        <div className={cn(styles.wrapper, className, { [styles.min]: min })}>
            <div
                className={cn(styles.loader, {
                    [styles.loaded]: loaded,
                })}
            >
                <SVGLoader loaded={loaded} min={min} />
            </div>
            <div className={styles.preview}>
                <Image
                    src={srcImage}
                    height={104}
                    width={104}
                    alt="Processing"
                />
            </div>
        </div>
    );
};

export default PreviewLoader;
