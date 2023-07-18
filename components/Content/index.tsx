import styles from "./Content.module.sass";
import cn from "classnames";
import Icon from "../Icon";

type ContentProps = {
    className?: string;
    children: any;
    moreButton?: boolean;
};

const Content = ({ className, children, moreButton }: ContentProps) => (
    <div className={cn(styles.content, className)}>
        {children}
        {moreButton && (
            <button className={styles.more}>
                <span>Learn more</span>
                <Icon name="chevron-down" />
            </button>
        )}
    </div>
);

export default Content;
