import { useState } from "react";
import cn from "classnames";
import styles from "./PageUserSetting.module.sass";
import Cover from "../Profile/Cover";
import Input from "../Input";
import Field from "../Input/Field";
import Image from "../Image";
import Icon from "../Icon";
import InputFile from "../InputFile";

import { formatWalletAddress } from "../../utils";

const networks = [
    { title: "Connect twitter", icon: "twitter-stroke", connect: false },
    { title: "@jacebednar", icon: "instagram-stroke", connect: true },
];

type PageUserSettingProps = {};

const PageUserSetting = ({}: PageUserSettingProps) => {
    const [upload, setUpload] = useState<boolean>(false);
    const [file, setFile] = useState<string>("");

    const [name, setName] = useState<string>("Jace Bednar");
    const [username, setUsername] = useState<string>("jacebednar");
    const [wallet, setWallet] = useState<string>(
        "hk980io73bz880hk980io73bz880"
    );
    const [avatar, setAvatar] = useState<string>("");

    return (
        <div className={cn("section-main", styles.section)}>
            <div className={cn("container-sm", styles.container)}>
                <div className={styles.head}>
                    <div className={styles.title}>
                        <h1 className={cn("h1", styles.title)}>Jace Bednar</h1>
                        <button className={cn("button", styles.save)}>
                            Save settings
                        </button>
                    </div>
                    <div className={styles.info}>
                        Update your profile info and manage your wallet
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={styles.side}>
                        <Field label="Profile cover">
                            <Cover
                                upload={upload}
                                setUpload={setUpload}
                                value={file}
                                onChange={setFile}
                                cover="/images/content/profile-cover.png"
                                min
                            />
                        </Field>
                        <Field label="Display name">
                            <Input
                                value={name}
                                onChange={setName}
                                placeholder="Display name"
                            />
                        </Field>
                        <Field label="Username">
                            <Input
                                className={styles.username_input}
                                value={username}
                                onChange={setUsername}
                                placeholder="Username"
                                success="Username is available"
                                arobase
                            />
                        </Field>
                        <Field label="Wallet address">
                            <div className={styles.wallet_status}></div>
                            <Input
                                className={styles.wallet_input}
                                value={formatWalletAddress(wallet, 10, 10)}
                                onChange={setWallet}
                                error="Disconnect wallet"
                            />
                            <div className={styles.wallet_icon}>
                                <Image
                                    src="/images/content/logos/metamask.svg"
                                    width={20}
                                    height={20}
                                    alt="Metamask"
                                />
                            </div>
                        </Field>
                        <Field label="Social links">
                            <div className={styles.links}>
                                {networks.map((x, index) => (
                                    <button
                                        className={cn(
                                            "button-stroke",
                                            styles.button_link,
                                            { [styles.connected]: x.connect }
                                        )}
                                        key={index}
                                    >
                                        <Icon name={x.icon} />
                                        {x.title}
                                        {x.connect && (
                                            <div className={styles.disconnect}>
                                                <Icon
                                                    className={styles.close}
                                                    name="close"
                                                    size={20}
                                                />
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </Field>
                    </div>
                    <div className={styles.avatar}>
                        <div className={styles.preview}>
                            <Image
                                src="/images/content/avatar.png"
                                width={128}
                                height={128}
                                alt="Jace Bednar"
                            />
                        </div>
                        <div>
                            <div className={styles.note}>
                                We recommended an image of at least 800x800px.
                                Max 2mb.
                            </div>

                            <button
                                className={cn(
                                    "button-stroke button-sm",
                                    styles.change_avatar
                                )}
                            >
                                <InputFile value={avatar} onChange={setAvatar}>
                                    <div>Change avatar</div>
                                </InputFile>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageUserSetting;
