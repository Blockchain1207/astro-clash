import type { NextPage } from "next";
import Layout from "../components/Layout";
import Location from "../components/PagePlanetLocation/Location";

const Marketplace: NextPage = () => {
    return (
        <Layout hideFooter>
            <Location />
        </Layout>
    );
};

export default Marketplace;
