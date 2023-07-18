import type { NextPage } from "next";
import Layout from "../components/Layout";
import PageListInner from "../components/PageListInner";

const PageList: NextPage = () => {
    return (
        <Layout>
            <PageListInner />
        </Layout>
    );
};

export default PageList;
