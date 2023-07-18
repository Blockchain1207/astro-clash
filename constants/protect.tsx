type ImagesType = {
    src: string;
    width: number;
    height: number;
    alt: string;
};

const images: ImagesType[] = [
    {
        src: "/images/content/spaceship.png",
        width: 446,
        height: 273,
        alt: "Spaceship",
    },
    {
        src: "/images/content/planets/planet-9.png",
        width: 32,
        height: 32,
        alt: "Planet",
    },
    {
        src: "/images/content/planets/planet-11.png",
        width: 114,
        height: 107,
        alt: "Planet",
    },
    {
        src: "/images/content/planets/planet-9.png",
        width: 20,
        height: 20,
        alt: "Planet",
    },
];

const protect: Array<string> = [
    "Explicabo qui est id maxime ut eum occaecati. Esse maiores aut ut eaque et illum nisi deleniti sequi.",
    "Explicabo qui est id maxime ut eum occaecati. Esse maiores aut ut eaque et illum nisi deleniti sequi.",
    "Explicabo qui est id maxime ut eum occaecati. Esse maiores aut ut eaque et illum nisi deleniti sequi.",
];

export { images, protect };
