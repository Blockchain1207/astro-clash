import type { NextPage } from "next";
import Layout from "../components/Layout";
import PageGettingStarted from "../components/PageGettingStarted";

const GettingStarted: NextPage = () => {
    return (
        <Layout hideFooter>
            <PageGettingStarted />
        </Layout>
    );
};

export default GettingStarted;
