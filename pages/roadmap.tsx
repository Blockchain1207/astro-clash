import type { NextPage } from "next";
import Layout from "../components/Layout";
import PageRoadmap from "../components/PageRoadmap";

const PageList: NextPage = () => {
    return (
        <Layout gray>
            <PageRoadmap />
        </Layout>
    );
};

export default PageList;
