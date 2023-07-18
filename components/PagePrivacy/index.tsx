import React from "react";
import cn from "classnames";
import styles from "./PagePrivacy.module.sass";
import Icon from "../Icon";
import Link from "next/link";

import { items } from "../../constants/privacy";
import Item from "./Item";

type PagePrivacyProps = {
    className?: string;
};

const PagePrivacy = ({ className }: PagePrivacyProps) => {
    return (
        <div className={cn("section-main", styles.main)}>
            <div className={cn("container-xs", styles.container)}>
                <div className={cn(styles.section)}>
                    <h1 className={cn("hero", styles.title)}>Privacy notice</h1>
                    <div className={cn("h6", styles.date)}>
                        Updated March 25, 2022
                    </div>
                </div>
                <div className={cn(styles.section, styles.content)}>
                    <div className={styles.note}>
                        <p>
                            Praesentium in aspernatur quae ut impedit
                            consequatur quo. Ipsam temporibus blanditiis
                            pariatur eveniet accusamus temporibus. Id dolores
                            earum eum qui. Et est ipsa adipisci iste. Cum
                            officiis sed beatae aut in necessitatibus est sequi.
                        </p>
                        <p>
                            Debitis qui ad illo magnam ut. Et delectus vel sed
                            iure. Aut illo modi.
                        </p>
                        <p>
                            Ut perspiciatis repudiandae asperiores in
                            blanditiis. Assumenda atque quia. Cumque iusto
                            voluptatibus sapiente ut ipsum. Dolor sequi numquam
                            quis commodi sunt et provident fugit eius.
                        </p>
                    </div>
                    <Link href="/">
                        <a className={styles.download}>
                            <Icon name="download" className={styles.icon} />
                            Download a copy of this Privacy Policy (PDF)
                        </a>
                    </Link>
                </div>
                <div className={cn(styles.section, styles.content)}>
                    {items.map((x, index) => (
                        <Item value={x} index={index} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PagePrivacy;
