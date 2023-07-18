type wishlistType = {
    [key: string]: {
        title: string;
        count: number;
        url: string;
        image: {
            [key: string]: number | string;
        };
        items: {
            [key: string]: number | string;
        }[];
    }[];
};

const wishlists: wishlistType = {
    all: [
        {
            title: "Lamburr #001",
            count: 8,
            url: "/wishlist-detailed",
            image: {
                src: "/images/content/characters/image-3.png",
                width: 372,
                height: 372,
                alt: "Character",
                color: "#E5DCF3",
            },
            items: [
                {
                    src: "/images/content/characters/image-11.png",
                    width: 116,
                    height: 116,
                    alt: "Character",
                    color: "#DDDDDD",
                },
                {
                    src: "/images/content/characters/image-15.png",
                    width: 116,
                    height: 116,
                    alt: "Character",
                    color: "#F3DCED",
                },
                {
                    src: "/images/content/characters/image-1.png",
                    width: 116,
                    height: 116,
                    alt: "Character",
                    color: "#C9D8CF",
                },
            ],
        },
        {
            title: "Astronauto #001",
            count: 12,
            url: "/wishlist-detailed",
            image: {
                src: "/images/content/characters/image-2.png",
                width: 372,
                height: 372,
                alt: "Character",
                color: "#E5DCF3",
            },
            items: [
                {
                    src: "/images/content/characters/image-4.png",
                    width: 116,
                    height: 116,
                    alt: "Character",
                    color: "#EEE3D7",
                },
                {
                    src: "/images/content/characters/image-6.png",
                    width: 116,
                    height: 116,
                    alt: "Character",
                    color: "#EBEBEB",
                },
                {
                    src: "/images/content/characters/image-8.png",
                    width: 116,
                    height: 116,
                    alt: "Character",
                    color: "#D9DDE8",
                },
            ],
        },
        {
            title: "Planets #001",
            count: 33,
            url: "/wishlist-detailed",
            image: {
                src: "/images/content/planets/image-4.png",
                width: 372,
                height: 372,
                alt: "Planets",
                color: "#1146AE",
            },
            items: [
                {
                    src: "/images/content/planets/image-3.png",
                    width: 116,
                    height: 116,
                    alt: "Planets",
                    color: "#420D06",
                },
                {
                    src: "/images/content/planets/image-1.png",
                    width: 116,
                    height: 116,
                    alt: "Planets",
                    color: "#382570",
                },
                {
                    src: "/images/content/planets/image-7.png",
                    width: 116,
                    height: 116,
                    alt: "Planets",
                    color: "#2D36D1",
                },
            ],
        },
        {
            title: "Item #001",
            count: 26,
            url: "/wishlist-detailed",
            image: {
                src: "/images/content/items/gunny.png",
                width: 372,
                height: 372,
                alt: "Item",
                color: "#F2E7D7",
            },
            items: [
                {
                    src: "/images/content/items/bazuka.png",
                    width: 116,
                    height: 116,
                    alt: "Item",
                    color: "#E0DEF9",
                },
                {
                    src: "/images/content/items/boomerang.png",
                    width: 116,
                    height: 116,
                    alt: "Item",
                    color: "#E7ECE4",
                },
                {
                    src: "/images/content/items/sword.png",
                    width: 116,
                    height: 116,
                    alt: "Item",
                    color: "#EDEFF2",
                },
            ],
        },
    ],
    characters: [
        {
            title: "Lamburr #001",
            count: 8,
            url: "/wishlist-detailed",
            image: {
                src: "/images/content/characters/image-3.png",
                width: 372,
                height: 372,
                alt: "Character",
                color: "#E5DCF3",
            },
            items: [
                {
                    src: "/images/content/characters/image-11.png",
                    width: 116,
                    height: 116,
                    alt: "Character",
                    color: "#DDDDDD",
                },
                {
                    src: "/images/content/characters/image-15.png",
                    width: 116,
                    height: 116,
                    alt: "Character",
                    color: "#F3DCED",
                },
                {
                    src: "/images/content/characters/image-1.png",
                    width: 116,
                    height: 116,
                    alt: "Character",
                    color: "#C9D8CF",
                },
            ],
        },
        {
            title: "Astronauto #001",
            count: 12,
            url: "/wishlist-detailed",
            image: {
                src: "/images/content/characters/image-2.png",
                width: 372,
                height: 372,
                alt: "Character",
                color: "#E5DCF3",
            },
            items: [
                {
                    src: "/images/content/characters/image-4.png",
                    width: 116,
                    height: 116,
                    alt: "Character",
                    color: "#EEE3D7",
                },
                {
                    src: "/images/content/characters/image-6.png",
                    width: 116,
                    height: 116,
                    alt: "Character",
                    color: "#EBEBEB",
                },
                {
                    src: "/images/content/characters/image-8.png",
                    width: 116,
                    height: 116,
                    alt: "Character",
                    color: "#D9DDE8",
                },
            ],
        },
    ],
    planets: [
        {
            title: "Planets #001",
            count: 33,
            url: "/wishlist-detailed",
            image: {
                src: "/images/content/planets/image-4.png",
                width: 372,
                height: 372,
                alt: "Planets",
                color: "#1146AE",
            },
            items: [
                {
                    src: "/images/content/planets/image-3.png",
                    width: 116,
                    height: 116,
                    alt: "Planets",
                    color: "#420D06",
                },
                {
                    src: "/images/content/planets/image-1.png",
                    width: 116,
                    height: 116,
                    alt: "Planets",
                    color: "#382570",
                },
                {
                    src: "/images/content/planets/image-7.png",
                    width: 116,
                    height: 116,
                    alt: "Planets",
                    color: "#2D36D1",
                },
            ],
        },
    ],
    items: [
        {
            title: "Item #001",
            count: 26,
            url: "/wishlist-detailed",
            image: {
                src: "/images/content/items/gunny.png",
                width: 372,
                height: 372,
                alt: "Item",
                color: "#F2E7D7",
            },
            items: [
                {
                    src: "/images/content/items/bazuka.png",
                    width: 116,
                    height: 116,
                    alt: "Item",
                    color: "#E0DEF9",
                },
                {
                    src: "/images/content/items/boomerang.png",
                    width: 116,
                    height: 116,
                    alt: "Item",
                    color: "#E7ECE4",
                },
                {
                    src: "/images/content/items/sword.png",
                    width: 116,
                    height: 116,
                    alt: "Item",
                    color: "#EDEFF2",
                },
            ],
        },
    ],
};

export { wishlists };
