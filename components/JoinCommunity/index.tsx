import cn from "classnames";
import styles from "./JoinCommunity.module.sass";
import Image from "../Image";
import Icon from "../Icon";

import {
    SocialsTitle,
    SocialsList,
    SocialsDescription,
} from "../../constants/socials";

type JoinCommunityProps = {
    className?: string;
};

const JoinCommunity = ({ className }: JoinCommunityProps) => (
    <div className={cn(className, styles.join)}>
        <div className={cn("container-xl", styles.container)}>
            <div className={styles.inner}>
                <div className={styles.preview}>
                    <Image
                        src="/images/content/bg-join.jpg"
                        layout="fill"
                        alt="Background"
                        objectFit="cover"
                        sizes="(max-width: 1259px) 944px"
                    />
                </div>
                <div className={styles.wrap}>
                    <h2 className={cn("h1", styles.title)}>{SocialsTitle}</h2>
                    <h6 className={styles.description}>{SocialsDescription}</h6>
                    <div className={styles.socials}>
                        {SocialsList.map((social, index) => (
                            <a
                                href={social.url}
                                className={styles.social}
                                target="_blank"
                                rel="noreferrer"
                                key={index}
                            >
                                <Icon name={social.icon} size="18" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default JoinCommunity;
