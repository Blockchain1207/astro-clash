import styles from "./PageRoadmap.module.sass";
import Main from "./Main";
import List from "./List";

type PageRoadmapProps = {
    className?: string;
};

const PageRoadmap = ({ className }: PageRoadmapProps) => (
    <>
        <Main />
        <List />
    </>
);

export default PageRoadmap;
