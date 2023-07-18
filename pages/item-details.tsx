import type { NextPage } from "next";
import Layout from "../components/Layout";
import CardDetails from "../components/PageItemDetails/CardDetails";
import Popular from "../components/Popular";
import JoinCommunity from "../components/JoinCommunity";

import { bundles } from "../mocks/bundles";

const Marketplace: NextPage = () => {
    return (
        <Layout>
            <CardDetails />
            <Popular title="You may also like" items={bundles} />
            <JoinCommunity />
        </Layout>
    );
};

export default Marketplace;
