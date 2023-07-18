import React from "react";
import cn from "classnames";
import styles from "./About.module.sass";
import Item from "./Item";

import { about } from "../../../constants/about";

type AboutProps = {};

const About = ({}: AboutProps) => {
    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container")}>
                {about.map((x, index) => (
                    <Item item={x} key={index} />
                ))}
            </div>
        </div>
    );
};

export default About;
