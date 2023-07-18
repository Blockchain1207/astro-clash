import React from "react";
import cn from "classnames";
import styles from "./Page404.module.sass";
import Link from "next/link";
import Image from "../Image";

type Page404Props = {};

const Page404 = ({}: Page404Props) => {
    return (
        <div className={cn("container", styles.container)}>
            <div className={styles.preview}>
                <Image
                    src="/images/content/characters/image-9.png"
                    width="500"
                    height="500"
                    alt="Spaceship"
                />
            </div>

            <h1 className={styles.title}>404</h1>
            <h2 className={styles.description}>Page not found</h2>

            <Link href="/">
                <a className={cn("button")}>Go to Homepage</a>
            </Link>
        </div>
    );
};

export default Page404;
