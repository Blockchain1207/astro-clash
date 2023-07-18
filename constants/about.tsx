import { ImageType } from "../types";

type AboutType = {
    image: ImageType;
    title: string;
    content: string;
    list: string[];
};

const about: AboutType[] = [
    {
        image: {
            src: "/images/content/about-char-1.png",
            height: 633,
            width: 633,
            alt: "Astronaut",
        },
        title: "About us",
        content:
            "Est laboriosam aut sint architecto omnis dicta. Architecto pariatur consectetur sunt expedita velit illo vel nihil molestias:",
        list: [
            "Aliquid delectus animi pariatur ut.",
            "Ipsum architecto et eaque.",
            "Enim qui inventore sequi quaerat est soluta.",
            "Hic quibusdam beatae totam est fugit.",
        ],
    },
    {
        image: {
            src: "/images/content/about-char-2.png",
            height: 633,
            width: 633,
            alt: "Monster",
        },
        title: "About us",
        content:
            "Est laboriosam aut sint architecto omnis dicta. Architecto pariatur consectetur sunt expedita velit illo vel nihil molestias:",
        list: [
            "Aliquid delectus animi pariatur ut.",
            "Ipsum architecto et eaque.",
            "Enim qui inventore sequi quaerat est soluta.",
            "Hic quibusdam beatae totam est fugit.",
        ],
    },
];

export { about };
