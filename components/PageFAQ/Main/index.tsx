import React from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "../../Image";

type MainProps = {};

const Main = ({}: MainProps) => {
    return (
        <div className={cn("container-xl", styles.container)}>
            <div className={styles.preview}>
                <Image
                    src="/images/content/bg-faq.png"
                    width={1280}
                    height={710}
                    alt="Frequently asked questions"
                />
            </div>
        </div>
    );
};

export default Main;
