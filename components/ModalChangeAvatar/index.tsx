import { useState } from "react";
import cn from "classnames";
import styles from "./ModalChangeAvatar.module.sass";
import Modal from "../Modal";
import Icon from "../Icon";
import Image from "../Image";
import PreviewLoader from "../PreviewLoader";
import InputFile from "../InputFile";
import { useMediaQuery } from "react-responsive";

type ModalChangeAvatarProps = {
    visibleModal: boolean;
    setVisibleModal: (e: boolean) => void;
};

type UploadFileProps = {
    value: string;
    onChange: (e: any) => void;
    uploading?: boolean;
    uploaded?: boolean;
};

type NFTsProps = {
    value: number;
    onClick: (e: number) => void;
};

const avatars = [
    { src: "/images/content/marketplace-1.png", color: "#30B28C" },
    { src: "/images/content/marketplace-3.png", color: "#9F73E6" },
    { src: "/images/content/marketplace-3.png", color: "#FDC24F" },
    { src: "/images/content/marketplace-1.png", color: "#9F73E6" },
    { src: "/images/content/marketplace-3.png", color: "#E45F35" },
];

const Upload = ({ value, onChange, uploading, uploaded }: UploadFileProps) => {
    return (
        <div className={styles.upload}>
            {(uploaded || uploading) && (
                <div className={styles.loader}>
                    {uploaded && (
                        <button className={styles.remove}>
                            <Icon name="close-bold" size={16} />
                        </button>
                    )}

                    <PreviewLoader
                        srcImage="/images/content/loader-char-2.jpg"
                        min
                        loaded={uploaded}
                    />
                    <div className={cn("title", styles.status)}>
                        {uploaded ? "Uploaded!" : "Uploading..."}
                    </div>
                </div>
            )}

            <InputFile
                className={cn(styles.upload_file, {
                    [styles.disabled]: uploaded || uploading,
                })}
                value={value}
                onChange={onChange}
                note="Size recommend 800x800. Max 2mb."
                disabled={uploaded || uploading}
                min
            />
        </div>
    );
};

const NFTs = ({ value, onClick }: NFTsProps) => {
    return (
        <>
            <div className={styles.note}>
                Select one of your NFTs to create an avatar.
            </div>
            <div className={styles.avatars}>
                {avatars.map((x, index) => (
                    <div
                        className={cn(styles.avatar, {
                            [styles.selected]: index === value,
                        })}
                        style={{ backgroundColor: x.color }}
                        onClick={() => onClick(index)}
                        key={index}
                    >
                        <div className={styles.check}>
                            <Icon name="check" />
                        </div>
                        <Image
                            src={x.src}
                            height={64}
                            width={64}
                            alt="Avatar"
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

const ModalChangeAvatar = ({
    visibleModal,
    setVisibleModal,
}: ModalChangeAvatarProps) => {
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const [tab, setTab] = useState<string>("nfts");
    const [file, setFile] = useState<string>("");
    const [avatar, setAvatar] = useState<number>(1);

    return (
        <Modal
            size={!isMobile ? "xlarge" : "small"}
            visible={visibleModal}
            onClose={() => setVisibleModal(false)}
        >
            <div className={styles.wrapper}>
                <div className={cn("title", styles.title)}>Change avatar</div>
                <div className={styles.tabs}>
                    <button
                        className={cn(styles.tab, {
                            [styles.active]: tab == "nfts",
                        })}
                        onClick={() => setTab("nfts")}
                    >
                        Choose from NFTs
                    </button>
                    <button
                        className={cn(styles.tab, {
                            [styles.active]: tab == "upload",
                        })}
                        onClick={() => setTab("upload")}
                    >
                        Upload photo
                    </button>
                </div>

                <div className={styles.content}>
                    {
                        {
                            nfts: <NFTs value={avatar} onClick={setAvatar} />,
                            upload: <Upload value={file} onChange={setFile} />,
                        }[tab]
                    }
                    <button className={cn("button", styles.confirm)}>
                        Change avatar
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ModalChangeAvatar;
