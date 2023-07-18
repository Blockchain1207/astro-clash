import { useState } from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Cover from "../../Profile/Cover";
import Icon from "../../Icon";
import Image from "../../Image";
import Tooltip from "rc-tooltip";
import ModalChangeAvatar from "../../ModalChangeAvatar";

import { formatWalletAddress } from "../../../utils";
import ModalShareProfile from "../../ModalShareProfile";

type MainProps = {};

const Main = ({}: MainProps) => {
    const [modalShare, setModalShare] = useState<boolean>(false);
    const [modalAvatar, setModalAvatar] = useState<boolean>(false);
    const [upload, setUpload] = useState<boolean>(false);
    const [file, setFile] = useState<string>("");
    const wallet: string = "hk980io73bz880hk980io73bz880";

    return (
        <div className={cn("container-lg", styles.container)}>
            <div className={styles.wrapper}>
                <Cover
                    upload={upload}
                    setUpload={setUpload}
                    value={file}
                    onChange={setFile}
                    cover="/images/content/profile-cover.png"
                />
                <div className={styles.profile}>
                    <div className={styles.avatar}>
                        <div
                            className={styles.upload}
                            onClick={() => setModalAvatar(true)}
                        >
                            <Tooltip overlay="Change avatar">
                                <div>
                                    <Icon name="camera" size={32} />
                                </div>
                            </Tooltip>
                        </div>

                        <ModalChangeAvatar
                            visibleModal={modalAvatar}
                            setVisibleModal={() => setModalAvatar(false)}
                        />

                        <Image
                            src="/images/content/avatar.png"
                            width={142}
                            height={142}
                            alt="Jace Bednar"
                        />
                    </div>
                    <div className={styles.details}>
                        <div className={cn("h5", styles.name)}>Jace Bednar</div>
                        <div className={styles.code}>
                            <div>{formatWalletAddress(wallet, 14, 14)}</div>
                            <button className={styles.copy}>
                                <Icon name="copy" size="20" />
                            </button>
                        </div>
                    </div>

                    <button
                        className={cn("button-stroke button-sm", styles.share)}
                        onClick={() => setModalShare(true)}
                    >
                        <Icon name="share" size="16" />
                        Share profile
                    </button>
                    <ModalShareProfile
                        visibleModal={modalShare}
                        setVisibleModal={() => setModalShare(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;
