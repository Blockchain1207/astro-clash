import Image from "../../Image";
import Link from "next/link";
import cn from "classnames";
import styles from "./Protect.module.sass";

import { images, protect } from "../../../constants/protect";

type ProtectProps = {};

const Protect = ({}: ProtectProps) => (
    <div className={styles.section}>
        <div className={cn("container-md", styles.container)}>
            <div className={styles.images}>
                {images.map((image, index) => (
                    <div className={styles.preview} key={index}>
                        <Image
                            src={image.src}
                            width={image.width}
                            height={image.height}
                            alt={image.alt}
                        />
                    </div>
                ))}
            </div>
            <div className={cn("h1", styles.title)}>
                Protect your planet. Make money.
            </div>
            <div className={styles.list}>
                {protect.map((x, index) => (
                    <div className={styles.item} key={index}>
                        <div className={cn("hero", styles.number)}>
                            {index + 1}
                        </div>
                        <div className={styles.content}>{x}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Protect;
