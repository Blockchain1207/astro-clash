type ImagesType = {
    src: string;
    width: number;
    height: number;
    alt: string;
};

const images: ImagesType[] = [
    {
        src: "/images/content/spaceship.png",
        width: 330,
        height: 200,
        alt: "Spaceship",
    },
    {
        src: "/images/content/ufo-2.png",
        width: 328,
        height: 328,
        alt: "Ufo",
    },
];

export { images };
