import { useState } from "react";
import { default as NextImage, ImageProps } from "next/image";
import cn from "classnames";
import styles from "./Image.module.sass";

const Image = ({ className, ...props }: ImageProps) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <NextImage
            className={cn(styles.image, { [styles.loaded]: loaded }, className)}
            onLoadingComplete={() => setLoaded(true)}
            quality={100}
            {...props}
        />
    );
};

export default Image;
