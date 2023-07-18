import type { NextPage } from "next";
import Layout from "../components/Layout";
import Page404 from "../components/Page404";

const Home: NextPage = () => {
    return (
        <Layout noAuth>
            <Page404 />
        </Layout>
    );
};

export default Home;
