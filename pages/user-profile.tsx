import type { NextPage } from "next";
import Layout from "../components/Layout";
import PageProfile from "../components/PageUserProfile";

const UserProfile: NextPage = () => {
    return (
        <Layout>
            <PageProfile />
        </Layout>
    );
};

export default UserProfile;
