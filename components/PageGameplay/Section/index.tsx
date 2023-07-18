import styles from "./Section.module.sass";
import cn from "classnames";
import Image from "../../Image";

type SectionProps = {
    className?: string;
    item: any;
};

const Section = ({ className, item }: SectionProps) => (
    <div className={cn("container-md", styles.container, className)}>
        <div className={styles.wrap}>
            <h2 className={cn("h2", styles.title)}>{item.title}</h2>
            <div className={styles.content}>{item.content}</div>
        </div>
        <div className={styles.preview}>
            <Image src={item.image} width={512} height={512} alt="Card" />
        </div>
    </div>
);

export default Section;
