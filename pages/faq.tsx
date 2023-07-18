import type { NextPage } from "next";
import Layout from "../components/Layout";
import Main from "../components/PageFAQ/Main";
import List from "../components/PageFAQ/List";

const PageList: NextPage = () => {
    return (
        <Layout>
            <Main />
            <List />
        </Layout>
    );
};

export default PageList;
