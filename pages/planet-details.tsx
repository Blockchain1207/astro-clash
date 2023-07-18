import type { NextPage } from "next";
import Layout from "../components/Layout";
import CardDetails from "../components/PagePlanetDetails/CardDetails";
import Popular from "../components/Popular";
import JoinCommunity from "../components/JoinCommunity";

import { planets } from "../mocks/planets";

const Marketplace: NextPage = () => {
    return (
        <Layout>
            <CardDetails />
            <Popular title="You may also like" items={planets} />
            <JoinCommunity />
        </Layout>
    );
};

export default Marketplace;
