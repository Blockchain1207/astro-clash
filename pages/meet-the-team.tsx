import type { NextPage } from "next";
import Layout from "../components/Layout";
import Main from "../components/PageMeetTheTeam/Main";
import About from "../components/PageMeetTheTeam/About";
import Meet from "../components/PageMeetTheTeam/Meet";

const Marketplace: NextPage = () => {
    return (
        <Layout>
            <Main />
            <About />
            <Meet />
        </Layout>
    );
};

export default Marketplace;
