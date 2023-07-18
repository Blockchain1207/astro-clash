import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import Tooltip from "rc-tooltip";
import styles from "./Back.module.sass";
import cn from "classnames";
import Icon from "../Icon";

type BackProps = {
    className?: string;
    url?: string;
    tooltip: string;
    placementTooltip?: string;
    onAction?: (e: any) => void;
    dark?: boolean;
};

const Back = ({
    className,
    url,
    onAction,
    tooltip,
    placementTooltip,
    dark,
}: BackProps) => {
    const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });

    return (
        <Tooltip
            placement={placementTooltip || "right"}
            overlay={tooltip}
            trigger={isTablet ? [] : ["hover"]}
            overlayClassName={dark ? "dark" : ""}
        >
            <div className={cn(styles.back, className)}>
                {url ? (
                    <Link href={url}>
                        <a
                            className={cn(styles.button, {
                                [styles.dark]: dark,
                            })}
                        >
                            <Icon name="close" />
                        </a>
                    </Link>
                ) : (
                    <button
                        className={cn(styles.button, { [styles.dark]: dark })}
                        onClick={onAction}
                    >
                        <Icon name="close" />
                    </button>
                )}
            </div>
        </Tooltip>
    );
};

export default Back;
