import React from "react";
import cn from "classnames";
import styles from "./Meet.module.sass";
import Items from "./Item";

import { meet } from "../../../constants/meetTheTeam";

type MeetProps = {
    className?: string;
};

const Meet = ({ className }: MeetProps) => {
    return (
        <div className={cn("section")}>
            <div className={cn("container", styles.container)}>
                <h2 className={cn("h2", styles.title)}>Meet the team</h2>
                <div className={styles.list}>
                    {meet.map((x, index) => (
                        <Items item={x} className={styles.item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Meet;
