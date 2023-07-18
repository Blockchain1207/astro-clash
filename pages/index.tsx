import type { NextPage } from "next";
import Layout from "../components/Layout";
import PageHome from "../components/PageHome";

const Home: NextPage = () => {
    return (
        <Layout noAuth>
            <PageHome />
        </Layout>
    );
};

export default Home;
