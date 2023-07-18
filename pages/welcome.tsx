import type { NextPage } from "next";
import Layout from "../components/Layout";
import PageWelcome from "../components/PageWelcome";

const Welcome: NextPage = () => {
    return (
        <Layout hideFooter gray>
            <PageWelcome />
        </Layout>
    );
};

export default Welcome;
