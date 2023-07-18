type ImagesType = {
    src: string;
    width: number;
    height: number;
    alt: string;
};

const images: ImagesType[] = [
    {
        src: "/images/content/planets/planet-3.png",
        width: 140,
        height: 140,
        alt: "Planet",
    },
    {
        src: "/images/content/planets/planet-9.png",
        width: 32,
        height: 32,
        alt: "Planet",
    },
    {
        src: "/images/content/planets/planet-6.png",
        width: 180,
        height: 180,
        alt: "Planet",
    },
];

const items = [
    {
        title: "Astronauto",
        location: "Tel'Annas, Earth",
        labels: [
            {
                title: "Founders edition",
                color: "purple",
            },
            {
                title: "80,000 supply",
                color: "yellow",
            },
        ],
        video: [
            { src: "/video/astronaut.mp4", type: "video/mp4" },
            { src: "/video/astronaut.webm", type: "video/webm" },
        ],
        text: (
            <>
                <p>
                    Qui ab vel excepturi. Eaque quas nisi. Recusandae temporibus
                    sed architecto enim nisi nam dolores qui et.
                </p>
                <p>
                    Impedit nesciunt dolor quaerat occaecati nisi maxime facere
                    dolore. Praesentium molestiae accusamus nam impedit
                    voluptatem assumenda sit. Voluptatem laborum laborum dolor
                    veniam. Accusantium facilis qui consequatur impedit tempora.
                </p>
            </>
        ),
    },
    {
        title: "Lumburr",
        location: "Eland'orr, Mars",
        labels: [
            {
                title: "Golden ticket",
                color: "green",
            },
            {
                title: "80,000 supply",
                color: "yellow",
            },
        ],
        video: [
            { src: "/video/monster.mp4", type: "video/mp4" },
            { src: "/video/monster.webm", type: "video/webm" },
        ],
        text: (
            <>
                <p>
                    Qui ab vel excepturi. Eaque quas nisi. Recusandae temporibus
                    sed architecto enim nisi nam dolores qui et.
                </p>
                <p>
                    Impedit nesciunt dolor quaerat occaecati nisi maxime facere
                    dolore. Praesentium molestiae accusamus nam impedit
                    voluptatem assumenda sit. Voluptatem laborum laborum dolor
                    veniam. Accusantium facilis qui consequatur impedit tempora.
                </p>
            </>
        ),
    },
];

export { images, items };
