import type { NextPage } from "next";
import Layout from "../components/Layout";
import CardDetails from "../components/PageBundleDetails/CardDetails";
import JoinCommunity from "../components/JoinCommunity";

const Marketplace: NextPage = () => {
    return (
        <Layout>
            <CardDetails />
            <JoinCommunity />
        </Layout>
    );
};

export default Marketplace;
