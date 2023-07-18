import cn from "classnames";
import styles from "./Cover.module.sass";
import Icon from "../../Icon";
import Image from "../../Image";
import Loader from "../../Loader";
import InputFile from "../../InputFile";

type ProfileCoverProps = {
    className?: string;
    upload: boolean;
    setUpload: (upload: boolean) => void;
    value: string;
    onChange: (value: string) => void;
    uploading?: number;
    cover?: string;
    min?: boolean;
};

const ProfileCover = ({
    className,
    upload,
    setUpload,
    value,
    onChange,
    uploading,
    cover,
    min,
}: ProfileCoverProps) => {
    return (
        <div
            className={cn(
                styles.wrapper,
                {
                    [styles.min]: min,
                },
                className
            )}
        >
            {upload ? (
                <InputFile
                    value={value}
                    onChange={onChange}
                    note="Size recommend 2560x756. Max 10mb."
                    className={styles.container}
                    min={min}
                />
            ) : (
                <div className={styles.container}>
                    {uploading && (
                        <>
                            <div
                                className={cn(styles.uploading, {
                                    [styles.min]: min,
                                })}
                            >
                                <Loader spinner={24} />
                                Uploading {uploading}%
                            </div>
                            <div
                                className={styles.loader}
                                style={{ left: uploading + "%" }}
                            ></div>
                        </>
                    )}
                    {cover && (
                        <div
                            className={cn(styles.cover, {
                                [styles.min]: min,
                            })}
                        >
                            <Image
                                src={cover}
                                layout="fill"
                                alt="Profile cover"
                            />
                        </div>
                    )}

                    {!uploading &&
                        (min ? (
                            <div className={styles.buttons}>
                                <button
                                    className={styles.circle_button}
                                    onClick={() => setUpload(true)}
                                >
                                    <Icon name="edit" size={16} />
                                </button>
                                <button
                                    className={styles.circle_button}
                                    onClick={() => setUpload(true)}
                                >
                                    <Icon name="close" size={16} />
                                </button>
                            </div>
                        ) : (
                            <button
                                className={cn(
                                    "button-stroke button-sm",
                                    styles.edit
                                )}
                                onClick={() => setUpload(true)}
                            >
                                Edit cover
                            </button>
                        ))}
                </div>
            )}
        </div>
    );
};

export default ProfileCover;
