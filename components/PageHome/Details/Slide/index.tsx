import styles from "./Slide.module.sass";
import cn from "classnames";
import Image from "../../../Image";

type SlideProps = {
    className?: string;
    titles: Array<string>;
    index: string;
    subtitle: string;
    content: string;
    imageClassName?: string;
    imageSrc: string;
    imageWidth: string;
    imageHeight: string;
    children: any;
};

const Slide = ({
    className,
    titles,
    index,
    subtitle,
    content,
    imageClassName,
    imageSrc,
    imageWidth,
    imageHeight,
    children,
}: SlideProps) => (
    <div className={cn(styles.slide, className)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.head}>
                {titles.map((title, index) => (
                    <div className={cn("h1", styles.title)} key={index}>
                        {title}
                    </div>
                ))}
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={cn("h3", styles.subtitle)}>{subtitle}</div>
                    <div className={styles.content}>{content}</div>
                    <div className={styles.pagination}>
                        <span>0{index}</span>/ 03
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={cn(styles.preview, imageClassName)}>
                        <Image
                            src={imageSrc}
                            width={imageWidth}
                            height={imageHeight}
                            alt="Background"
                        />
                    </div>
                </div>
                <div className={styles.col}>{children}</div>
            </div>
        </div>
    </div>
);

export default Slide;
