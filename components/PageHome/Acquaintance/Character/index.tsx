import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";
import styles from "./Character.module.sass";
import Image from "../../../Image";
import Icon from "../../../Icon";

type CharacterProps = {
    className?: string;
    forModal?: boolean;
    value: any;
};

const Character = ({ className, forModal, value }: CharacterProps) => {
    const [play, setPlay] = useState<boolean>(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (!videoRef.current) return;
        play ? videoRef.current.play() : videoRef.current.pause();
    }, [play]);

    return (
        <div className={cn(styles.character, className)}>
            <div className={cn(styles.wrapper, { [styles.modal]: forModal })}>
                <video
                    className={styles.video}
                    ref={videoRef}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                >
                    {value.map((x: any, index: number) => (
                        <source src={x.src} type={x.type} key={index} />
                    ))}
                </video>

                <div className={styles.orbit}>
                    <Image
                        src="/images/content/orbit.svg"
                        width="512"
                        height="98"
                        alt="Orbit"
                    />
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setPlay(!play);
                        }}
                        className={styles.control}
                    >
                        {play ? <Icon name="start" /> : <Icon name="pause" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Character;
