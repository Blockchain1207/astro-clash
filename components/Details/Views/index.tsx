import styles from "./Views.module.sass";
import cn from "classnames";
import Link from "next/link";
import Image from "../../Image";

type ViewLinksType = {
    title: string;
    image: string;
    url: string;
};

type ViewsProps = {
    className?: string;
    links: ViewLinksType[];
};

const Views = ({ className, links }: ViewsProps) => (
    <div className={cn(styles.links, className)}>
        {links.map((link, index) => (
            <Link key={index} href={link.url}>
                <a className={styles.link}>
                    <div className={styles.logo}>
                        <Image
                            src={link.image}
                            width={24}
                            height={24}
                            alt="Logo"
                        />
                    </div>
                    {link.title}
                </a>
            </Link>
        ))}
    </div>
);

export default Views;
