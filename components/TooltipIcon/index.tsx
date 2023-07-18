import cn from "classnames";
import Tooltip from "rc-tooltip";
import Icon from "../Icon";
import styles from "./TooltipIcon.module.sass";

type TooltipIconProps = {
    className?: string;
    value: string;
    children?: React.ReactNode;
};

const TooltipIcon = ({ className, value }: TooltipIconProps) => {
    return (
        <Tooltip overlay={value}>
            <div className={cn(styles.tooltip, className)}>
                <Icon name="tooltip" size="20" />
            </div>
        </Tooltip>
    );
};
export default TooltipIcon;
