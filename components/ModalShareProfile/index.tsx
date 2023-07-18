import { useState } from "react";
import cn from "classnames";
import styles from "./ModalShareProfile.module.sass";
import Modal from "../Modal";
import Icon from "../Icon";
import Input from "../Input";
import { useMediaQuery } from "react-responsive";

import { hexToRgbA } from "../../utils";

type ModalShareProfileProps = {
    visibleModal: boolean;
    setVisibleModal: (e: boolean) => void;
};

const links = [
    {
        title: "Discord",
        url: "#",
        icon: "discord",
        color: "#5866F2",
    },
    {
        title: "Twitter",
        url: "https://twitter.com/ui8",
        icon: "twitter",
        color: "#1EA1F1",
    },
    {
        title: "Reddit",
        url: "#",
        icon: "reddit",
        color: "#FE4500",
    },
    {
        title: "Telegram",
        url: "#",
        icon: "telegram",
        color: "#3290EC",
    },
    {
        title: "Facebook",
        url: "https://www.facebook.com/ui8.net/",
        icon: "facebook",
        color: "#1B74E3",
    },
];

const ModalShareProfile = ({
    visibleModal,
    setVisibleModal,
}: ModalShareProfileProps) => {
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const [link, setLink] = useState<string>(
        "https://astro.ui8.net/profile/jacebed"
    );

    return (
        <Modal
            size={!isMobile ? "large" : "small"}
            visible={visibleModal}
            onClose={() => setVisibleModal(false)}
        >
            <div className={styles.wrapper}>
                <h6 className={cn("h6", styles.title)}>
                    Share this profile with your social community
                </h6>
                <div className={styles.links}>
                    {links.map((x, index) => (
                        <a
                            href={x.url}
                            className={styles.social}
                            target="_blank"
                            rel="noreferrer"
                            key={index}
                            style={{ backgroundColor: hexToRgbA(x.color, 0.2) }}
                        >
                            <Icon name={x.icon} size="20" fill={x.color} />
                        </a>
                    ))}
                </div>
                <div className={styles.note}>Or copy link</div>
                <div className={styles.copy}>
                    <Icon name="link" />
                    <Input
                        className={styles.input}
                        value={link}
                        onChange={setLink}
                        disabled
                        small
                    />
                    <button className={cn("button-sm", styles.button)}>
                        Copy
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ModalShareProfile;
