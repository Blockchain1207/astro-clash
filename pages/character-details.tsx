import type { NextPage } from "next";
import Layout from "../components/Layout";
import CardDetails from "../components/PageCharacterDetails/CardDetails";
import Popular from "../components/Popular";
import JoinCommunity from "../components/JoinCommunity";

import { characters } from "../mocks/characters";

const Marketplace: NextPage = () => {
    return (
        <Layout>
            <CardDetails />
            <Popular title="You may also like" items={characters} />
            <JoinCommunity />
        </Layout>
    );
};

export default Marketplace;
