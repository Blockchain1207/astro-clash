import type { NextPage } from "next";
import Layout from "../components/Layout";
import PageMarketplace from "../components/PageMarketplace";

const Marketplace: NextPage = () => {
    return (
        <Layout>
            <PageMarketplace />
        </Layout>
    );
};

export default Marketplace;
